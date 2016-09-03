/**
 * Created by tianhang on 3/9/2016.
 */
var app = angular.module('app',['ui.router']);


app.config(function ($stateProvider) {
    var currProjState = {
        name: 'currentproject',
        url: '/currentproject',
        template: '<h3>current projects</h3>'
    }

    var myProjState = {
        name: 'myproject',
        url: '/myproject',
        template: '<h3>my projects</h3>'
    }

    $stateProvider.state(currProjState);
    $stateProvider.state(myProjState);
});

app.controller('AppCtrl',function () {
    
});




