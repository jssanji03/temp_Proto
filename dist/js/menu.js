const sidebarArea = document.querySelector('#sidebar-wrapper')
const sidebar = () => {
    let template = `
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!-- <li class="nav-header">EXAMPLES</li> -->
            <li class="nav-item menu-open">
              <a href="#" class="nav-link active">
                <i class="nav-icon far fa-circle"></i>
                <p>
                  Master
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="index.html" class="nav-link">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>master</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="customer.html" class="nav-link">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>Customer</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="salse.html" class="nav-link ">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>Sales</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="products.html" class="nav-link">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>Products</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="salseBudget.html" class="nav-link ">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>SalesBudget</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="productsItem.html" class="nav-link ">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>ProductsItem</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="otherProducts.html" class="nav-link ">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>裕利產品</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="salesInfo.html" class="nav-link ">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>salesInfo</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
    `
  // sidebarArea.forEach((x) => {
    
  // })
    sidebarArea.innerHTML = template
}
sidebar()

$(function () {
  const pathname = window.location.pathname.split('/');
  const currentURL = pathname[pathname.length-1]
  console.log(pathname[pathname.length-1]);
  $(".nav-sidebar li a.nav-link").each( function() {
    const href = $(this).attr("href");
    if (href === currentURL) {
        $(this).addClass("active");
     }
    });
});