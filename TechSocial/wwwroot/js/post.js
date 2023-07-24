function showModal() {
    $('#myModal').modal('show');
}
var initialData = "";

// Khởi tạo CKEditor cho phần tử với ID "editor"
CKEDITOR.replace('editor', {
    on: {
        instanceReady: function (ev) {
            // Lưu trữ dữ liệu ban đầu khi CKEditor đã sẵn sàng
            initialData = ev.editor.getData();
        }
    }
});

var updateId = null;

function showModal(isUpdate, id) {
    updateId = isUpdate ? id : null;
    var title = isUpdate ? 'Cập nhật danh mục' : 'Thêm mới một bài viết';
    var save = isUpdate ? 'Cập nhật' : 'Thêm mới';
    document.getElementById('myModalLabel').innerHTML = title;
    document.getElementById('save').innerHTML = save;
    $('#myModal').modal('show');
}

function saveIndustry() {
    if (updateId) {
        updatePost(updateId);
    } else {
        if (validateForm()) {
            $('#fileInput').parent().find('img').remove();
            createIndustry();
        }
    }
}

function updatePost(postId) {
    let formData = new FormData();

    let title = document.querySelector("#Title").value;
    let categoryId = document.querySelector("#CategoryId").value;
    var editorData = CKEDITOR.instances.editor.getData();
    //let content = tinyMCE.get('Content').getContent();
    let fileInput = document.querySelector('input[type="file"]');
    let file = fileInput.files[0];
    formData.append('tblPost.PostId', postId);
    formData.append('tblPost.Title', title);
    formData.append('tblPost.CategoryId', categoryId);
    formData.append('tblPost.Content', editorData);
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/Admin/TblPosts/Edit");
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            if (response.success) {
                toastr.success("Cập nhật thành công");
                document.querySelector("#title-" + postId).textContent = response.data.title;
                document.querySelector("#createdAt-" + postId).textContent = response.data.createdAt;
                document.querySelector("#imagesrc-" + postId + " img").src = response.data.imgSrc;
                document.querySelector("#username-" + postId).textContent = response.data.userName;
                document.querySelector("#category-name-" + postId).textContent = response.data.categoryName;
                document.querySelector("#btn-close").click();
                // Cập nhật giao diện tại đây nếu cần
            } else {
                toastr.error("Cập nhật không thành công");
            }
        } else {
            alert("Có lỗi xảy ra trong quá trình gửi yêu cầu. Vui lòng thử lại sau.");
        }
    }
    xhr.onerror = function () {
        alert("Có lỗi xảy ra trong quá trình gửi yêu cầu. Vui lòng thử lại sau.");
    };
    xhr.send(formData);
}

//function updatePost(postId) {
//    let formData = new FormData();

//    let title = $("#Title").val();
//    let categoryId = $("#CategoryId").val();
//    let content = tinyMCE.get('Content').getContent();
//    let fileInput = document.querySelector('input[type="file"]');
//    let file = fileInput.files[0];
//    formData.append('tblPost.PostId', postId);
//    formData.append('tblPost.Title', title);
//    formData.append('tblPost.CategoryId', categoryId);
//    formData.append('tblPost.Content', content);
//    formData.append('file', file);

//    $.ajax({
//        type: "POST",
//        url: '/Admin/TblPosts/Edit', // Thay đổi tên đường dẫn này theo tên controller của bạn
//        data: formData,
//        contentType: false,
//        processData: false,
//        success: function (response) {
//            if (response.success) {
//                toastr.success("Cập nhật thành công")
//                $("#title-" + postId).text(response.data.title);
//                $("#createdAt-" + postId).text(response.data.createdAt);
//                $("#imagesrc-" + postId + " img").attr("src", response.data.imgSrc);
//                $("#username-" + postId).text(response.data.userName);
//                $("#category-name-" + postId).text(response.data.categoryName);
//                document.getElementById("btn-close").click();
//                // Cập nhật giao diện tại đây nếu cần
//            } else {
//                toastr.error("Cập nhật không thành công")

//            }
//        },
//        error: function (error) {
//            alert("Có lỗi xảy ra trong quá trình gửi yêu cầu. Vui lòng thử lại sau.");
//        }
//    });
//}





