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