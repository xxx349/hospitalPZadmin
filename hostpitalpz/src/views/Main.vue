<template>
  <div class="common-layout">
    <el-container class="layout-container">
      <el-aside width="240px" class="aside-wrapper">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
  import Aside from '../components/Aside.vue'
</script>
<style lang="less" scoped>
.common-layout {
  height: 100vh;
  width: 100vw;
}

.layout-container {
  height: 100%;
  width: 100%;
}

.aside-wrapper {
  background-color: #545c64;
  padding: 0;
  margin: 0;
}

.el-header {
  background-color: #B3C0D1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
</style>