function deleteIndustry(id) {
    Swal.fire({
        title: 'Bạn có chắc không??',
        text: "Bạn sẽ không thể hoàn nguyên điều này!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý xoá!',
        cancelButtonText: 'Không'
    }).then((result) => {
        if (result.isConfirmed) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", `/Admin/TblPosts/Delete/${id}`);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function () {
                if (this.readyState == 4 && this.status == 200) {
                    toastr.success("Xoá danh mục thành công")
                    document.getElementById('tblCategory').deleteRow(document.getElementById('category-' + id).rowIndex);
                } else {
                    toastr.error("Có lỗi khi xóa. Mã lỗi: " + xhr.status);
                }
            };
            xhr.onerror = function () {
                toastr.error("Đã xảy ra lỗi khi xóa bản ghi.");
            };
            xhr.send();
        }
    })
}





function resetText() {
    document.getElementById("Title").value = "";
    document.getElementById("CategoryId").selectedIndex = 0;
    CKEDITOR.instances.editor.setData(initialData);
    //CKEDITOR.instances.editor.setData(data);
    //tinymce.get('Content').setContent('');
    document.getElementById("checkName").innerText = "";
    document.getElementById("checkDisplay").innerText = "";

    var oldFileInput = document.getElementById("fileInput");
    var newFileInput = document.createElement("input");
    newFileInput.type = "file";
    newFileInput.id = "fileInput";
    newFileInput.name = "file";
    newFileInput.className = "form-control";
    oldFileInput.parentNode.replaceChild(newFileInput, oldFileInput);
}


function createIndustry() {
    let title = document.querySelector('#Title').value;
    let categoryId = document.querySelector('#CategoryId').value;
    //let content = tinyMCE.get('Content').getContent();
    var content = CKEDITOR.instances.editor.getData();
    let file = document.querySelector('input[type="file"]').files[0];
    let sttValue = document.querySelector('#tblCategory tbody tr:last-child').dataset.stt;
    let STT = parseInt(sttValue) + 1;


    let formData = new FormData();
    formData.append('tblPost.Title', title);
    formData.append('tblPost.CategoryId', categoryId);
    formData.append('tblPost.Content', content);
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/Admin/TblPosts/Create");
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            if (response.success) {
                document.querySelector('#myModal').classList.remove('show');
                toastr.success("Thêm bài viết thành công")
                document.querySelector("#btn-close").click();
                let newRow = `
                    <tr id="category-${response.data.postId}" data-stt="${STT}">
                        <td id="stt-${response.data.postId}">${STT}</td>
                        <td id="title-${response.data.postId}">
                            ${response.data.title.length > 40 ? response.data.title.substring(0, 40) + "..." : response.data.title}
                        </td>
                        <td id="createdAt-${response.data.postId}">
                            ${response.data.createdAt}
                        </td>
                        <td id="imagesrc-${response.data.postId}">
                            <img width="100" height="160" src="${response.data.imgSrc}">
                        </td>
                        <td id="username-${response.data.postId}">
                            ${response.data.userName}
                        </td>
                        <td id="category-name-${response.data.postId}">
                            ${response.data.categoryName}
                        </td>
                        <td class="table-action">
                            <a href="#" onclick="populateModalWithIndustryDetails(${response.data.postId})">
                                <i class="fal fa-pen" style="color: #000000; margin-right: 25px;"></i>
                            </a>
                            <a onclick="deleteIndustry(${response.data.postId})">
                                <i class="fal fa-trash" style="color: #000000;"></i>
                            </a>
                        </td>
                    </tr>
                `;
                document.querySelector('#tblCategory tbody').insertAdjacentHTML('beforeend', newRow);
            } else {
                alert(response.message);
            }
        } else {
            alert('An error occurred while processing your request. Please try again.');
        }
    }
    xhr.onerror = function () {
        alert('An error occurred while processing your request. Please try again.');
    };
    xhr.send(formData);
}



