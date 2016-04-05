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

	}]) ;
})() ;


