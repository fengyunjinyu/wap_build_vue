import Vue from 'Vue';
import Router from 'vue-router'
import Favlist from './components/Favlist.vue';
import MyComponent from './components/my-component.vue';
import App from './components/App.vue';
import Login from './components/Login.vue';
import Index from './components/Index.vue';



Vue.use(Router);

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