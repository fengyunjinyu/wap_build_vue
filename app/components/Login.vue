<style>
.mod_login{}
.mod_login h1{
   line-height:30px;
   font-size:16px;
   color:#585858;
   width:100%;
   float:left
}
.img_logo{
    width:80px;
    height:80px;
    margin:0 auto;
    background:#f4f4f4
}

</style>

<template>
<div class="overline flo pad_lr_15" style="padding-top:40px;">
     <div class="mag_center img_logo" ></div>
</div>

<div class="overline flo pad_lr_15 clearfid mod_login" style="padding-top:30px;">

    <h1>用户名{{ username }}</h1>
    <input type="text" class="input_normal" v-model="username" placeholder="请输入用户名" />
    <h1>密码</h1>
    <input type="text" class="input_normal" v-model="password" placeholder="请输入密码" />

    <button class="btn_normal mag_t_15" v-on:click="submit">提交</button>



</div>
</template>


<script>
var Vue = require('vue');
var Router = require('vue-router');
Vue.use(require('vue-resource'));
var Userstore = require("../store/user.store");
Vue.use(Router);
var router = new Router();

export default {
   data:function() {
      return {
         msg:'Hello World',
         username:'storm',
         password:''
      }
   },

   methods:{
      update:function(){
          console.log("Hello")
      },
      submit:function(){
      var _this = this;
          console.log("submit");
          console.log(this.username);
          console.log(this.password);
          var data = {
             username: _this.username,
             password:_this.password

          }


          Userstore.login(
             data ,
          function(res){
              if(res.status){
                  console.log(res.data);
                  router.go("/");
              }
          },
          function( err ){
              console.warn(err);
          }
          )

          /*

          Vue.http.post(
             'http://localhost/data/user_login',
             {
                username:'haha',
                password:'zhang'
             }
          ).then(function(res){
             let data = JSON.parse(res.data);
             if(data.success){

             } else {
               console.log(data.err_msg);
             }
          } ,function ( err ){
          console.warn(err)
          });

          */

      },
      changename:function(){

      },
      changepwd:function(){
      }
   }
}
</script>

