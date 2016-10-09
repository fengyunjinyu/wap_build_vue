<template>
     <div class="hd" style="background:#ff4657;">
         <h1 class="page_title" style="color:#fff;display:inline-block; height:60px;line-height:80px;">
             *
         </h1>
     </div>
     <div class="weui_navbar" style="position:relative;width:100%;">
                   <div class="weui_navbar_item">
                       <p>在投金额(元)</p>
                       <p>0.00</p>
                   </div>
                   <div class="weui_navbar_item">
                       <p>昨日收益(元)</p>
                       <p>0.00</p>
                   </div>
                   <div class="weui_navbar_item">
                       <p>累计收益(元)</p>
                       <p>0.00</p>
                   </div>
     </div>

     <div class="" >

     </div>

</template>
<script>
export default {
    data:function(){
       this.$dispatch("footmenu_show" , true);
       return {}
    }
}
</script>