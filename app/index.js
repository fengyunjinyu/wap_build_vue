/*
import Vue from 'Vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

*/

import {Vue , Router , Resource } from './lib/com.build.js';

import App from './components/App.vue';
import Login from './components/Login.vue';
import Index from './components/Index.vue';
import Account from './components/account/Index.vue'

import build_resource from './lib/utils.js';
import ExampleStore from './store/example.store.js';


/*
Vue.use(Router);
Vue.use(VueResource);

/**
 * Vue 注册inteceptor 拦截器
 * 所有请求均经过该拦截器
 * @type {string}
 */
/*
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
};

Vue.http.options.root="http://localhost/wap_build_vue/data/";



var Example = build_resource(Vue , ExampleStore);

Example.foo({id:1}).then(
    function(response){
        console.log("hello world");
    },
    function(response){
        console.log('asjjd')

    }
);

*/



Vue.directive( 'banner' , {
    translate:{
        x:0,
        y:0
    },
    direction:'horizen',
    bind:function(){
        var self = this;
        const vm = this.vm;
        //this.el.addEventListener("touchstart" ,this.touchstart );
        this.el.addEventListener("touchstart" ,function(e){
            self.touchstart(e , self);
        } , false);
        this.el.addEventListener("touchmove" ,function(e){
            self.touchmove(e, self);
        } , false);
        this.el.addEventListener("touchend" , function(e){
            self.touchend(e , self);
        } , false);

    },
    update:function(value , fn){
        this.el.innerHTML = "<div style='position:absolute;" +
        "left:0;top:0;width: 900px;height:100px;background:#848484'>"+value+"</div>";
        var self = this;
        self.tapObj = {};
    },
    touchstart:function( e , self ){
        console.log("MVC");
        var touches = e.touches[0];
        var tapObj = self.tapObj;
        tapObj.pageX = touches.pageX;
        tapObj.pageY = touches.pageY;
        tapObj.clientX = touches.clientX;
        tapObj.clientY = touches.clientY;
        self.time +=new Date();
    },
    touchmove:function(e , self){
        var touches = e.changedTouches[0];
        var tapObj = self.tapObj;
        tapObj.distanceX = -(tapObj.pageX - touches.pageX);
        tapObj.distanceY = -(tapObj.pageY - touches.pageY);
        var pos_x = this.translate.x + tapObj.distanceX;
        console.log(this.translate.x);

        var in_v = pos_x > 0? 0: pos_x;

        if(this.direction == "horizen"){
            this.el.style.transform = "translate("+in_v+"px)";

        }else{
            this.el.style.transform = "translate("+pos_x+"px , "+tapObj.distanceY+"px)";

        }


    },
    touchend:function(e , self){
        var touches = e.changedTouches[0];
        var tapObj = self.tapObj;
        tapObj.distanceX = -(tapObj.pageX - touches.pageX);
        tapObj.distanceY = -(tapObj.pageY - touches.pageY);

        this.translate.x += tapObj.distanceX;
        console.log( tapObj.distanceX+"----"+tapObj.distanceY);
        if(this.direction == "horizen"){
            this.translate.x = this.translate.x > 0 ? 0 : this.translate.x;
            this.el.style.transform = "translate("+ this.translate.x+"px , 0px)";
        }else{
            this.el.style.transform = "translate("+ this.translate.x+"px , "+tapObj.distanceY+"px)";
        }
        //this.el.style.transform = "translate("+ this.translate.x+"px , "+tapObj.distanceY+"px)";
        if(Math.abs(tapObj.distanceX) >Math.abs(tapObj.distanceY) && Math.abs(tapObj.distanceX)>60){

        }
        self.handler(e);
    },
    handler:function(e){
        console.log("doko");

    },
    unbind:function(){

    }

});


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


var router = new Router();
router.map({
    '/':{
        component:Index

    },
    '/login':{
        component:Login
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
            'toast':{
                component:require("./components/account/Toast.vue")
            },
            "":{
                component: require("./components/account/Default.vue")
            }
        }

    }
});
router.start(App , "#app");