// Tạo một bài viết
//function createIndustry() {
//    let title = $('#Title').val();
//    let categoryId = $('#CategoryId').val();
//    let content = tinyMCE.get('Content').getContent();
//    let file = $('input[type="file"]')[0].files[0];
//    let sttValue = $('#tblCategory tbody tr:last-child td').data('stt');
//    let STT = parseInt(sttValue) + 1;

//    let formData = new FormData();
//    formData.append('tblPost.Title', title);
//    formData.append('tblPost.CategoryId', categoryId);
//    formData.append('tblPost.Content', content);
//    formData.append('file', file);

//    $.ajax({
//        type: 'POST',
//        url: '/Admin/TblPosts/Create',
//        data: formData,
//        processData: false,
//        contentType: false,
//        success: function (response) {
//            if (response.success) {
//                // Handle success scenario
//                $('#myModal').modal('hide');
//                toastr.success("Thêm bài viết thành công")
//                var sttValue = document.querySelector('td').dataset.stt;

//                // Chuyển đổi giá trị sang số (nếu cần)
//                var STT = parseInt(sttValue);

//                var row = document.querySelector('#category-' + postId);
//                var stt = row.dataset.stt;
//                // Add a new row to the table with the new data
//                let newRow = `
//                                                   <tr id="category-${response.data.postId}">
//                                                        <td id="stt-${response.data.postId}">${stt}</td>
//                                                        <td id="title-${response.data.postId}">
//                                                            ${response.data.title.length > 40 ? response.data.title.substring(0, 40) + "..." : response.data.title}
//                                                        </td>
//                                                        <td id="createdAt-${response.data.postId}">
//                                                            ${response.data.createdAt}
//                                                        </td>
//                                                        <td id="imagesrc-${response.data.postId}">
//                                                            <img width="100" height="160" src="${response.data.imgSrc}">
//                                                        </td>
//                                                        <td id="username-${response.data.postId}">
//                                                            ${response.data.userName}
//                                                        </td>
//                                                        <td id="category-name-${response.data.postId}">
//                                                            ${response.data.categoryName}
//                                                        </td>
//                                                        <td class="table-action">
//                                                                    <a href="#" onclick="populateModalWithIndustryDetails(${response.data.postId})">
//                                                                <i class="fal fa-pen" style="color: #000000; margin-right: 25px;"></i>
//                                                            </a>
//                                                            <a onclick="deleteIndustry(${response.data.postId})">
//                                                                <i class="fal fa-trash" style="color: #000000;"></i>
//                                                            </a>
//                                                        </td>
//                                                    </tr>

//                                        `;
//                $('#tblCategory tbody').append(newRow);

//            } else {
//                // Handle error scenario
//                alert(response.message);
//            }
//        },
//        error: function (response) {
//            // Handle error scenario
//            alert('An error occurred while processing your request. Please try again.');
//        }
//    });
//}


function validateForm() {
    var title = document.getElementById("Title").value;
    if (title.trim() === "") {
        document.getElementById("checkName").innerText = "Vui lòng nhập tên bài viết";
        return false;
    } else {
        document.getElementById("checkName").innerText = "";
    }

    //var content = tinyMCE.get('Content').getContent();
    //if (content.trim() === "") {
    //    document.getElementById("checkDisplay").innerText = "Vui lòng nhập nội dung";
    //    return false;
    //} else {
    //    document.getElementById("checkDisplay").innerText = "";
    //}


    var editorData = CKEDITOR.instances.editor.getData().trim(); // Lấy dữ liệu và loại bỏ các ký tự trắng ở đầu và cuối
    if (editorData === '') {
        // CKEditor bị bỏ trống
        document.getElementById("checkDisplay").innerText = "Vui lòng nhập nội dung";
        return false; // Ngăn người dùng gửi form
    } else {
        // CKEditor có dữ liệu
        document.getElementById("checkDisplay").innerText = "";
        return true;
    }


    return true;
}



