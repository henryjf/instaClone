function AddController ($http, URL, $state) {

    let vm = this;
    this.addImage = addImage;


    function addImage (imageObj) {

    $http.post(URL, imageObj).then( (res) => {
      console.log(res);


      //Clears the form
      // $scope.image = {};
      //route the user to the home page
      $state.go('home');
    });
  }

}

AddController.$inject = ['$http', 'URL', '$state'];
export { AddController };
