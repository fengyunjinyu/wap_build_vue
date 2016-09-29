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

  <div class="tabbar">
  <div class="weui_tab">
      <div class="weui_tab_bd">

      </div>
      <div class="weui_tabbar">
          <a href="javascript:;" class="weui_tabbar_item weui_bar_item_on">
              <div class="weui_tabbar_icon">
                  <img src="./images/icon_nav_button.png" alt="">
              </div>
              <p class="weui_tabbar_label">微信</p>
          </a>
          <a href="javascript:;" class="weui_tabbar_item">
              <div class="weui_tabbar_icon">
                  <img src="./images/icon_nav_msg.png" alt="">
              </div>
              <p class="weui_tabbar_label">通讯录</p>
          </a>
          <a href="javascript:;" class="weui_tabbar_item">
              <div class="weui_tabbar_icon">
                  <img src="./images/icon_nav_article.png" alt="">
              </div>
              <p class="weui_tabbar_label">发现</p>
          </a>
          <a href="javascript:;" class="weui_tabbar_item">
              <div class="weui_tabbar_icon">
                  <img src="./images/icon_nav_cell.png" alt="">
              </div>
              <p class="weui_tabbar_label">我</p>
          </a>
      </div>
  </div>
  </div>
</template>