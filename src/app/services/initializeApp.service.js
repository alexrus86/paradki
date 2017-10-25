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