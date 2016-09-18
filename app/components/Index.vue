<style>

</style>
<template>
  <div class="overline flo">


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
          return {
              dialog: {
                                          title:'标题1',
                                          content:'弹窗内容1',
                                          btn_array:[],
                                          show:true
                            }
          }
      },
       methods:{
           changeButton:function(){
              var that = this;
              this.dialog.show = true;
              this.dialog.btn_array = {
                  cancelClick:function(){
                      console.log("Hello world");
                      that.dialog.show = false;
                  },
                  confirmClick:function(){
                      console.log("sjjff");
                  }
              };
              this.$dispatch("dialog_change_build" ,this.dialog);
           }
       },

}

</script>

