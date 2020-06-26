<!--
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-25 20:12:06
--> 
<template>
  <div id="app">
    <router-view />
    <!-- <div class="demo">测试</div> -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang="scss">
@import "./styles/variables.scss";
// @import "./styles/mixins.scss";

.demo{
    color: $color-primary;
  }

</style>
