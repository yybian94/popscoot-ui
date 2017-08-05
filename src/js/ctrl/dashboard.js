angular.module('app.dashboard.ctrl', [])

.controller('DashboardCtrl', function($scope, $sce, configuration) {
	console.log('this is DashboardCtrl');
	$scope.loadingIframe = true;
	$scope.mapSource = $sce.trustAsResourceUrl(configuration.iframe()+"/map");
	window.uploadDone = function(){
		$scope.loadingIframe = false;
		console.log($scope.loadingIframe);
	}
})

