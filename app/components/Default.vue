<style>
.weui_navbar:after{ border-bottom:none}
.weui_navbar_item{font-size:13px;color:#585858}
.weui_navbar_item:after{ border-right:none;}

.ad_list{
   height:40px;
   width:40px;
   position:relative;
   margin:0 auto;
   background:#c5c6c5;
   padding-bottom:13px;
   display:inline-block
}
.ad_list img{
   display:block;
   width:100%;
   position:relative;
   height:34px;
}

.weui_btn_area{margin:0 15px;}
.weui_btn_normal{background:#ff4657}



</style>
<template>
  <div class="overline flo">
    <div v-banner="banners" style="width:100%;min-height:200px;background:#d1d1d1;color:#848484;position:relative;line-height:150px;">

        Banner Slide

    </div>

    <div class="weui_navbar" style="position:relative;width:100%;">
                <div class="weui_navbar_item">
                    <p class="ad_list">
                    </p>
                    <p>收益率高</p>
                    <p>多种投资综合</p>
                </div>
                <div class="weui_navbar_item">
                    <p class="ad_list"></p>
                    <p>收益率高</p>
                    <p>多种投资综合</p>
                </div>
                <div class="weui_navbar_item">
                    <p class="ad_list"></p>
                    <p>收益率高</p>
                    <p>多种投资综合</p>
                </div>
            </div>

    <p class="weui_btn_area">
       <a v-link="{path:'invest/list'}" class="weui_btn weui_btn_normal">马上加入</a>
    </p>
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

       }
}

</script>

