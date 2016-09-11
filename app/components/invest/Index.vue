<template>
    <div>
       <h2>  Message ! {{ message }} </h2>
    </div>
    <router-view> </router-view>
</template>

<script>
export default {
   data:function(){
       return {
           message: {}
       }
   },
   methods:{
       getmore:function(){
           console.log("get more Ajax Data");
       }

   }

}
</script>