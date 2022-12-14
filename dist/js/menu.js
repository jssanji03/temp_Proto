const sidebarArea = document.querySelector('#sidebar-wrapper')
const sidebar = () => {
  let template = `
    <a href="#" class="brand-link">
      <img src="../../dist/img/logo.gif" alt="AdminLTE Logo" class="mx-2 brand-image img-circle">
      <span class="brand-text">合利他命</span>
    </a>
    <div class="sidebar">
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <a href="#" class="nav-link nav-menu">
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
                    <p>公司</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="customer.html" class="nav-link">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>客戶</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="sales.html" class="nav-link ">
                    <i class="fas fa-user-alt nav-icon"></i>
                    <p>業務員</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="products.html" class="nav-link">
                    <i class="fas fa-file-alt nav-icon"></i>
                    <p>產品主檔</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="productsItem.html" class="nav-link ">
                    <i class="fas fa-file-alt nav-icon"></i>
                    <p>料號對應表</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="otherProducts.html" class="nav-link ">
                    <i class="fas fa-file-alt nav-icon"></i>
                    <p>產品組合對應表</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-menu">
                <i class="nav-icon far fa-circle"></i>
                <p>
                  業務規劃
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
              <li class="nav-item">
                  <a href="salesBudget.html" class="nav-link ">
                    <i class="fas fa-money-check-alt nav-icon"></i>
                    <p>預算管理</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="salesBudgetClose.html" class="nav-link ">
                    <i class="fas fa-money-check-alt nav-icon"></i>
                    <p>預算管理鎖定</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="salesForecast.html" class="nav-link ">
                    <i class="fas fa-chart-line nav-icon"></i>
                    <p>預估管理</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="salesForecastClose.html" class="nav-link ">
                    <i class="fas fa-chart-line nav-icon"></i>
                    <p>預估管理鎖定</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="todo.html" class="nav-link ">
                    <i class="fas fa-calendar-check nav-icon"></i>
                    <p>代辦事項</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="setRangeClose.html" class="nav-link">
                    <i class="fas fa-unlock nav-icon"></i>
                    <p>期間鎖定</p>
                  </a>
                </li>
                
              </ul>
            </li>
          </ul>
        </nav>
    </div>
   
    `
  // sidebarArea.forEach((x) => {
    
  // })
    sidebarArea.innerHTML = template
}
sidebar()

$(function () {
  const pathname = window.location.pathname.split('/');
  const currentURL = pathname[pathname.length - 1]
  // salesInfo.html
  $(".nav-sidebar li a.nav-link").each( function() {
    const href = $(this).attr("href");
    if (href === currentURL) {
      $(this).addClass("active");
      $(this).parents(".nav-treeview").siblings(".nav-menu").addClass("active")
      $(this).parents(".nav-item").addClass("menu-open")
     }
    });
});