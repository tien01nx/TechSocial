function showModal() {
    $('#myModal').modal('show');
}


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
        createIndustry();
    }
}



function updatePost(postId) {
    let formData = new FormData();

    let title = $("#Title").val();
    let categoryId = $("#CategoryId").val();
    let content = tinyMCE.get('Content').getContent(); 
    let fileInput = document.querySelector('input[type="file"]');
    let file = fileInput.files[0];
    formData.append('tblPost.PostId', postId);
    formData.append('tblPost.Title', title);
    formData.append('tblPost.CategoryId', categoryId);
    formData.append('tblPost.Content', content);
    formData.append('file', file);

    $.ajax({
        type: "POST",
        url: '/Admin/TblPosts/Edit', // Thay đổi tên đường dẫn này theo tên controller của bạn
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.success) {
                toastr.success("Cập nhật thành công")
                $("#title-" + postId).text(response.data.title);
                $("#createdAt-" + postId).text(response.data.createdAt);
                $("#imagesrc-" + postId + " img").attr("src", response.data.imgSrc);
                $("#username-" + postId).text(response.data.userName);
                $("#category-name-" + postId).text(response.data.categoryName);
                document.getElementById("btn-close").click();
                // Cập nhật giao diện tại đây nếu cần
            } else {
                toastr.error("Cập nhật không thành công")
             
            }
        },
        error: function (error) {
            alert("Có lỗi xảy ra trong quá trình gửi yêu cầu. Vui lòng thử lại sau.");
        }
    });
}





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
    document.getElementById("Title").value = ""; // Đặt lại giá trị cho trường "Tên danh mục"
    document.getElementById("CategoryId").selectedIndex = 0; // Đặt lại giá trị cho trường "Thể loại"
    document.getElementById("Content").value = ""; // Đặt lại giá trị cho trường "Nội dung"
    document.getElementById("checkName").innerText = ""; // Xóa thông báo lỗi tên danh mục nếu có
    document.getElementById("checkDisplay").innerText = ""; // Xóa thông báo lỗi nội dung nếu có
    // Đặt lại giá trị cho trường input file (nếu có)
    var fileInput = document.querySelector('input[type="file"]');
    fileInput.value = "";

}





// Tạo một bài viết
function createIndustry() {
    let title = $('#Title').val();
    let categoryId = $('#CategoryId').val();
    let content = tinyMCE.get('Content').getContent();
    let file = $('input[type="file"]')[0].files[0];
    let sttValue = $('#tblCategory tbody tr:last-child td').data('stt');
    let STT = parseInt(sttValue) + 1;

    let formData = new FormData();
    formData.append('tblPost.Title', title);
    formData.append('tblPost.CategoryId', categoryId);
    formData.append('tblPost.Content', content);
    formData.append('file', file);

    $.ajax({
        type: 'POST',
        url: '/Admin/TblPosts/Create',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            if (response.success) {
                // Handle success scenario
                $('#myModal').modal('hide');
                toastr.success("Thêm bài viết thành công")
                var sttValue = document.querySelector('td').dataset.stt;

                // Chuyển đổi giá trị sang số (nếu cần)
                var STT = parseInt(sttValue);

                var row = document.querySelector('#category-' + postId);
                var stt = row.dataset.stt;
                // Add a new row to the table with the new data
                let newRow = `
                                                   <tr id="category-${response.data.postId}">
                                                        <td id="stt-${response.data.postId}">${stt}</td>
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
                $('#tblCategory tbody').append(newRow);

            } else {
                // Handle error scenario
                alert(response.message);
            }
        },
        error: function (response) {
            // Handle error scenario
            alert('An error occurred while processing your request. Please try again.');
        }
    });
}

// đổ dữ liệu lên Modal
function populateModalWithIndustryDetail(postId) {
    $.ajax({
        type: 'GET',
        url: '/Admin/TblPosts/Edit/' + postId,
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
            if (response.success) {
                // Show the modal
                $('#myModal').modal('show');

                // Populate the fields in the modal
                $('#Title').val(response.data.title);
                $('#CategoryId').val(response.data.categoryId);
                // You need to retrieve the actual content here
                tinymce.get('Content').setContent(response.data.content, { format: 'raw' });


                // Display the existing image
                var img = $('<img>').attr('src', response.data.imgSrc).attr('width', 100).attr('height', 160);
                $('input[type="file"]').parent().append(img);

                // Change the onclick attribute of the save button to call the edit function
          /*      $('#save').attr('onclick', 'editIndustry(' + postId + ')');*/
                showModal(true, postId);
                console.log(response);
            } else {
                // Handle error scenario
                alert(response.message);
            }
        },
        error: function (response) {
            // Handle error scenario
            alert('An error occurred while processing your request. Please try again.');
        }
    });
}

