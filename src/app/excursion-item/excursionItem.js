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