// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tham chiếu đến nút bằng cách sử dụng querySelector
    const buttonElement = document.querySelector("#loadMoreButton");

    // Kiểm tra xem nút có tồn tại hay không
    if (buttonElement) {
        // Lấy giá trị của thuộc tính "data-id" và gán vào biến idValue
        const idValue = buttonElement.getAttribute("data-id");

        // Bây giờ bạn có thể sử dụng giá trị idValue trong mã JavaScript của mình
        console.log("ID của người dùng là:", idValue);
    }
});


let postCount = 0;

$(document).ready(function () {
    $('#loadMoreButton').click(function () {
        let userId = $(this).data("id");
        postCount += 3;

        console.log("userId::", userId);
        $.ajax({
            url: '/User/LoadMorePosts',
            type: 'GET',
            data: {
                Id: userId,
                offset: postCount
            },
            success: function (response) {
                response.forEach(function (post) {
                    let contentPreview = post.content.length > 50 ? post.content.substring(0, 50) + '...' : post.content;
                    let postHTML = `

                    <div class="box shadow-sm border rounded bg-white mb-3 osahan-post">
                        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="/image/imageUser.jpg" alt="Avatar" height="60px" width="60px">
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div class="font-weight-bold">
                                <div class="text-truncate">${post.identityUser.username}</div>
                                <div class="small text-gray-500">Author</div>
                            </div>
                                <span class="ml-auto small">${post.createdAt}t</span>
                        </div>
                        <div class="p-3 border-bottom osahan-post-body">
          
                            <p class="description-limit">

                               ${contentPreview}
                            </p>
                                <a href="/Home/Details/${post.postId}">Xem thêm</a>
                        </div>
                        <div class="p-3 border-bottom osahan-post-footer">
                                <a href="/Home/Details/${post.postId}" class="mr-3 text-secondary"><i class="fa fa-eye" aria-hidden="true"></i> 16</a>
                                <a href="/Home/Details/${post.postId}" class="mr-3 text-secondary"><i class="fa fa-comment-o" aria-hidden="true"></i>  8</a>

                        </div>
                        
                    </div>
        

                      `;
                    $('#posts').append(postHTML);
                });
            }
        });
    });
});


