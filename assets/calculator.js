/* JavaScript Document */
// defining an enclosure of an anonymous function
// So that this particular function in the JavaScript file can exist with other JavaScripts in a page
// Everything defined here is going to be to declare the Angular application for the HTML
// Two main elements needed to define Angular application:
// app variable and controller 

(function(){

	// declaring the variable app to be the name myCalculator
	var app = angular.module('myCalculator', []) ;

	// define controller which will be added to app
	// CalculatorController - name of the controller assigned to main Calculator container in the HTML
	// $scope - Angular service
	// $scope allows passing variables between HTML and JavaScript
	app.controller('CalculatorController', ['$scope', function($scope) {

		// Array holds all possible lumen options a user can select from
		// $scope service used to share variables between JavaScript file and the HTML
		$scope.lumen_options = [375, 600, 900, 1125, 1600] ;

		// Stores the first default value want the calculator to use when the page is loaded, as well as whatever the user selects in our select menu.  Need to make sure to pick a starting value that matches one of the values in the array.
		$scope.current_lumens = 600 ;

		// kWh and number of hours of usage per day
		$scope.current_cost = 12 ;
		$scope.current_hours = 3 ;
		// another variable for number of days
		// when calculations are created,
		// tell people how much money they saved based
		// on the whole year.
		$scope.total_days = 365 ;

		// Conversion rates for different types of lightbulbs
		$scope.inc_conversion = .0625 ;
		$scope.hal_conversion = .0450 ;
		$scope.cfl_conversion = .0146 ;
		$scope.led_conversion = .0125 ;

		// need to create a custom function inside the controller to perform the calculations when the form changes.

		// Technically a function is also a variable
		$scope.calculate = function() {
			// toFixed(1) changes the number of decimal places to 1
			$scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1) ;
			$scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1) ;
			$scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1) ;
			$scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1) ;

			// Conditional statement to keep users from entering more than 24 hours
			// if more than 24 hours is entered, it is set back to 24
			if( $scope.current_hours > 24 ) {
				$scope.current_hours = 24 ;
			}

			// temporary variable where calculate the current number of hours times the total number of days, gives the total number of hours.  not going to use this anywhere less..
			var total_hours = $scope.total_days * $scope.current_hours ;

			// convert number is cents field to actual cents
			var cost = $scope.current_cost / 100 ;

			$scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2) ;
			$scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2) ;
			$scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2) ;
			$scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2) ;
		}
		// following function is on the scope, so this function can be run from the html
		$scope.calculate() ;

		// need to set up html file to run calculate function when certain items on page change.

	}]) ;
})() ;


