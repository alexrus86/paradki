(function (angular) {

    angular.module('app', [
        'ui.router',
        'templates.app',
		'excursionStorage.service',
		'main',
		'excursionItem'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');
            
        $stateProvider.state('main', {
						url: '/main',
						templateUrl: 'main.tpl.html',
						controller : 'MainCtrl as main'
					}).state('excursion-item', {
						url: '/excursions/item/:id',
						//url: '/excursion',
						templateUrl: 'excursionItem.tpl.html',
						controller : 'ExcursionItemCtrl as item',
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
        .run(function () {           
            
            //$rootScope.$on('$stateChangeStart', onRouteStateChangeStart);
            
        });
    
    
})(window.angular);
(function (angular) {
    
    angular.module('excursionItem', [
		'excursionStorage.service'
    ])
        .controller('ExcursionItemCtrl', ExcursionItemCtrl);
    
    function ExcursionItemCtrl(excursionStorageService,$stateParams) {
        
        var vm = this;
		vm.currentItem = null;
		debugger;
		vm.currentItem = excursionStorageService.getById(Number($stateParams.id));
		
		console.log(vm.currentItem);

		console.log($stateParams.id);

    }
	
    
})(window.angular);
(function (angular) {
    
    angular.module('main', [
		'excursionStorage.service',
		'excursionItem',
		'ui.router'
    ])
        .controller('MainCtrl', MainCtrl);
    
    function MainCtrl(excursionStorageService,$state) {
        
        var vm = this;
		
		debugger;
		
		vm.excursions = excursionStorageService.get();
		
		vm.goToDetails = function(item){
			debugger;
			$state.go('excursion-item',{ id:item.id });	
		};
    }
	
    
})(window.angular);
(function (angular) {
    
    angular.module('excursionStorage.service', [])
        .service('excursionStorageService', excursionStorageService);
    
    function excursionStorageService() {
		var excursions = [
			{
				id:1,
				name:"Test",
				description:"test",
				duration:50,
				type:"test",
				price:500
			},
			{
				id:2,
				name:"Test",
				description:"test",
				duration:50,
				type:"test",
				price:500
			},
			{
				id:3,
				name:"Test",
				description:"test",
				duration:50,
				type:"test",
				price:500
			}
		];
		
		return {
			get:function(){
				return excursions;
			},
			getById:function(id){
				for(var i=0; excursions.length; i++){
					if(excursions[i].id === id){
						return excursions[i];
					}
				}
			}
		};		
    }
	
})(window.angular);