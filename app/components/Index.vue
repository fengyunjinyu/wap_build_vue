<style>

</style>
<template>
  <div class="overline flo">


    <div v-banner="banners" style="width:100%;height:200px;background:#d1d1d1;position:relative">


    </div>




     <ul class="overline flo list_nav">
          <li>  <a v-link="{ path: '/index/fav' }">fav</a>  </li>
          <li> <a v-link="{ path: '/index/me' }">me</a>  </li>
     </ul>

     <button v-on:click="changeTitle()">Change Title</button>
     <button v-on:click="changeTitle2()">Change Title</button>
     <button v-on:click="changeButton()"> changebuttons</button>

    <!-- main view -->
    <router-view>
    </router-view>


  </div>
</template>

<script>
export default {
      data:function(){
          this.$dispatch("footmenu_show" , true)
          return {
              dialog: {
                                          title:'标题1',
                                          content:'弹窗内容1',
                                          btn_array:[],
                                          show:true
                            },
                            banners:"Hello worldd"
          }
      },
       methods:{
           changeButton:function(){
              var that = this;
              this.dialog.show = true;
              this.dialog.btn_array = {
                  cancelClick:function(){
                      that.dialog.show = false;
                  },
                  confirmClick:function(){
                      console.log("sjjff");
                  }
              };
              this.$dispatch("dialog_change_build" ,this.dialog);
           },
           test:function(e){
              console.log("doko");
              this.event = e.type;
           },
           onTap:function(){
              alert("Hello");
           },
           onSwipeLeft:function(){
              alert("move Left");
           }
       },

}

</script>

