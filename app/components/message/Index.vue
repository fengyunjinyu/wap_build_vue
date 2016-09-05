<template>
    <div>
       <h2>  Message ! {{ message }} </h2>
    </div>
    <router-view> </router-view>
</template>

<script>

import OtherComponent from './other-component.vue';

module.exports={
   route: {
       data({ to , next }){
           var params = {
               id: to.params.messageId
           }
       }
   },
   data:function{
       return {
           message: {}
       }
   },
   methods:{
       getmore:function(){
           console.log("get more Ajax Data");
       }

   },
   components:{ OtherComponent }

}
</script>