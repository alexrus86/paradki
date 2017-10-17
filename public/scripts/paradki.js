(function (angular) {

    angular.module('app', [
        'ui.router',
        'templates.app',
		'excursionStorage.service',
		'main',
		'excursionItem',
		'menuButtonComponent'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');
            
        $stateProvider
					.state('app', {
						abstract: true,
						template: '<ui-view />'
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
        .run(function () {           
            
            //$rootScope.$on('$stateChangeStart', onRouteStateChangeStart);
            
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
    
    function ExcursionItemCtrl(excursionStorageService,$stateParams) {
        
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
		
		vm.currentItem = excursionStorageService.getById(Number($stateParams.id));
		
		vm.photosArr = getExcursionPhotos();
		
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
				price:500,
				photos:	{
					"1":{	img:"./images/excursions/item1/1.jpg",
							thumb:"./images/excursions/item1/thumbs/1.jpg"},
					"2":{	img:"./images/excursions/item1/2.jpg",
							thumb:"./images/excursions/item1/thumbs/2.jpg"
						},
					"3":{	img:"./images/excursions/item1/3.jpg",
							thumb:"./images/excursions/item1/thumbs/3.jpg"
						},
					"4":{	img:"./images/excursions/item1/4.jpg",
							thumb:"./images/excursions/item1/thumbs/4.jpg"
						}
				}
			},
			{
				id:1,
				name:"Test",
				description:"test",
				duration:50,
				type:"test",
				price:500,
				photos:	{
					"1":{	img:"./images/excursions/item1/1.jpg",
							thumb:"./images/excursions/item1/thumbs/1.jpg"},
					"2":{	img:"./images/excursions/item1/2.jpg",
							thumb:"./images/excursions/item1/thumbs/2.jpg"
						},
					"3":{	img:"./images/excursions/item1/3.jpg",
							thumb:"./images/excursions/item1/thumbs/3.jpg"
						},
					"4":{	img:"./images/excursions/item1/4.jpg",
							thumb:"./images/excursions/item1/thumbs/4.jpg"
						}
				}
			},
			{
				id:1,
				name:"Test",
				description:"test",
				duration:50,
				type:"test",
				price:500,
				photos:	{
					"1":{	img:"./images/excursions/item1/1.jpg",
							thumb:"./images/excursions/item1/thumbs/1.jpg"},
					"2":{	img:"./images/excursions/item1/2.jpg",
							thumb:"./images/excursions/item1/thumbs/2.jpg"
						},
					"3":{	img:"./images/excursions/item1/3.jpg",
							thumb:"./images/excursions/item1/thumbs/3.jpg"
						},
					"4":{	img:"./images/excursions/item1/4.jpg",
							thumb:"./images/excursions/item1/thumbs/4.jpg"
						}
				}
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