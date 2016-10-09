<style>

</style>
<template>
    <modal v-show='dialog.show'>
        <div slot="title">{{dialog.title}}</div>
        <div slot="content">{{dialog.content}}</div>
        <div slot="buttons" class="weui_dialog_ft">
            <a class="weui_btn_dialog primary" href="javascript:void(0);" v-on:click="onClick">确定</a>
        </div>
    </modal>
</template>

<script>

import Modal from './Modal';


export default {
    //父组件传递来的数据的类型验证
    props:{
        dialog:Object
        /*
        title : String ,
        content: String,
        show:Boolean,
        btn_array:Array
        */
    },
    methods:{
        onClick:function(){
            this.dialog.show = false;
        }
    },

    computed:{
       dialogd : function(){
            console.log('joss');
            this.build_event();
            return this.dialog;

           //
       }
    },
    components:{ Modal }

}
</script>