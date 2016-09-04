/**
 * Created by tianhang on 4/9/2016.
 */
angular.module('app').component('projectsinfo',{
    bindings:{list:'<'},
    templateUrl:'list.tpl.html'
    //template:'<h3>hello world!</h3>'
});

angular.module('app').component('comp',{
    //templateUrl:'list.tpl.html'
    template:'<h3>hello world comp !</h3>'
});
