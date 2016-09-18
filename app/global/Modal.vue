<style>

</style>
<template>
<div class="weui_dialog_confirm">
    <div class="weui_mask" :click="overlayClick"></div>
    <div class="weui_dialog">
        <div class="weui_dialog_hd" >
             <strong class="weui_dialog_title" slot="title">
                   <slot name="title"> </slot>
             </strong>
        </div>
        <div class="weui_dialog_bd">
             <slot name="content"></slot>
        </div>
        <slot name="buttons"> </slot>
    </div>
</div>



</template>

<script>


export default {
    //父组件传递来的数据的类型验证
    props:{
        dialog:Object
        /*
        title : String ,
        content: String,
        show:Boolean,
        btn_array:object
        */
    },
    data:function(){
       return {
       show:true
       }
    },
    methods:{
        /* 取消按钮点击  */
        cancelEvent:function(){
            //this.el.style.display = none;
            console.log('dojo')
            console.log(this.$el);
        },
        overlayClick:function(){
            console.log("Dojo");
            this.show = false
        }

    }

}
</script>