app.controller('homeController', ["$scope", '$rootScope', '$timeout', '$window', function($scope, $rootScope, $timeout, $window){
	
	var init = function(){
		$timeout(function(){
			$rootScope.resize($('#num_0'));
			
			initSlide();
		}, 100);
	};
	
	var initSlide = function(){
		// 轮播
		$(".slideBox").slide({
			mainCell: ".bd ul",
			effect: "leftLoop",
			autoPlay: true,
			startFun: function(i, c) {
				del();
				
				switch (i) {
				case 0:
					$(".banner1 #a3").addClass('animation3');
					break;
				case 1:
					$("#a1").addClass('animation1');
					break;
				case 2:
					$(".banner3 #a2").addClass('animation2');
					$(".banner3 .another").addClass('animation2_1');
					break;
				default:
					break;
				}
			}
		});
	};
	
	init();
}]);