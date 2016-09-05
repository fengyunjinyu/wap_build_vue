<template>
  <div class="overline flo">
    <!-- main view -->
    <router-view>


         <ul class="overline flo list_nav">
             <li>  <a v-link="{ path: '/fav' }">fav</a>  </li>
             <li>  <a v-link="{ path: '/me' }">me</a>  </li>
         </ul>


    </router-view>




  </div>
</template>

<style>
*{margin:0px;padding:0px;}
.overline {width:100%}
a{text-decoration:none;}

h1.title{
   line-height:40px;
   width:100%;
   font-size:16px;
   background:#f5f6f5
}


html, body{
  font-family: Verdana;
  font-size: 13px;
  height: 100%;
  }

ul{
    list-style-type: none;
      padding: 0;
      margin: 0;

}

ul.list_nav{
   display:flex;
   border-bottom:#d1d1d1 solid 1px;
}

ul.list_nav li{
   flex:1;
   line-height:40px;
   text-align:center
}

ul.list_nav li a{
   display:inline-block;
   line-height:40px;
   font-size:16px;
   color:#585858;
   padding:0px 15px;
   border-bottom:#f5d6d5 solid 2px;
}

ul.list_nav li a.v-link-active{  color:#ff4657; border-bottom:#ff4657 solid 2px;}



</style>
