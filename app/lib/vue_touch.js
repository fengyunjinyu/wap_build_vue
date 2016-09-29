;(function(){
    var vueTouch = {}
    vueTouch.install = function(Vue){
        Vue.directive("touch" , {
            isFn : true,
            acceptStatement: true,
            bind:function(){

            },
            update: function( fn ){
                var self = this;
                self.touchObj = {};
                if(typeof fn !='function'){
                    return console.log("dsdd");
                }

                self.handler = function(e){
                    e.touchObj = self.tapObj;
                    fn.call(self , e);
                }

                this.el.addEventListener("touchstart" , function( e ){
                    self.touchstart(e , self);
                } , false);

                this.el.addEventListener("touchend" , function(e){
                    self.touchend(e , self , fn);

                } ,false);

            },
            unbind: function(){

            } ,
            isTap:function(){
                var tapObject = this.tapObj;
                return this.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;

            },
            touchstart:function(e , self){
                var touches = e.touches[0];
                var tapObj = self.tapObj;
                tapObj.pageX = touches.pageX;
                tapObj.pageY = touches.pageY;
                tapObj.clientX = touches.clientX;
                tapObj.clientY = touches.clientY;
                self.time = new Date();

            },
            touchend: function(e, self){
                var touches = e.changedTouches[0];
                var tapObj = self.tapObj;
                self.time = new Date() - self.tapObj;
                tapObj.distanceX = tapObj.pageX - touches.pageX;
                tapObj.distanceY = tapObj.pageY - touches.pageY;
                if(self.isTap(tapObj)){
                    self.handler(e);
                }
            }
        })

    }

    if(typeof exports == 'object'){
        module.exports = vueTouch
    }else if(typeof define =="function" && define.amd ){
        define( [] , function(){
            return vueTouch
        })
    }else if(window.Vue){
        window.VueTouch = vueTouch;
        Vue.use(vueTouch);
    }
})();