<template>

<div class="toast">
    <div class="hd">
        <h1 class="page_title">Toast</h1>
    </div>
    <div class="bd spacing">
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showToast()">点击弹出Toast</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary" v-on:click="showLoading()">点击弹出Loading Toast</a>
    </div>
    <!--BEGIN toast-->
    <div id="toast" style="display: none;" v-show="toast_show">
        <div class="weui_mask_transparent"></div>
        <div class="weui_toast">
            <i class="weui_icon_toast"></i>
            <p class="weui_toast_content">已完成</p>
        </div>
    </div>
    <!--end toast-->

    <!-- loading toast -->
    <div id="loadingToast" class="weui_loading_toast" v-show="loading_show">
        <div class="weui_mask_transparent"></div>
        <div class="weui_toast">
            <div class="weui_loading">
                <div class="weui_loading_leaf weui_loading_leaf_0"></div>
                <div class="weui_loading_leaf weui_loading_leaf_1"></div>
                <div class="weui_loading_leaf weui_loading_leaf_2"></div>
                <div class="weui_loading_leaf weui_loading_leaf_3"></div>
                <div class="weui_loading_leaf weui_loading_leaf_4"></div>
                <div class="weui_loading_leaf weui_loading_leaf_5"></div>
                <div class="weui_loading_leaf weui_loading_leaf_6"></div>
                <div class="weui_loading_leaf weui_loading_leaf_7"></div>
                <div class="weui_loading_leaf weui_loading_leaf_8"></div>
                <div class="weui_loading_leaf weui_loading_leaf_9"></div>
                <div class="weui_loading_leaf weui_loading_leaf_10"></div>
                <div class="weui_loading_leaf weui_loading_leaf_11"></div>
            </div>
            <p class="weui_toast_content">数据加载中</p>
        </div>
    </div>
</div>

</template>

<script>

export default {
    data:function(){
       return {
          toast_show:false,
          loading_show:false
       }

    },
    methods:{
        showToast:function(){
            var _this = this;
            this.toast_show = true;
            setTimeout( function(){
               _this.toast_show = false;
            } , 2000)
        },
        showLoading:function(){
           var _this = this;
           this.loading_show = true;
           setTimeout( function(){
              _this.loading_show = false;
           } ,5000)

        }

    }
}

</script>