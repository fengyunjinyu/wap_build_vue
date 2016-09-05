<style>

.foot_menu{
   position:fixed;
   bottom:0px;
   border-top:#d1d1d1 solid 1px;
   display:flex
}
.foot_menu li{
   flex:1
}
.foot_menu li .menu_ico{ width:100%;height:40px;background:#f5f6f5 }
.foot_menu li .menu_name{ line-height:20px; font-size:12px; text-align:center }

.foot_menu li  a.v-link-active .menu_name{color:#ff4657}
</style>
<template>
  <div class="overline flo">


     <ul class="overline flo list_nav">
         <li>  <a v-link="{ path: '/index/fav' }">fav</a>  </li>
          <li> <a v-link="{ path: '/index/me' }">me</a>  </li>
     </ul>



     <!--  footer menu   -->

     <ul class="foot_menu overline">
           <a v-link="{path:'/index/message'}"
               <li>
                  <div class="menu_ico"></div>
                  <p class="menu_name">Message</p>
               </li>
           </a>

           <a v-link="{path:'/index/shops'}">
                <li>
                     <div class="menu_ico"></div>
                     <p class="menu_name">Shops</p>
                </li>
           </a>
           <li>
               <div class="menu_ico"></div>
               <p class="menu_name">Records</p>
           </li>
           <li>
               <div class="menu_ico"></div>
               <p class="menu_name">My</p>
           </li>
     </ul>


    <!-- main view -->
    <router-view>
    </router-view>
  </div>
</template>