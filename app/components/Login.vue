<style>


</style>

<template>
<div class="cell">
    <div class="hd">

         <h1 class="page_title">用户登录</h1>

         <div class="weui_cells weui_cells_form">
                 <div class="weui_cell">
                     <div class="weui_cell_hd"
                     ><label class="weui_label">用户名</label></div>
                     <div class="weui_cell_bd weui_cell_primary">
                         <input class="weui_input"
                         type="number"
                         v-model="username"
                         v-on:change="checkphone"  pattern="[0-9]*" placeholder="请输入手机号">
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
                 <a class="weui_btn weui_btn_normal" style="background:#ff4657"
                 v-if="input_valid" href="javascript:" v-on:click="submit">登录</a>
                 <a class="weui_btn weui_btn_normal" v-else href="javascript:" v-on:click="submit">登录</a>
          </div>
    </div>
</div>
</template>


<script>
import AccountService from "../store/account.service";
import {Vue , Router , Resource} from '../lib/com.build';
export default {
   data:function() {
      this.$dispatch('footmenu_show' , false);
      return {
         msg:'Hello World',
         username:'storm',
         password:'',
         input_valid:false
      }
   },
   methods:{
      checkinput:function(){
          var _this = this;
          var username_res = /^1[0-9]{10}/.test(_this.username);
          var pwd_res = /^(\d){6}$/.test(_this.password);
          console.log("pwd+"+pwd_res);
          if(username_res && pwd_res ){
              _this.input_valid = true
          }else{
              _this.input_valid = false
          }

      },

      submit:function(){
          var _this = this;
          var data = {
             username: _this.username,
             password:_this.password
          }

          AccountService.login(data).then(
            function(response){
               console.log(response);
               //跳转到登录后的地址
               _this.$router.go({path:'/account'});
          } , function( error){
               console.log(error);
          })



/*

          Vue.http.get('http://localhost/wap_build_vue/data/login.json')
                     .then(function( response ){
                         console.log(response.body);
                     },function(response){
                         console.log(response);
                     });

                     */
      },
      changename:function(){

      },
      changepwd:function(){
      }
   },
   watch:{
      "username" : 'checkinput',
      "password" : 'checkinput'
   }
}
</script>

