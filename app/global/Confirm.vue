<style>

</style>
<template>
    <Modal v-show="dialog.show">
       <div slot="title">
            {{ dialog.title }}
       </div>
       <div slot="content">
            {{ dialog.content }}
       </div>
       <div slot="buttons" class="weui_dialog_ft">
           <a class="weui_btn_dialog primary" href="javascript:void(0);" v-on:click="cancelClick()">取消</a>
           <a class="weui_btn_dialog primary" href="javascript:void(0);" v-on:click="confirmClick()">确定</a>
       </slot>
    </Modal>

</template>

<script>

import Modal from './Modal.vue';

export default {
    //父组件传递来的数据的类型验证
    props:{
        dialog:Object
        /*
        title : String ,
        content: String,
        show:Boolean,
        btn_array:Array

        dialog_change_build
        */
    },
    methods:{
        /* 取消按钮点击  */
        cancelClick:function(){
            console.log("from Confirm Vue Cancel Event");
            this.dialog.btn_array.cancelClick();
        },
        confirmClick:function(){
            console.log("from Confirm Vue confirm Event");
            this.dialog.btn_array.confirmClick();
        }

    },
    components:{
        Modal
    }

}
</script>