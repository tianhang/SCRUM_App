/**
 * Created by tianhang on 4/9/2016.
 */

angular.module('app').service('ProjectService', function($http) {
    var service = {
        getAllProjects: function() {
            return $http.get('../src/data/people.json', { cache: true }).then(function(resp) {
                //console.log(resp.data);
                return resp.data;
            });
        },

        getPerson: function(id) {
            function personMatchesParam(person) {
                return person.id === id;
            }

            return service.getAllPeople().then(function (people) {
                return people.find(personMatchesParam)
            });
        }
    }

    return service;
})