function populateModalWithIndustryDetail(postId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/Admin/TblPosts/Edit/' + postId);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Show the modal
                    document.getElementById('myModal').style.display = 'block';

                    // Populate the fields in the modal
                    document.getElementById('Title').value = response.data.title;
                    document.getElementById('CategoryId').value = response.data.categoryId;
                    // You need to retrieve the actual content here
                    //tinymce.get('Content').setContent(response.data.content, { format: 'raw' });
                    //var editor = CKEDITOR.instances['Content'];
                    //editor.setData(response.data.content);
                    var editor = CKEDITOR.instances['editor'];
                    editor.setData(response.data.content);
                    // Remove the existing image if it exists
                    var imgElement = document.querySelector('#fileInput').parentElement.querySelector('img');
                    if (imgElement) {
                        imgElement.remove();
                    }

                    // Display the existing image
                    var img = document.createElement('img');
                    img.src = response.data.imgSrc;
                    img.width = 100;
                    img.height = 160;
                    document.querySelector('input[type="file"]').parentElement.appendChild(img);

                    showModal(true, postId);
                    console.log(response);
                } else {
                    // Handle error scenario
                    alert(response.message);
                }
            } else {
                // Handle error scenario
                alert('An error occurred while processing your request. Please try again.');
            }
        }
    };
    xhr.send();
}

// đổ dữ liệu lên Modal
//function populateModalWithIndustryDetail(postId) {
//    $.ajax({
//        type: 'GET',
//        url: '/Admin/TblPosts/Edit/' + postId,
//        contentType: 'application/json',
//        dataType: 'json',
//        success: function (response) {
//            if (response.success) {
//                // Show the modal
//                $('#myModal').modal('show');

//                // Populate the fields in the modal
//                $('#Title').val(response.data.title);
//                $('#CategoryId').val(response.data.categoryId);
//                // You need to retrieve the actual content here
//                tinymce.get('Content').setContent(response.data.content, { format: 'raw' });
//                $('#fileInput').parent().find('img').remove();

//                // Display the existing image
//                var img = $('<img>').attr('src', response.data.imgSrc).attr('width', 100).attr('height', 160);
//                $('input[type="file"]').parent().append(img);

//                // Change the onclick attribute of the save button to call the edit function
//                /*      $('#save').attr('onclick', 'editIndustry(' + postId + ')');*/
//                showModal(true, postId);
//                console.log(response);
//            } else {
//                // Handle error scenario
//                alert(response.message);
//            }
//        },
//        error: function (response) {
//            // Handle error scenario
//            alert('An error occurred while processing your request. Please try again.');
//        }
//    });
//}






function searchIndustries() {
    var name = document.getElementById("name").value;
    console.log("Name: " + name);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var industries = JSON.parse(xhr.responseText);
            var html = "";
            for (var i = 0; i < industries.length; i++) {
                var industry = industries[i];
                var STT = i + 1;
                html += '<tr id="category-' + industry.postId+ '" data-stt="' + STT + '">';
                html += '<td>' + STT + '</td>';
                html += '<td id="title-' + industry.postId + '">' + (industry.title.length > 40 ? industry.title.substring(0, 40) + "..." : industry.title) + '</td>';
                html += '<td id="createdAt-' + industry.postId + '">' + industry.createdAt + '</td>';
                html += '<td id="imagesrc-' + industry.postId + '"><img width="100" height="160" src="' + industry.imgSrc + '"></td>';
                html += '<td id="username-' + industry.postId + '">' + industry.userName + '</td>';
                html += '<td id="category-name-' + industry.postId + '">' + industry.categoryName + '</td>';
                html += '<td class="table-action">';
                html += '<a href="#" onclick="populateModalWithIndustryDetail(' + industry.postId + ')">';
                html += '<i class="fal fa-pen" style="color: #000000; margin-right: 25px;"></i>';
                html += '</a>';
                html += '<a onclick="deleteIndustry(' + industry.postId + ')">';
                html += '<i class="fal fa-trash" style="color: #000000;"></i>';
                html += '</a>';
                html += '</td>';
                html += '</tr>';
            }
            document.getElementById("tbody").innerHTML = html;
            toastr.info("Tìm thấy: " + industries.length + " kết quả.");
        }
    };
    xhr.open("GET", 'https://localhost:7163/Admin/TblPosts/Search?name=' + name, true);
    xhr.send();
}
document.getElementById("search").addEventListener("click", searchIndustries);
