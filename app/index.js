import Vue from 'Vue';
import Router from 'vue-router'
import Favlist from './components/Favlist.vue';
import MyComponent from './components/my-component.vue';
import App from './components/App.vue';
import Login from './components/Login.vue';



Vue.use(Router);

var router = new Router();

router.map({
    '/fav':{
        component:Favlist
    },
    '/me':{
        component:MyComponent
    },
    '/login':{
        component:Login
    }
});


router.redirect({
    '*': '/login'
});

router.start(App , "#app");