app.controller('caseController', ["$scope", '$rootScope', '$timeout', '$window', function($scope, $rootScope, $timeout, $window){
	
	var init = function(){
		$timeout(function(){
			$rootScope.resize($('#num_2'));
	
	
			var incr = 902;
			//if(-b == 2){
				function incre(){
					if(incr<1532){
						incr+=15;
						$('.case-top-right span').text(incr);
					}
				}
				setInterval(incre,40);
				setTimeout(function(){
					$('.case ul').removeClass('case_ul').addClass('case_ul_hover');
				},1000)
			//}else{
			//	incr = 800;
			//	$('.case ul').removeClass('case_ul_hover').addClass('case_ul');
			//}
			
	
	
			$(".mr_frbox1").slide({
				titCell: "",
				mainCell: ".mr_frUl1 ul",
				autoPage: true,
				effect: "leftLoop",
				autoPlay: true,
				vis: 1
			});
		}, 10);
	};
	
	init();
}]);