﻿function showModal() {
    $('#myModal').modal('show');
}


var updateId = null;

function showModal(isUpdate, id) {
    updateId = isUpdate ? id : null;
    var title = isUpdate ? 'Cập nhật danh mục' : 'Thêm mới một danh mục';
    var save = isUpdate ? 'Cập nhật' : 'Thêm mới';
    document.getElementById('myModalLabel').innerHTML = title;
    document.getElementById('save').innerHTML = save;
    $('#myModal').modal('show');
}

function saveIndustry() {
    if (validateInput()) {
        if (updateId) {
            updateIndustry(updateId);
        } else {
            createIndustry();
        }
    }
}

function updateIndustry(id) {
    var CategoryName = document.getElementById("CategoryName");
    var Description = document.getElementById("Description");

    var industryData = {
        CategoryId: id,
        CategoryName: CategoryName.value,
        Description: Description.value
    };

    console.log(industryData);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("hihi: " + industryData);
            toastr.success("Cập nhật thành công")
            document.getElementById('category-name-' + id).innerHTML = industryData.CategoryName;
            document.getElementById('display-order-' + id).innerHTML = industryData.Description;
            document.getElementById("btn-close").click();
        }
    };
    request.open("POST", "/Admin/TblCategories/Edit", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(industryData));
}

function fetchIndustryData(id, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                var industryData = JSON.parse(this.responseText);
                console.log("hihi", industryData);
                callback(null, industryData);
            } catch (err) {
                callback(err);
            }
        }
    };
    request.open("GET", "/Admin/TblCategories/Edit/" + id, true);
    request.send();
}

function populateModalWithIndustryDetails(id) {
    fetchIndustryData(id, function (err, industryData) {
        if (err) {
            console.log("Cannot fetch industry data, opening modal for creating a new category.");
            document.getElementById("CategoryName").value = "";
            document.getElementById("Description").value = "";
            showModal(false);
        } else {
            document.getElementById("CategoryName").value = industryData.categoryName;
            document.getElementById("Description").value = industryData.description;
            showModal(true, id);
        }
    });
}

function createIndustry() {
    var CategoryName = document.getElementById("CategoryName");
    var Description = document.getElementById("Description");
    var checkName = document.getElementById("checkName");
   

    var industryData = {
        CategoryName: CategoryName.value,
        Description: Description.value

    };
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            toastr.success("Thêm thành công")
            var res = JSON.parse(this.responseText);
            if (res.checkName != null) {

                checkName.innerHTML = res.checkName;
                return;
            }

            resetText();
            addRowToTable(res.categoryId, res.categoryName, res.description);
            document.getElementById("btn-close").click();
        }
        
    };
    request.open("POST", "/Admin/TblCategories/Create", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(industryData));
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
            xhr.open("POST", `/Admin/TblCategories/Delete/${id}`);
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




function addRowToTable(id, name, displayorder) {
    console.log("id: ", id + " name: " + name + " display: " + displayorder)
    var table = document.getElementById("tblCategory");
    var row = table.insertRow();
    row.id = 'category-' + id;

    var cell1 = row.insertCell(0);
    cell1.innerHTML = table.rows.length - 1;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = name;
    cell2.id = 'category-name-' + id;  // Thêm id cho cell

    var cell3 = row.insertCell(2);
    cell3.innerHTML = displayorder;
    cell3.id = 'display-order-' + id; // Thêm id cho cell

    var cell4 = row.insertCell(3);
    cell4.className = "table-action";
    //cell4.innerHTML = `<a href="#"><i class="fal fa-pen" style="color: #000000; margin-right: 25px;"></i></a>
    //    <a onclick="deleteIndustry(` + id + `)"><i class="fal fa-trash" style="color: #000000;"></i></a>`;
    cell4.innerHTML = `

    <a href="#" onclick="populateModalWithIndustryDetails(` + id + `)"><i class="fal fa-pen" style="color: #000000; margin-right: 25px;"></i></a>
        <a onclick="deleteIndustry(` + id + `)"><i class="fal fa-trash" style="color: #000000;"></i></a>
        `;
}

function resetText() {
    document.getElementById("CategoryName").value = "";
    document.getElementById("Description").value = "";
    document.getElementById("checkName").innerHTML = "";
    document.getElementById("checkDisplay").innerHTML = "";

}

function validateInput() {
    var isValid = true;
    var CategoryName = document.getElementById("CategoryName");
    var Description = document.getElementById("Description");
    var checkName = document.getElementById("checkName");
    var checkDisplay = document.getElementById("checkDisplay");

    // Reset error messages
    checkName.innerHTML = "";
    checkDisplay.innerHTML = "";

    // Check if CategoryName is empty
    if (!CategoryName.value.trim()) {
        checkName.innerHTML = "Tên danh mục không được để trống";
        isValid = false;
    }

    // Check if Description is empty
    if (!Description.value.trim()) {
        checkDisplay.innerHTML = "Mô tả danh mục không được để trống";
        isValid = false;
    }

    return isValid;
}





//Tìm kiêm 



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
    html += '<tr id="hihi-' + industry.categoryId + '">';
        html += '<td class="col-1">' + STT + '</td>';
        html += '<td id="industry-' + industry.categoryName + '" class="col-5">' + industry.categoryName + '</td>';
        html += '<td class="col-3">' + industry.description + '</td>';
        html += '<td class="table-action col-3">';
            html += '<a onclick="getIndustryById(' + industry.categoryId + ')" data-bs-toggle="modal" data-bs-target="#myModal">';
                html += '<i class="fal fa-pen" style="color: #000000; margin-right: 25px;"></i>';
                html += '</a>';
            html += '<a onclick="deleteIndustry(' + industry.categoryId + ')">';
                html += '<i class="fal fa-trash" style="color: #000000;"></i>';
                html += '</a>';
            html += '</td>';
        html += '</tr>';
                    }
    document.getElementById("tbody").innerHTML = html;
    toastr.info("Tìm thấy: " + industries.length + " kết quả.");
                }
            };
    xhr.open("GET", '/Admin/TblCategories/Search?name=' + encodeURIComponent(name), true);
    xhr.send();
        }

    document.getElementById("search").addEventListener("click", searchIndustries);
