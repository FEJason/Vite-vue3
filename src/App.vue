<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import '~/assets/css/main.scss';

// 自定义暗黑模式
:root {
  --border-color: #dcdfe6;
  --text-main-color: #303133;
}

html.dark {
  --border-color: #4c4d4f;
  --text-main-color: #e5eaf3;
}

</style>
