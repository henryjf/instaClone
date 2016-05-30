function HomeController ($http, URL) {

  let vm = this;

  init();

  function init() {
    $http.get(URL).then( (res) =>{
      vm.allImages = res.data;
    });
  }

}

HomeController.$inject = ['$http', 'URL'];
export { HomeController };
