/**
 * 登录模块设计思路
 * 这里提供主要的方法
 * 验证用户是否，
 *
 * 用户登录后将数据写入localstorage，
 *
 * 用户登录的操作。 输入信息， 点击登录-》 向服务端发送请求->
 * 接收数据，将返回的结果传入该文件件方法中， 由该方法决定 判断是否登录以及
 * 登录成功： 10010
 * 登录失败： 10011
 * 登录信息存储到localstorage，并将用户的accesstoken(唯一标示)设置到header中
 *
 * 登录失效  10020
 * 登录失效时，清除登录信息， 以及header中的数据，以及跳转到登录页面动作
 *
 * 请求成功 10000
 *
 *
 */

var  localStorage = window.localStorage;
export default {
    setAccesstoken:function(){

    },
    getAccesstoken:function(){

    },
    checkLogin:function(){

    },
    doLoginResonse:function(data , comp_handler , router){
        if(data.status==10000){
            localStorage.setItem("userinfo" , JSON.stringfy(data.data));
            comp_handler.$router.go({path:'/invest/index'});
            //_this.$router.go({path:'/account'});
        }else{
            var dialog = {
                title:'标题1',
                content:data.msg,
                show:true
            };
            comp_handler.$dispatch("dialog_change_build" ,dialog);
        }
    },
    checkLogin:function(){
        var d = localStorage.getItem("userinfo");
        if(d){
            return true ;
        }else{
            return false ;
        }

    }
}