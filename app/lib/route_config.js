export default  {
    '/':{
        component:require("./components//Default.vue")
    },
    '/login':{
        component:require("./components//Login.vue")
    },
    '/account':{
        component:Account,
        subRoutes:{
            "message":{
                component: require("./components//account/Message.vue")
            },
            "article":{
                component:require("./components//account/Article.vue")
            },
            "success" : {
                component:require("./components//account/Success.vue")
            },
            "infos" :{
                component:require("./components//account/Droptab.vue")
            },
            'toast':{
                component:require("./components//account/Toast.vue")
            },
            "":{
                component: require("./components//account/Default.vue")
            }
        }
    },
    '/invest':{
        component:require("./components//invest/Index.vue"),
            subRoutes:{
                "":{
                    component:require("./components//invest/Default.vue")
                },
                "list":{
                    component:require("./components//invest/List.vue")
                },
                "withdraw":{
                    component:require("./components//invest/Withdraw.vue")
                }
        }
    }
}