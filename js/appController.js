app.controller('appController', ["$scope", '$rootScope', '$location', '$timeout', '$window', function($scope, $rootScope, $location, $timeout, $window){
	
	var init = function(){
		$timeout(function(){
			$('.head ul li a').hover(function(){
				$(this).stop().animate({
					'margin-top': '-30px'
				},200);
			},
			function() {
				$(this).stop().animate({
					'margin-top': '0px'
				},200);
			});
			
			$(window).on('resize', function(){
				$rootScope.resize();
			});
		}, 100);
	};
	
	$scope.isActive = function(path){
		return $location.path() == path;
	};
	
	$rootScope.resize = function($ele){
		var homeHeight = $window.innerHeight;
		//$ele.height(homeHeight);
		$('.num_box').height(homeHeight);
	};
	
	init();
}]);