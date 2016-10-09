<template>
  <div class="overline flo" style="height:100%">

      <Confirm v-bind:dialog="confirm"></Confirm>
      <Dialog v-bind:dialog="dialog"></Dialog>
      <Loading v-if="loadingData"></Loading>
      <!-- main view -->
      <router-view>
      </router-view>


      <!--  footer menu   -->
              <div class="weui_tabbar" v-show="footmenu_show">
                  <a v-link="{path:'message'}" class="weui_tabbar_item weui_bar_item_on">
                      <div class="weui_tabbar_icon">
                          <img src="http://localhost/wap_build_vue/app/css/images/icon_nav_button.png" alt="">
                      </div>
                      <p class="weui_tabbar_label">Message</p>
                  </a>
                  <a v-link="{path:'account'}" class="weui_tabbar_item">
                      <div class="weui_tabbar_icon">
                          <img src="http://localhost/wap_build_vue/app/css/images/icon_nav_msg.png" alt="">
                      </div>
                      <p class="weui_tabbar_label">Account</p>
                  </a>
                  <a v-link="{path:'Near'}" class="weui_tabbar_item">
                      <div class="weui_tabbar_icon">
                          <img src="http://localhost/wap_build_vue/app/css/images/icon_nav_article.png" alt="">
                      </div>
                      <p class="weui_tabbar_label">Find</p>
                  </a>
                  <a href="javascript:;" class="weui_tabbar_item">
                      <div class="weui_tabbar_icon">
                          <img src="http://localhost/wap_build_vue/app/css/images/icon_nav_cell.png" alt="">
                      </div>
                      <p class="weui_tabbar_label">Me</p>
                  </a>
              </div>
</template>

<script>
import {Vue, Router} from "../lib/com.build.js";
import Dialog from '../global/Dialog.vue';
import Confirm from '../global/Confirm.vue';
import Loading from "../global/Loading.vue";
export default {
    components:{Dialog , Confirm , Loading},
       data:function(){
           return {
              loadingData:false,
              message:'Hello world',

              dialog: {
                            title:'标题1',
                            content:'弹窗内容1',
                            show:false
              },
              confirm:{
                  title:'title',
                  content:'content',
                  btn_array:{},
                  show:false
              },
              footmenu_show:true
           }
       },
       methods:{
           changeMessage:function(){
               console.log("changed message");
               this.message = "changed message";
           }
       },
       events:{
           dialog_change_build:function( obj_dialog ){
              this.dialog = obj_dialog;
           },
           confirm_change_build:function(obj_confirm){
              this.confirm = obj_confirm;
           },
           footmenu_show:function(val){
              this.footmenu_show = val;
           },
           loading_data:function(val){
              this.loadingData = val;
           }
       }
}
</script>

<style>
</style>
