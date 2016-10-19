angular
  .module("ngListings", ["ngMaterial", "ui.router"])
  .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){
    
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');

    $stateProvider
      .state('listings',{
        url: '/listings',
        templateUrl: 'components/listings/listings.tpl.html',
        controller: "listingsController as vm"
      })
      .state('listings.new',{
        url: '/new',
        templateUrl: 'components/listings/new/listings.new.tpl.html',
        controller: "newListingsController as vm"
      })
      .state('listings.edit',{
        url: '/edit/:id',
        templateUrl: 'components/listings/edit/listings.edit.tpl.html',
        controller: 'editListingsController as vm',
        params: {
          listing: null
        }
      });

  });
