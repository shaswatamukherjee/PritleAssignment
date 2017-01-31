var myApp = angular.module('pritleApp',['ngRoute','ngMaterial']);

//Removes the hash from the URL
myApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

myApp.controller('assign1Controller', ['$rootScope','$scope', function ($rootScope, $scope) {
    $scope.elementArray;
    $scope.showPopup = function(index) {
        window.alert('Index in the array for the element clicked is '+ index);
    };
}]);

myApp.controller('assign3Controller', ['$rootScope','$scope', function ($rootScope, $scope) {
    var imgTags = document.getElementById('imgList').getElementsByTagName('img');
    var imgArray = new Array();
    for(var i = 0; i < imgTags.length;i++) {
        var obj = new Object();
        obj[imgTags[i].getAttribute('title')+' '+ i] = imgTags[i].getAttribute('src');
        imgArray.push(obj);
    }
    $scope.data = JSON.stringify(imgArray);
}]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/assign1', {
        templateUrl: 'pages/assignment1.html',
        controller: 'assign1Controller'
    })
    .when('/assign2', {
        templateUrl: 'pages/assignment2.html',
        controller: 'assign2Controller'
    })
    .when('/assign3', {
        templateUrl: 'pages/assignment3.html',
        controller: 'assign3Controller'
    })
    .when('/assign4', {
        templateUrl: 'pages/assignment4.html',
        controller: 'assign4Controller'
    })
    .when('/assign5', {
        templateUrl: 'pages/assignment5.html',
        controller: 'assign5Controller'
    })
    .when('/assign6', {
        templateUrl: 'pages/assignment6.html',
        controller: 'assign6Controller'
    })
    .otherwise({redirectTo: '/assign1'})
});