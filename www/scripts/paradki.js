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
(function () {
    angular
        .module('menuButtonComponent', [])
        .component('menuButtonComponent', {
            templateUrl : 'menuButtonComponent.tpl.html',
            controller  : menuButtonController,
            controllerAs: 'mbCtrl'
        });	
        
    function menuButtonController() {
        
		var vm = this;
		
		vm.showMenu = showMenu;
		
		initialize();
		
		function showMenu(){
			debugger;
			$("#modalMenu").toggle();
		}
		
		function initialize(){
			$(window).resize(function(){
				console.log("resize");
				if($(document).width() > 720){
					$("#modalMenu").css("display","none");
				}
			});	
		}	
    }
    
})();
(function (angular) {
    
    angular.module('excursionItem', [
		'excursionStorage.service'
    ])
        .controller('ExcursionItemCtrl', ExcursionItemCtrl);
    
    function ExcursionItemCtrl(excursionStorageService,$stateParams,$state,$rootScope) {
        
        var vm = this;
		vm.currentItem = null;
		vm.photosArr = [];
		
		function getExcursionPhotos(){
			var tempArr = [];
			for(var prop in vm.currentItem.photos){
				if(vm.currentItem.photos.hasOwnProperty(prop)){
					tempArr.push(vm.currentItem.photos[prop]); 
				}
			}
			
			return tempArr;
		}
		
		function goToMain(){
			$state.go("main");
		}
		
		vm.goToMain = goToMain;
		
		function loadData(){
			vm.currentItem = excursionStorageService.getById(Number($stateParams.id));
			vm.photosArr = getExcursionPhotos();
		}
		
		try{
			loadData();
		}catch(err){
			
		}
		
		$rootScope.$on('load:excursions', function(){
			loadData();
			$state.reload();
		});	
		
		setTimeout(function(){
			$('#slideshow1').desoSlide({
				thumbs: $('#slideshow1_thumbs li > a'),
				auto: {
					start: true
				},
				first: 1,
				interval: 6000
			});
		},5);
		
    }
    
})(window.angular);
(function (angular) {
    
    angular.module('main', [
		'excursionStorage.service',
		'excursionItem',
		'ui.router'
    ])
        .controller('MainCtrl', MainCtrl);
    
    function MainCtrl(excursionStorageService, $state, $rootScope) {
        
        var vm = this;	
			
		vm.excursions = excursionStorageService.get();
			
		$rootScope.$on('load:excursions', function(){
			vm.excursions = excursionStorageService.get();
			$state.reload();
		});			

		vm.goToDetails = function(item){
			$state.go('excursion-item',{ id:item.id });	
		};
    }
	
    
})(window.angular);
(function (angular) {
    
    angular.module('databaseDataProvider.service.js', [])
        .service('databaseDataProviderService', databaseDataProviderService);
    
    function databaseDataProviderService() {

		
    }
	
})(window.angular);
(function (angular) {
    
    angular.module('excursionStorage.service', [])
        .service('excursionStorageService', excursionStorageService);
    
    function excursionStorageService() {		
		
		var _excursions = null;
		
		return {
			get:function(){
				return _excursions;
			},
			set:function(excursions){
				_excursions = excursions;
			},
			getById:function(id){
				for(var i=0; _excursions.length; i++){
					if(_excursions[i].id === id){
						return _excursions[i];
					}
				}
			}
		};		
    }
	
})(window.angular);
(function (angular) {
    
    angular.module('initializeApp.service', ['excursionStorage.service'])
        .service('initializeAppService', initializeAppService);
    
    function initializeAppService($q, excursionStorageService, $rootScope) {		
		
		var _excursionsPromise = null,
			_excursions;
			
		function runLoadingData(){
			$(".site-wrapper").LoadingOverlay("show");
			
			_excursionsPromise = window.firebase.database().ref("excursions").once('value').then(function(data){			
				_excursions = data.val();
				excursionStorageService.set(_excursions);
			});	

			$q.all([_excursionsPromise]).then(function(){
				
				$rootScope.$broadcast('load:excursions');
				
				$(".site-wrapper").LoadingOverlay("hide");
			});
		}
				
		return {
			run:function(){
				runLoadingData();
			}
		};
    }
	
})(window.angular);