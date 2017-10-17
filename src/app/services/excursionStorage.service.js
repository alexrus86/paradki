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