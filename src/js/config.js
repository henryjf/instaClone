function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  //define app states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as vm'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController as vm'
    })
    .state('details', {
      url: '/details/:imageId',
      templateUrl: 'templates/details.tpl.html',
      controller: 'DetailsController as vm'
    });
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
