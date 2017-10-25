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