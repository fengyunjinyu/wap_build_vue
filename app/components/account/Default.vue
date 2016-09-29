<style>
.weui_tabbar{ position:fixed}
</style>
<template>
   <div class="home">
   <div class="hd">
       <h1 class="page_title">WeUI</h1>
       <p class="page_desc">为微信Web服务量身设计</p>
   </div>
   <div class="bd">
       <div class="weui_grids">
           <a class="weui_grid" v-link="{path:'account/message'}">
               <div class="weui_grid_icon">
                   <i class="icon icon_button"></i>
               </div>
               <p class="weui_grid_label">
                   Button
               </p>
           </a>
           <a class="weui_grid" v-link="{path:'account/article'}">
               <div class="weui_grid_icon">
                   <i class="icon icon_cell"></i>
               </div>
               <p class="weui_grid_label">
                   Cell
               </p>
           </a>
           <a class="weui_grid" v-link="{path:'account/success'}">
               <div class="weui_grid_icon">
                   <i class="icon icon_toast"></i>
               </div>
               <p class="weui_grid_label">
                   Toast
               </p>
           </a>
           <a class="weui_grid" v-link="{path:'account/toast'}">
               <div class="weui_grid_icon">
                   <i class="icon icon_dialog"></i>
               </div>
               <p class="weui_grid_label">
                   Dialog
               </p>
           </a>
           <a class="weui_grid" v-link="{path:'account/toast'}">
                          <div class="weui_grid_icon">
                              <i class="icon icon_dialog"></i>
                          </div>
                          <p class="weui_grid_label">
                              Dialog
                          </p>
           </a>
           <a class="weui_grid" v-link="{path:'account/toast'}">
                          <div class="weui_grid_icon">
                              <i class="icon icon_dialog"></i>
                          </div>
                          <p class="weui_grid_label">
                              Dialog
                          </p>
           </a>


       </div>
   </div>
   </div>

</template>