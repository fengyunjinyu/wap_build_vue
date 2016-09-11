import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
/*
new Vue({
    ready:function(){

        var customActions = {
            foo:{ method:"GET" , url:'someItem/foo{/id}' },
            bar:{ method:'POST' , url:'someItem/bar{/id}' }
        }

        var resource = this.$resource('someItem{/id}' , {} , customActions);

        resource.foo({id:1}).then(function(response){
            this.$set('item' , response.json);
        });

        resource.bar({id:1} , {item:this.item}).then(
            function(response){

            },
            function(response){

            }
        );
    }
})

*/


//console.log(VueResource);

function getResource(){

    console.log("JSSS");
    var baseurl = "http://localhost/wap_build_vue/data/";
    var customActions = {
        foo:{
            method:'GET',
            url:'someItem/foo{/id}'
        },
        bar:{
            method:'POST',
            url:'someItem/bar{/id}'
        }
    }

    var resource = Vue.$resource(baseurl+"/user" , {} , customActions , 'json');
    console.log(resource);
    return resource;
}
module.export = getResource();


//Vue.resource( url , [params] , [actions] , [options]);