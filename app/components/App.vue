<template>
  <div class="overline flo">

      <Confirm v-bind:dialog="dialog"></Confirm>
      <!-- main view -->
      <router-view>
      </router-view>


      <!--  footer menu   -->

           <ul class="foot_menu overline">
                 <a v-link="{path:'/invest'}">
                     <li>
                        <div class="menu_ico"></div>
                        <p class="menu_name">invest</p>
                     </li>
                 </a>

                 <a v-link="{path:'/account'}">
                      <li>
                           <div class="menu_ico"></div>
                           <p class="menu_name">Account</p>
                      </li>
                 </a>
                  <a v-link="{path:'/activity'}">
                     <li>
                         <div class="menu_ico"></div>
                         <p class="menu_name">Activity</p>
                     </li>
                 </a>

           </ul>
  </div>
</template>

<script>
import Dialog from '../global/Dialog.vue';
import Confirm from '../global/Confirm.vue';
export default {
    components:{Dialog , Confirm},
       data:function(){
           return {
              message:'Hello world',
              dialog: {
                            title:'标题1',
                            content:'弹窗内容1',
                            btn_array:{},
                            show:false
              }

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
           }
       }
}
</script>

<style>
*{margin:0px;padding:0px;}
.overline {width:100%}
a{text-decoration:none;}

h1.title{
   line-height:40px;
   width:100%;
   font-size:16px;
   background:#f5f6f5
}


html, body{
  font-family: Verdana;
  font-size: 13px;
  height: 100%;
  background:#f5f6f5;
  }

ul{
    list-style-type: none;
      padding: 0;
      margin: 0;

}

ul.list_nav{
   display:flex;
   border-bottom:#d1d1d1 solid 1px;
   background:#f5f6f5;
}

ul.list_nav li{
   flex:1;
   line-height:40px;
   text-align:center
}

ul.list_nav li a{
   display:inline-block;
   line-height:40px;
   font-size:16px;
   color:#585858;
   padding:0px 15px;
   border-bottom:#f5d6d5 solid 2px;
}

ul.list_nav li a.v-link-active{  color:#ff4657; border-bottom:#ff4657 solid 2px;}


.foot_menu{
   position:fixed;
   bottom:0px;
   border-top:#d1d1d1 solid 1px;
   display:flex;
   width:100%;
   background:#fff;
}
.foot_menu a{flex:1 ; display:inline-block}
.foot_menu li{
   flex:1
}
.foot_menu a li .menu_ico{ width:100%;height:40px;}
.foot_menu a li .menu_name{ line-height:20px; font-size:12px; text-align:center }

.foot_menu a.v-link-active li .menu_name{color:#ff4657}



</style>
