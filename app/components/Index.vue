<style>
</style>
<template>
  <div class="overline flo">


     <ul class="overline flo list_nav">
         <li>  <a v-link="{ path: '/index/fav' }">fav</a>  </li>
          <li> <a v-link="{ path: '/index/me' }">me</a>  </li>
     </ul>
    <!-- main view -->
    <router-view>
    </router-view>
  </div>
</template>