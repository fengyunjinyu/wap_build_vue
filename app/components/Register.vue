<style>


</style>

<template>
<div class="cell">
    <div class="hd">
         <h1 class="page_title">用户注册</h1>

         <div class="weui_cells weui_cells_form">
                 <div class="weui_cell">
                     <div class="weui_cell_hd"><label class="weui_label">用户名</label></div>
                     <div class="weui_cell_bd weui_cell_primary">
                         <input class="weui_input" type="number" v-model="username"  pattern="[0-9]*" placeholder="请输入手机号">
                     </div>
                 </div>
                 <div class="weui_cell">
                     <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
                     <div class="weui_cell_bd weui_cell_primary">
                         <input class="weui_input" type="password" v-model="password" placeholder="请输入密码">
                     </div>
                 </div>

         </div>

          <div class="weui_btn_area">
                 <a class="weui_btn weui_btn_normal" href="javascript:" v-on:click="submit">登录</a>
          </div>
    </div>
</div>
</template>


<script>
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

          /*


          Userstore.bar(
             data ,
          function(res){
              if(res.status){
                  console.log(res.data);
                  //router.go("/");
              }
          },
          function( err ){
              console.warn(err);
          }
          )

          */

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

