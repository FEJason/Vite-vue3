<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'
import { ref } from 'vue'

const isCollapse = ref(false)
const onOff = ref(isDark.value)

</script>

<template>
  <el-container>
    <el-header>
      <div class="header-wrap u-flex u-row-between">
        <div class="left">
          <div class="logo u-flex">
            <router-link to="/" class="u-flex">
              <img src="../../assets/img/logo.png" width="30" height="30">
              <span class="logo-text u-p-l-10">运营管理系统</span>
            </router-link>
          </div>
        </div>
        <div class="right u-flex">
          <el-tooltip
            effect="dark"
            content="全屏"
            placement="bottom"
          >
            <div class="u-m-r-20 u-m-t-2 u-pointer">
              <el-icon :size="20" color="#606266"><FullScreen /></el-icon>
            </div>
          </el-tooltip>
          <!-- <el-tooltip
            effect="dark"
            content="暗黑模式"
            placement="bottom"
          >
            <div class="u-m-r-20">
              <el-switch v-model="onOff"
                active-color="#2f2f2f"
                border-color="rgba(60,60,60,.29)"
                @change="toggleDark()">
                <el-icon><Sunny /></el-icon>
              </el-switch>
            </div>
          </el-tooltip> -->
          <el-dropdown :show-timeout="100">
            <span class="u-flex u-pointer">
              <span>特朗普</span>
              <el-icon class="u-m-l-4"><CaretBottom /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <el-icon><Unlock /></el-icon>
                  修改密码
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-icon><Back /></el-icon>
                  退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          class="menu-wrap"
          :collapse="isCollapse"
          :default-active="$route.path"
        >
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <template #title>首页</template>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>店铺管理</span>
            </template>
            <el-menu-item index="/shop/shoplist/list">店铺列表</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>仓库管理</span>
            </template>
            <el-menu-item index="/shop/stock/list">仓库列表</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main style="background-color: #f4f6f9; padding:16px; height: calc(100vh - 60px); overflow-y: auto;">
        <router-view style="background-color: #fff; padding: 20px; min-height: 100%;"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scped>
.el-header {
  border-bottom: 1px solid var(--border-color);
  // box-shadow: var(--el-box-shadow-light);
}
.logo {
  height: 60px;
  .logo-text {
    font-size: 20px;
    font-weight: bold;
    color: var(--text-main-color);
  }
}
.menu-wrap {
  height: calc(100vh - 60px);
}
</style>
