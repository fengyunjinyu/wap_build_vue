import Vue from 'Vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import Favlist from './components/Favlist.vue';
import MyComponent from './components/my-component.vue';
import App from './components/App.vue';
import Login from './components/Login.vue';
import Index from './components/Index.vue';
import Account from './components/account/Index.vue'

import build_resource from './lib/utils.js';
import ExampleStore from './store/example.store.js';

Vue.use(Router);
Vue.use(VueResource);

/**
 * Vue 注册inteceptor 拦截器
 * 所有请求均经过该拦截器
 * @type {string}
 */
    Vue.http.interceptors.push(function( request , next){
        //loading.show = true;

        console.log("Hello");
        next(function(response){
            //loading.show = false;
            console.log("JVSC");
            return response;
        });

    });

Vue.http.options.before = function(response){
    console.log("before");
    console.log(response);

}


var Baseurl = "http://localhost/wap_build_vue/data/";
var Example = build_resource(Vue , Baseurl, ExampleStore);



Example.foo({id:1}).then(
    function(response){
        console.log("hello world");
    },
    function(response){
        console.log('asjjd')

    }
);





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
    },
    '/account':{
        component:Account,
        subRoutes:{
            "message":{
                component: require("./components/account/Message.vue")
            },
            "article":{
                component:require("./components/account/Article.vue")
            },
            "success" : {
                component:require("./components/account/Success.vue")
            },
            "infos" :{
                component:require("./components/account/Droptab.vue")
            },
            "":{
                component: require("./components/account/Default.vue")
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