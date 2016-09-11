<style>

.t_modal_div{
    background:#f5f6f5;
    padding:15px;
    }

.t_modal{
    padding:15px 0 0;
    width:100%;
    position:relative;
    float:left;
    background:#fff;
    border-radius:10px;
    overflow:hidden;
}
.t_modal_head{
    text-align:center;
    position:relative;
    float:left;
    width:100%;
    line-height:40px;
}
.t_modal_content{
    padding:10px 15px;
    line-height:30px;
    font-size:16px;
    color:#585858;
    width:100%;
    float:left;
    text-align:center

}
.t_modal_foot{
    width:100%;
    border-top:#d1d1d1 solid 1px;
    text-align:center;
    float:left;
    text-align:center;
    font-size:16px;
    line-height:40px;
    display:flex
}
.t_modal_foot .t_modal_btn{
    flex:1;
    display:inline-block;
    border-right:#d1d1d1 solid 1px;
}

.t_modal_foot .t_modal_btn:last-child{
    border-right:none;
}
</style>
<template>
<div class="t_modal_div">
    <div class="t_modal ">
        <div class="t_modal_head">
             <h3 class="t_modal_title">{{ title }}</h3>
        </div>
        <div class="t_modal_content">
            {{ content }}
        </div>

        <div class="t_modal_foot">
            <a class="t_modal_btn" v-on:click="cancelEvent()">确定</a>
        </div>
    </div>
</div>



</template>

<script>

export default {
    //父组件传递来的数据的类型验证
    props:{
        title : String ,
        content: String,
        show:Boolean,
        btn_array:Array
    },
    methods:{
        /* 取消按钮点击  */
        cancelEvent:function(){
            console.log('dojo')
        },
        confirmEvent:function(){
            console.log("Confirm");
        }
    }
}
</script>