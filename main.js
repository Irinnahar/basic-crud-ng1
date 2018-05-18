var app = angular.module('myapp',[])
app.controller ('myCtrl', function ($scope) {
	$scope.users = [
		{name: 'irin', address: 'dhaka'}
	]
	$scope.add = function () {
		$scope.userObj = {
			name: $scope.name,
			address: $scope.address
		}
		$scope.users.push($scope.userObj);
		$scope.name ="";
		$scope.address ="";
	}
	$scope.delete = function (index) {
		// console.log(index)
		$scope.users.splice(index,1);
		
	}

	$scope.edit= function(index, user){
		$scope.name = user.name;
		$scope.address = user.address;
		$scope.id = index;
		// console.log(index, user)
	}

	$scope.save = function(){
		$scope.users[$scope.id].name = $scope.name;
		$scope.users[$scope.id].address = $scope.address;

		$scope.name ="";
		$scope.address ="";	}


})