(function (angular) {
    debugger;
    angular.module('app', [
        'ui.router',
        'templates.app'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            debugger;
        $urlRouterProvider.otherwise('/main');
            
        $stateProvider.state('main', {
						url: '/main',
						templateUrl: 'main.tpl.html'
					})
					.state('about', {
						url: '/about-us',
						templateUrl: 'about.tpl.html'       
					}).state('booking', {
						url: '/booking',
						templateUrl: 'booking.tpl.html'       
					}).state('contacts', {
						url: '/contacts',
						templateUrl: 'contacts.tpl.html'       
					}).state('schedule', {
						url: '/schedule',
						templateUrl: 'schedule.tpl.html'       
					});
        })
        .run(function () {           
            
            //$rootScope.$on('$stateChangeStart', onRouteStateChangeStart);
            
        });
    
    
})(window.angular);
