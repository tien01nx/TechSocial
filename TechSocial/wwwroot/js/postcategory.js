$(document).ready(function () {
    // Parse the CategoryName from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('CategoryName');

    if (categoryName) {
        $.ajax({
            url: '/Post/Search?CategoryName=' + categoryName,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                renderData(data);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
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
                                    <a href="/Home/Details/${product.id}">
                                        <img class="img-fluid"
                                             src=" ${product.image}"
                                             alt=" Everything Announced at Google Summit">
                                    </a>
                                </div>
                                <div class="grid-cat">
                                    <a class="post-cat" href="/Home/Details/${product.id}">
                                        <span class="before"
                                              style="color:#ffffff "></span> ${product.categoryName}<span class="after" style="color:#ffffff"></span>
                                    </a>
                                </div>
                                <div class="post-content text-center">
                                    <div class="entry-blog-header">
                                        <h3 class="post-title md">
                                            <a href="/Home/Details/${product.id}">
                                                ${product.title}
                                            </a>
                                        </h3>
                                    </div>
                                    <div class="post-meta">
                                        <div class="post-meta">
                                           <span class="post-meta-date">
                                                <i class="fa fa-clock-o" aria-hidden="true"></i> 
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


