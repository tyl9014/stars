app.controller('littleCatController', ["$scope", '$rootScope', '$timeout', '$window', function($scope, $rootScope, $timeout, $window){
	
	var init = function(){
		$timeout(function(){
			$rootScope.resize($('#num_1'));
			
			$('.server ul').removeClass('server_ul').addClass('server_ul_hover');
			
			$('.server ul li').hover(function() {
				$(this).find('.server_mask').stop().animate({
					height: '100%'
				},'slow')
			},
			function() {
				$(this).find('.server_mask').stop().animate({
					height: '0%'
				})
			});
		}, 100);
	};
	
	init();
}]);