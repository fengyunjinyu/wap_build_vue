import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

var Baseurl = "http://localhost/wap_build_vue/data/";
var Userstore = {
    login:function(data , callback_success , callback_error){
        Vue.http.post( Baseurl+"user_login.json" , data).then(callback_success , callback_error);
    },
    getmsg:function(data , callback_success , callback_error){
        Vue.http.get(Baseurl+"user_msg.json" , data).then(callback_success , callback_error);

    }
};


module.exports=Userstore;
