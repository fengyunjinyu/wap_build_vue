import Vue from 'Vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import Favlist from './components/Favlist.vue';
import MyComponent from './components/my-component.vue';
import App from './components/App.vue';
import Login from './components/Login.vue';
import Index from './components/Index.vue';

import build_resource from './lib/utils.js';
import ExampleStore from './store/example.store.js';

Vue.use(Router);
Vue.use(VueResource);


var Baseurl = "http://localhost/wap_build_vue/data/";

var Example = build_resource(Vue , Baseurl, ExampleStore);

/*

Example.foo({id:1}).then(
    function(response){
        console.log("hello world");
    },
    function(response){
        console.log('asjjd')

    }
);

*/




var demo = new Vue({
        ready: function () {
                var customActions = {
                    foo: {method: 'GET', url: 'someItem/foo{/id}'},
                    bar: {method: 'POST', url: 'someItem/bar{/id}'}
                };

                var resource = this.$resource('someItem{/id}', {}, customActions);

                // GET someItem/foo/1
                resource.foo({id: 1}).then(function(response) {
                    this.$set('item', response.json())
                });

                // POST someItem/bar/1
                resource.bar({id: 1}, {item: this.item}).then(function(response) {
                    // success callback
                }, function(response){
                    // error callback
                });
        }
});

/**

var customActions = {
    foo: {method: 'GET', url: 'someItem/foo{/id}'},
    bar: {method: 'POST', url: 'someItem/bar{/id}'}
};

var resource = Vue.resource('someItem{/id}', {}, customActions);






// GET someItem/foo/1
resource.foo({id: 1}).then(function(response) {
    console.log("dojo");
    //this.$set('item', response.json())
});
console.log(resource);

 */

var router = new Router();

router.map({
    '/':{
        component:Index

    },
    '/login':{
        component:Login
    },
    '/index':{
        component:Index,
        subRoutes:{
            "fav":{
                component:Favlist
            },
            "me":{
                component:MyComponent
            }
        }
    }
});


/*
router.redirect({
    '*': '/index'
});

*/


router.start(App , "#app");