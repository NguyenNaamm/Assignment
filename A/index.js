let app = angular.module("demo_routing", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix(""); //Xóa khoảng thừa của URL
  //Giống switch case
  $routeProvider
    .when("/chu", {
      templateUrl: "../Pages/TrangChu.html",
    })
    .when("/1", {
      templateUrl: "../Pages/GioiThieu.html",
    })
    .when("/2", {
      templateUrl: "../Pages/DanhMucSanPham.html",
    })
    .when("/3", {
      templateUrl: "../Pages/GioHang.html",
    })
    .when("/4", {
      templateUrl: "../Pages/DangNhap.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});
