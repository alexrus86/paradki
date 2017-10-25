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