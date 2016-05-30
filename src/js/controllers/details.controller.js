function DetailsController ($http, URL, $stateParams, $state) {

  let vm = this;

  vm.deleteImage = deleteImage;

  init();

  function init() {
    $http.get(URL + $stateParams.imageId).then( (res)=> {
      vm.detailsImage = res.data;
    });
  }

  function deleteImage (imageId) {
    $http.delete(URL + imageId).then( (res) =>{
      $state.go('home')
    })
  }
// console.log($stateParams);

}

DetailsController.$inject = ['$http', 'URL', '$stateParams', '$state'];
export { DetailsController };
