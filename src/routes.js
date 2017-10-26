export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/hello');

  $stateProvider
    .state('hello', {
      url: '/hello',
      component: 'hello'
    });
}
