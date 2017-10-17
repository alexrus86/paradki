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