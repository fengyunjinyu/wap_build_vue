import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

var Baseurl = "http://localhost/wap_build_vue/data/";

var User = {
    'login':{
        url:'',
        data:'',
        type:''

    },
    'getmsg':{
        url:'',
        data:''

    },
    'register':{
        url:'',
        data:''
    }
}

function ParseUrl(data ,callback_success , callback_error){
    var obj = {};
    for(var key in data){
        var item_data = data[key];
        obj[key] = Vue.http.get(item_data.url , item_data.data).then(callback_success , callback_error);


    }
    return obj;
}

module.exports = ParseUrl(User);
