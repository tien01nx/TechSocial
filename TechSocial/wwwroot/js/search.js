let productList = [];

// Fetch product data
var xhr = new XMLHttpRequest();
xhr.open("GET", '/Home/Search', true);
xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
        productList = JSON.parse(xhr.responseText);
        console.log(productList);
    } else {
        console.error(xhr);
    }
}
xhr.send(null);

// Handle input event
document.getElementById('searchInput').addEventListener('input', function () {
    const search = this.value.toLowerCase();
    const filteredProducts = productList.filter(p =>
        p.categoryName.toLowerCase().includes(search) ||
        p.title.toLowerCase().includes(search) ||
        p.userName.toLowerCase().includes(search)
    );

    console.log(filteredProducts)

    // Build search results HTML
    let searchResultsHtml = '';
    for (let product of filteredProducts) {
        searchResultsHtml += `<li><a class="dropdown-item" href="/Home/Details/${product.id}">${product.title}</a></li>`;
    }

    // Insert search results into dropdown
    document.getElementById('searchResults').innerHTML = searchResultsHtml;

    // Show/hide the dropdown based on search results
    if (search && filteredProducts.length > 0) {
        document.getElementById('searchResults').classList.add('show');
    } else {
        document.getElementById('searchResults').classList.remove('show');
    }
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('dropdown-item')) {
        e.preventDefault();
        const selectedText = e.target.textContent;
        document.getElementById('searchInput').value = selectedText;
        document.getElementById('searchResults').classList.remove('show');

        // Get the href attribute of the clicked item
        const href = e.target.getAttribute('href');

        // Navigate to the product details page
        window.location.href = href;
    }
});




//let productList = [];

//// Fetch product data
//fetch('/Home/Search')
//    .then(response => response.json())
//    .then(data => {
//        productList = data;
//        console.log(data);
//    })
//    .catch(error => console.log(error));

//// Handle input event
//$('#searchInput').on('input', function () {
//    const search = $(this).val().toLowerCase();
//    const filteredProducts = productList.filter(p =>
//        p.categoryName.toLowerCase().includes(search) ||
//        p.title.toLowerCase().includes(search)
//        || p.userName.toLowerCase().includes(search)
//    );

//    console.log(filteredProducts)

//    // Build search results HTML
//    let searchResultsHtml = '';
//    for (let product of filteredProducts) {
//       /* searchResultsHtml += `<li><a class="dropdown-item" href="#">${product.title} by ${product.author}</a></li>`;*/
//        searchResultsHtml += `<li><a class="dropdown-item" href="/Home/Details/${product.id}">${product.title}</a></li>`;

//    }

//    // Insert search results into dropdown
//    $('#searchResults').html(searchResultsHtml);

//    // Show/hide the dropdown based on search results
//    if (search && filteredProducts.length > 0) {
//        $('#searchResults').addClass('show');
//    } else {
//        $('#searchResults').removeClass('show');
//    }
//});

//$(document).on('click', '.dropdown-item', function (e) {
//    e.preventDefault();
//    const selectedText = $(this).text();
//    $('#searchInput').val(selectedText);
//    $('#searchResults').removeClass('show');

//    // Get the href attribute of the clicked item
//    const href = $(this).attr('href');

//    // Navigate to the product details page
//    window.location.href = href;
//});
