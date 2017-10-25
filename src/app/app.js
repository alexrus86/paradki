(function (angular) {

    angular.module('app', [
        'ui.router',
        'templates.app',
		'excursionStorage.service',
		'main',
		'excursionItem',
		'menuButtonComponent',
		'initializeApp.service'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');
            
        $stateProvider
					.state('app', {
						abstract: true,
						template: '<ui-view />'
						//добавить сюда resolve function + controller обернуть во вьюху меню и статическую часть шаблона - 
						// всё это для кантроля инициализации.
					})
					.state('main', {
						url: '/main',
						templateUrl: 'main.tpl.html',
						controller : 'MainCtrl as main'
					}).state('excursion-item', {
						url: '/excursions/item/:id',
						//url: '/excursion',
						templateUrl: 'excursionItem.tpl.html',
						controller : 'ExcursionItemCtrl as itemCtrl',
						params: {
							obj: null
						}
					}).state('about', {
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
        .run(function (initializeAppService) {           
            
            initializeAppService.run();
        });
    
    
})(window.angular);