<template>
  <div class="overline flo">
     <h1 class="title">

     </h1>
     <ul class="overline flo list_nav">
         <li>  <a v-link="{ path: '/fav' }">fav</a>  </li>
         <li>  <a v-link="{ path: '/me' }">me</a>  </li>
     </ul>

    <!-- main view -->
    <router-view>
    </router-view>




  </div>

  <div class="footmenu">
  </div>
</template>