import Vue from 'vue';
Vue.directive('demo' , {
    bind : function(){
        console.log('demo bound');
    },
    update:function( value ){
        this.el.innerHTML =
            'name-'+ this.name+"<br>"+
            "expression-" + this.expression+'<br>'+
             "argument="+this.arg+"<br>"+
            'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
            'value - '      + value
    }
});

var demo = new Vue({
    el:'#demo',
    data:{
        msg:'hello!'
    }
});

/*
调用
 <div id="demo" v-demo:hello.a.b="msg"></div>
结果：

 */