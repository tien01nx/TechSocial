//document.querySelector('#myModal').addEventListener('show.bs.modal', function (event) {
//    fetch('/Admin/TblPosts/Create')  // Replace 'YourController' with the actual controller name
//        .then(response => response.text())
//        .then(html => {
//            document.querySelector('#createFormContainer').innerHTML = html;
//        });
//});


//document.querySelector('#save').addEventListener('click', function (event) {
//    event.preventDefault();

//    var formData = new FormData(document.querySelector('#createForm'));

//    $.ajax({
//        url: '/YourController/Create',  // Replace 'YourController' with the actual controller name
//        method: 'POST',
//        data: formData,
//        processData: false,  // Important! Tells jQuery not to process the data
//        contentType: false,  // Important! Tells jQuery not to set contentType
//        success: function (response) {
//            if (response.success) {
//                alert('Bài viết đã được tạo thành công.');
//                location.reload();  // Reload the page to update the list of posts
//            } else {
//                alert('Có lỗi xảy ra: ' + response.message);
//            }
//        },
//        error: function () {
//            alert('Có lỗi xảy ra khi gửi yêu cầu tới máy chủ.');
//        }
//    });
//});

$(document).on('click', '#save', function (event) {
    event.preventDefault();

    // Cập nhật giá trị của textarea với nội dung từ trình soạn thảo TinyMCE
    tinyMCE.triggerSave();

    var form = $('#createForm');
    var formData = new FormData(form[0]);

    $.ajax({
        url: '/Admin/TblPosts/Create',
        type: 'POST',
        data: formData,
        processData: false,  // Để false để jQuery không xử lý dữ liệu
        contentType: false,  // Để false để jQuery không cài đặt header 'Content-Type'
        success: function (response) {
            if (response.success) {
                $('#myModal').modal('hide');
                toastr.success("Thêm bài viết thành công")
            } else {
                toastr.error("Lỗi đã chạy vào đây")
            }
        }
    });
});


//// Show edit modal
//$(document).on('click', '[data-action="edit"]', function () {
//    var postId = $(this).data('id');

//    $.ajax({
//        url: '/Admin/TblPosts/Edit/' + postId,  // Replace with the actual URL
//        method: 'GET',
//        success: function (html) {
//            console.log(html);
//            $('#myModal .modal-body').html(html);
//            $('#myModal .modal-title').text('Chỉnh sửa bài viết');
//            $('#myModal').modal('show');
//        },
//        error: function () {
//            alert('Có lỗi xảy ra khi tải form chỉnh sửa.');
//        }
//    });
//});

//// Submit edit form
//$(document).on('click', '#myModal #save', function (e) {
//    e.preventDefault();

//    var formData = new FormData($('#myModal form')[0]);

//    $.ajax({
//        url: '/Admin/TblPosts/Edit',  // Replace with the actual URL
//        method: 'POST',
//        data: formData,
//        processData: false,
//        contentType: false,
//        success: function (response) {
//            if (response.success) {
//                alert(response.message);
//                location.reload();
//            } else {
//                alert('Có lỗi xảy ra: ' + response.message);
//            }
//        },
//        error: function () {
//            alert('Có lỗi xảy ra khi gửi yêu cầu tới máy chủ.');
//        }
//    });
//});

//// Delete post
//$(document).on('click', '[data-action="delete"]', function () {
//    var postId = $(this).data('id');

//    if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
//        $.ajax({
//            url: '/Admin/TblPosts/Delete/' + postId,  // Replace with the actual URL
//            method: 'POST',
//            success: function (response) {
//                if (response.success) {
//                    alert(response.message);
//                    location.reload();
//                } else {
//                    alert('Có lỗi xảy ra: ' + response.message);
//                }
//            },
//            error: function () {
//                alert('Có lỗi xảy ra khi gửi yêu cầu tới máy chủ.');
//            }
//        });
//    }
//});



//// Show edit modal
//$(document).on('click', '[data-action="edit"]', function () {
//    var postId = $(this).data('id');

//    $.ajax({
//        url: '/Admin/TblPosts/Edit/' + postId,  // Replace with the actual URL
//        method: 'GET',
//        success: function (html) {
//            $('#myModal .modal-body').html(html);
//            $('#myModal .modal-title').text('Chỉnh sửa bài viết');
//            $('#myModal').modal('show');
//        },
//        error: function () {
//            alert('Có lỗi xảy ra khi tải form chỉnh sửa.');
//        }
//    });
//});

//// Submit edit form
//$(document).on('click', '#myModal #save', function (e) {
//    e.preventDefault();

//    var formData = new FormData($('#myModal form')[0]);

//    $.ajax({
//        url: '/Admin/TblPosts/Edit',  // Replace with the actual URL
//        method: 'POST',
//        data: formData,
//        processData: false,
//        contentType: false,
//        success: function (response) {
//            if (response.success) {
//                alert(response.message);
//                location.reload();
//            } else {
//                alert('Có lỗi xảy ra: ' + response.message);
//            }
//        },
//        error: function () {
//            alert('Có lỗi xảy ra khi gửi yêu cầu tới máy chủ.');
//        }
//    });
//});

//// Delete post
//$(document).on('click', '[data-action="delete"]', function () {
//    var postId = $(this).data('id');

//    if (confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
//        $.ajax({
//            url: '/Admin/TblPosts/Delete/' + postId,  // Replace with the actual URL
//            method: 'POST',
//            success: function (response) {
//                if (response.success) {
//                    alert(response.message);
//                    location.reload();
//                } else {
//                    alert('Có lỗi xảy ra: ' + response.message);
//                }
//            },
//            error: function () {
//                alert('Có lỗi xảy ra khi gửi yêu cầu tới máy chủ.');
//            }
//        });
//    }
//});
