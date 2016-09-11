<style>

</style>
<template>
  <div class="overline flo">
     <Modal v-bind:title="title"
            v-bind:content="content"
            v-bind:show="show"
            v-bind:btn_arr="btn_arr">
            </Modal>

     <ul class="overline flo list_nav">
          <li>  <a v-link="{ path: '/index/fav' }">fav</a>  </li>
          <li> <a v-link="{ path: '/index/me' }">me</a>  </li>
     </ul>

     <button v-on:click="changeTitle()">Change Title</button>
     <button v-on:click="changeTitle2()">Change Title</button>

    <!-- main view -->
    <router-view>
    </router-view>
  </div>
</template>

<script>

import Modal from '../global/Modal.vue';

export default {
   components:{Modal},
   data:function(){
       return {
          title:'标题1',
          content:'弹窗内容1',
          btn_array:[],
          show:false
       }
   },
   methods:{
       changeTitle:function(){
            this.title="Doline";

       },
       changeTitle2:function(){
           console.log(Index);
           Index.title="SMXC";
       }
   }
}

</script>

