function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  //define app states

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
    .state('details', {
      url: '/details',
      templateUrl: 'templates/details.tpl.html',
      controller: 'DetailsController'
    })
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };
