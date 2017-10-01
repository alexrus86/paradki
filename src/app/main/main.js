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