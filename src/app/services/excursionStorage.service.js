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