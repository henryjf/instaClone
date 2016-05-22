function HomeController ($scope, $http, URL) {

  init();

  function init() {
    $http.get(URL).then( (res) =>{
      $scope.allImages = res.data;
    });
  }

}

HomeController.$inject = ['$scope', '$http', 'URL'];
export { HomeController };
