function AddController ($scope, $http, URL, $state) {

  $scope.addImage = function (imageObj) {

    $http.post(URL, imageObj).then( (res) => {
      console.log(res);


      //Clears the form
      // $scope.image = {};
      //route the user to the home page
      $state.go('home');
    });
  }

}

AddController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddController };
