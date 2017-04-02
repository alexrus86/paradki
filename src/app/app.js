(function(){
	
	var routerApp = angular.module('routerApp', ['ui.router']);
	
	routerApp.config(function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/index');
	
    $stateProvider
		.state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        .state('about', {
            // we'll get to this in a bit       
        });
        
	});
	
	
	
})();