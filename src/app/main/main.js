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