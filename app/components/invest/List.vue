<style>
.we_banner{
   position:relative;
   width:100%;
   height:150px;
   background:#d8d8d8;
   color:#585858;
   text-align:center;
   line-height:150px;
   font-size:35px;
 }
 .weui_navbar:after{  border-bottom:#d1d1d1 solid 1px;  }
 .we_debt_info{text-align:center}
 .we_debt_info .debt_title{font-size:19px;line-height:25px;}
 .we_debt_info .debt_desc{font-size:13px;line-height:18px;color:#848484}
 .we_debt_hd{padding:10px 0}

 .weui_navs .weui_navbar_item_active{
      border-bottom:solid 2px #26bcef
 }

 .we_debt_bd{
     width:100%;
     height:110px;
     position:relative;
 }
 .we_debt_progress{
     position:relative; width:100%;height:110px;
     margin:0 auto;
     width:150px;
     margin:0 auto
 }
 .we_debt_hd{
     position:relative
 }
 .debt_progress_rate{
     line-height:30px;
     position:absolute;
     text-align:center;
     width:100%;
     font-size:26px;
     color:#ff4657;
     top:50%;
     margin-top:-15px;
 }
 .we_debt_svg{
     position:absolute;
     left:0px;
     top:0;
     width:100%;
     height:110px;
     overflow:hidden;
 }
 .debt_svg{
    position:relative;
    top:0;
    float:left;
    width:100%;
 }

</style>
<template>
    <div class="we_banner">
         Banners
    </div>
    <div class="weui_navbar weui_navs" style="position:relative">
         <div  v-for="(index,item) in debtlist" :class="activeindex!=index ? 'weui_navbar_item' : 'weui_navbar_item weui_navbar_item_active'"  @click="selectedItem(index)">
             {{ item.yeaRate }}%
         </div>
    </div>


    <div class="we_debt_info">
        <div class="we_debt_hd">
            <h2 class="debt_title" style="color:#585858">{{ activeitem.moneyManageName || "海象*计划" }}</h2>
            <p class="debt_desc">{{ activeitem.buyStartTime || "0000-00-00 12:00" }}发售</p>
        </div>

        <div class="we_debt_bd">
            <div class="we_debt_progress" id="demos">
                 <p class="debt_progress_rate">8.0%</p>
            </div>

            <div class="we_debt_svg" style="">
                <div v-for="item in debtlist" id="{{item.moneyManageID}}" class="debt_svg">
                </div>
            </div>



        </div>
        <div class="we_debt_fd">
             <div class="weui_navbar" style="position:relative">
                  <div class="weui_navbar_item">
                      <div class="weui_grid_icon">
                           <i class="icon icon_button"></i>
                      </div>
                      <p class="weui_grid_label">总金额(万)</p>
                      <p class="weui_grid_label">{{ activeitem.investMoney || "*"}}</p>

                  </div>
                  <div class="weui_navbar_item">
                      <div class="weui_grid_icon">
                            <i class="icon icon_button"></i>
                      </div>
                      <p class="weui_grid_label">锁定期(天)</p>
                      <p class="weui_grid_label">{{ activeitem.timeLimitExplain || "*"}}</p>
                  </div>
                 <div class="weui_navbar_item">
                      <div class="weui_grid_icon">
                           <i class="icon icon_button"></i>
                      </div>
                      <p class="weui_grid_label">已投资(人)</p>
                      <p class="weui_grid_label">{{ activeitem.persionNum || "*"}}</p>
                 </div>
             </div>

             <p class="invest_desc" style="text-align:center;font-size:11px;color:#a8a8a8;padding:10px 0">
                   你还有<span style="color:#ff4657;">1</span>次购买机会，单次购买上限为<span style="color:#ff4657;">50000</span>元
             </p>
        </div>

        <div class="we_debt_fdbtn">
                <p class="weui_btn_area">
                     <a class="weui_btn weui_btn_normal" v-on:click="withdraw">立即投资</a>
                </p>
        </div>
    </div>

</template>

<script>
import drawCircle from "../../lib/svg.build.js";
import InvestService from '../../store/invest.service.js';
import {Vue} from "../../lib/com.build.js";
export default {
    data:function(){
        var _this = this;
        this.$dispatch("loading_data" , true)
        InvestService.getlist().then((response)=>{
            setTimeout(function(){
                _this.$dispatch("loading_data" , false);
                _this.debtlist = response.body;
                _this.activeitem = _this.debtlist[0];
                _this.activeindex=0;
            } , 5000);
        },(response)=>{
            cxonsole.log(response);
        })
        return {
            debtlist:{},
            activeitem:{},
            activeindex:0,
            svg_hd:[]
        }
    },
    created:function(){
        console.log("data");
    },
    ready:function(){
    },
    watch:{
        'debtlist':{
            handler: function(val , oldval){
                this.build_svg();
            },
            deep:true
         }
    },
    methods:{
        withdraw:function(){
             console.log("投资");
        },
        selectedItem:function(attr_index){
             console.log(attr_index);
             this.activeitem = this.debtlist[attr_index];
             this.activeindex = attr_index;
             this.svg_hd[attr_index].drawCircle();
             this.svg_hd[attr_index].drawPath();
        },
        build_svg:function(){
             var _this = this;
             var arr = [];
             //var svg_handler = new drawCircle({elem:dom.attr('id'),size:dom.attr('progress'),color:"#ff4657"});
             for(var i=0;i<this.debtlist.length; i++){
                  var svg_handler = new drawCircle(
                  {
                      elem:_this.debtlist[i].moneyManageID,
                      size:100,
                      color:"#ff4657"
                  });
                  svg_handler.drawCircle();
                  arr.push(svg_handler);
             }
             this.svg_hd = arr;
             this.svg_hd[0].drawPath();

        }
    },
    events:{
    }
}
</script>