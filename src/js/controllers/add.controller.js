function AddController ($http, URL, $state) {

    let vm = this;
<<<<<<< HEAD
=======
    this.addImage = addImage;


    function addImage (imageObj) {
>>>>>>> master

    vm.addImageItem = addImageItem;

    function addImageItem (image) {
console.log('form submitted');
    $http.post(URL, image).then( (res) => {
      console.log(res);


      //Clears the form
      // $scope.image = {};
      //route the user to the home page
      // $state.go('home');
    });
  }

}

AddController.$inject = ['$http', 'URL', '$state'];
export { AddController };
