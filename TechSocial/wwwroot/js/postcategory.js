$(document).ready(function () {
    $.ajax({
        url: '/Post/Search', // Cập nhật url phù hợp với đường dẫn tới phương thức GetAll
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Xử lý dữ liệu trả về
            renderData(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
});


function renderData(data) {
    // Biến dùng để lưu HTML
    let htmlContent = '';
    data.forEach(function (product) {
        let productHtml = `
             <article id="post-223"
                                 class="post-layout col-md-6 post-223 post type-post status-publish format-standard has-post-thumbnail hentry category-technology">
                            <div class="post-block-style small-post text-center">
                                <div class="post-thumb">
                                    <a href="../../2020/04/12/everything-announced-at-google-summit/index.html">
                                        <img class="img-fluid"
                                             src=" ${product.image}"
                                             alt=" Everything Announced at Google Summit">
                                    </a>
                                </div>
                                <div class="grid-cat">
                                    <a class="post-cat" href="index.html" style="color:#ffffff ">
                                        <span class="before"
                                              style="color:#ffffff "></span> ${product.categoryName}<span class="after" style="color:#ffffff"></span>
                                    </a>
                                </div>
                                <div class="post-content text-center">
                                    <div class="entry-blog-header">
                                        <h3 class="post-title md">
                                            <a href="../../2020/04/12/everything-announced-at-google-summit/index.html">
                                                ${product.title}
                                            </a>
                                        </h3>
                                    </div>
                                    <div class="post-meta">
                                        <div class="post-meta">
                                            <span class="post-author">
                                                <i class="ts-icon ts-icon-user-solid"></i> <a href="../../author/digiQoles/index.html">digiQoles</a>
                                            </span><span class="post-meta-date">
                                                <i class="ts-icon ts-icon-clock-regular"></i>
                                                ${product.created}
                                            </span>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>




                        </article>
        `;
        // Thêm vào htmlContent
        htmlContent += productHtml;
    });

    // Thêm htmlContent vào div mong muốn
    $('#productContainer').html(htmlContent);
}


