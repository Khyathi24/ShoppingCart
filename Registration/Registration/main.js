
var myapp = angular.module('myapp', ['ngRoute']);

myapp.config(function ($routeProvider) {
    $routeProvider
       .when('/login', {
           templateUrl: 'login.html',
           controller: 'loginctrl'
       });
    $routeProvider
       .when('/home', {
           templateUrl: 'home.html',
           controller: 'homectrl'
       });
    $routeProvider.when('/main', {
        templateUrl: 'main.html',
        controller: 'mainctrl'
    });
    $routeProvider.when('/update', {
        templateUrl: 'update.html',
        controller: 'mainctrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/login'
    });
});


myapp.service('regser', function () {
    this.users = [
        { fname: 'aarya', lname: 'stark', username: "aaryastark", email: "aarya@gmail.com", password: "aarya", mobile: "9898989898", id: '0' },
         { fname: 'sansa',lname:'stark',username:'sansastark',email:"sansa@gmail.com",password:'sansa',mobile:"8978677889", id: '1' },
          { fname: 'jon', lname: 'stark', username: 'jonstark', email: "jon@gmail.com", password: 'jon', mobile: "7987898797", id: '2' }
    ];
    this.adduser = function (user) {
        this.users.push(user);
    };
    this.getuserList = function () {
        return this.users;
    }; 
});
myapp.controller('loginctrl', function ($scope, $location, regser) {
    $scope.click = function () {
        $location.path('/home');
    };

    $scope.login = function (vm) {
        for (var i = 0, length = $scope.arr.length; i < length; i++) {


            if ($scope.arr.username == "aaryastark") {
                $location.path('/main');
            }
            else {
                alert('Invalid details kindly register');
            }
        }

    };
});

myapp.controller('homectrl', function ($scope,$location,regser) {

    
    $scope.submitForm = function (user) {

        if ($scope.Form.$valid) {
            regser.adduser(user);
            $location.path('/main');
              
        }

    };
   
});

myapp.controller('mainctrl', function ($scope,regser,$location) {
    $scope.arr = [];
    $scope.getlist = function () {
        $scope.arr = regser.getuserList();
    };
    $scope.delete = function (index) {
        
        $scope.arr.splice(index, 1);
    };


    $scope.editdata = [];

    for (var i = 0, length = $scope.arr.length; i < length; i++) {
        $scope.editdata[$scope.arr[i].id] = false;
    }
    $scope.modify = function (x) {

        $scope.editdata[x.id] = true;
    };
    $scope.update = function (x) {

        $scope.editdata[x.id] = false;
    };
  
});
