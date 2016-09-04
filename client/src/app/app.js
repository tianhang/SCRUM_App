/**
 * Created by tianhang on 3/9/2016.
 */
var app = angular.module('app',['ui.router']);


app.config(function ($stateProvider) {

    var states = [
        {
            name: 'projectsinfo',
            url: '/projectsinfo',
            //component:'projectsinfo',
            controller:'ProjInfoCtrl as pci',
            //controllerAs: 'pci',
            templateUrl:'../src/projectsinfo/list.tpl.html',
            resolve:{
                list:function (ProjectService) {
                    //console.log(ProjectService.getAllProjects());
                    /*
                    ProjectService.getAllProjects().then(function (data) {
                        console.log(data);
                        return data;
                    });
                    */
                    //return promise
                    return ProjectService.getAllProjects();
                }
            }
        },
        {
            name: 'currentproject',
            url: '/currentproject',
            template: '<h3>current projects</h3>'
            //component:'comp'
        },
        {
            name: 'myproject',
            url: '/myproject',
            template: '<h3>my projects</h3>'
        }
    ];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });
});


app.controller('ProjInfoCtrl',function ($scope,list) {
    console.log("...........");
    var self = this;
    $scope.list = list;
    self.list = list;

});

//ProjInfoCtrl.$inject = ['$scope','$rootScope','list'];


app.controller('AppCtrl',function () {
    //console.log(list)
});

app.run(function($http) {
    $http.get('../src/data/people.json', { cache: true }).then(function (data) {
       // console.log(data)
    });
});


