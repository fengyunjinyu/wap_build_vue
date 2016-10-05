var emptyArray = [], slice = emptyArray.slice;
var Jq={}
Jq.extend = function(target){
    slice.call(arguments, 1).forEach(function(source) {
        for (var key in source)
            if (source[key] !== undefined)
                target[key] = source[key]
    })
    return target
}

export default function drawCircle(options) {
    var defaults = {
        elem: null,
        size: 0,
        color:"#00a2ea"
    };
    var opts = Jq.extend({}, defaults, options);
    if (!opts.elem) {
        return;
    }

    var r = new Raphael(opts.elem, 110, 110),
        rad = 54,	  //鍦嗗崐寰�
        init = true,
        speed = 200,
        z = null,
        txt = null;


    function drawCircle(){
        var circle = r.circle(55,55,54);
        circle.attr("stroke" , "#e8e8e8");
        circle.attr("stroke-width","2");

    }


    function minit() {
        /*
         var circle = r.circle(55,55,54);
         circle.attr("stroke" , "#e8e8e8");
         circle.attr("stroke-width","2");
         */
        r.customAttributes.arc = function(value, total, R) {
            var alpha = 360 / total * value,  // x掳
                a = (90 - alpha) * Math.PI / 180,
                x = 55 + R * Math.cos(a),
                y = 55 - R * Math.sin(a),
                path;
            if (total == value) {
                //M50,28A22,22,0,0,1,50,72
                path = [
                    ["M", 55, 55 - R],
                    ["A", R, R, 1, 1, 1, 49.99, 50 - R]
                ];
            }else{
                path = [
                    ["M", 55, 55 - R],
                    ["A", R, R, 0, +(alpha > 180), 1, x, y]
                ];
            }
            return {
                path: path
            }
        };

        r.path().attr({
            arc: [43, 43, rad],
            'stroke-width': 0,
            'stroke': "none"
        });

        if(opts.size){
            z = r.path().attr({
                arc: [0.01, 100, rad],
                'stroke-width':2,
                'stroke': opts.color
            });
            updateVal(opts.size, 100, rad, z, 2);
        }
        /*

         txt = r.text(50, 50, opts.size).attr({
         font: "100 30px Arial",
         fill: "#000000"
         });
         r.text(73, 55,"%").attr({
         font: "100 15px Arial",
         fill: "#ff4657"
         });
         */
    }

    function updateVal(value, total, R, hand, id) {
        if (init) {
            if(value<total){
                hand.animate({
                    arc: [value, total, R]
                }, 900, ">");
            }else{
                hand.animate({
                    arc: [99.99, total, R]
                }, 900, ">");
            }
        } else {
            if (!value || value == total) {
                value = total;
                hand.animate({
                    arc: [value, total, R]
                }, 750, "bounce", function() {
                    hand.attr({
                        arc: [0, total, R]
                    });
                });
            } else {
                hand.animate({
                    arc: [value, total, R]
                }, 750, "elastic");
            }
        }
    }
    this.extend = function(options){
        opts = Jq.extend({}, opts, options);
    };
    this.reDraw  = function(){
        minit();
    };
    this.drawCircle = function(){//榛樿鐏拌壊鐨�
        r.clear();
        drawCircle();
    }
    this.drawPath = function(){//绾㈣壊璺緞
        minit();
    }
    this.clearDraw = function(){
        //r.path.remove();
        r.clear();
    };
}