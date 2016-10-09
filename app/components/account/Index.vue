<template>
    <router-view>
    </router-view>
</template>
<script>
export default {
    data:function(){
        this.$dispatch("footmenu_show" , false);
        return {};
    }
}
</script>