<template>
  <div class="common-layout">
    <el-container class="layout-container">
      <Aside/>
      <el-container>
        <Header/>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
  import Aside from '../components/Aside.vue'
  import Header from '../components/navHeader.vue'
</script>
<style lang="less" scoped>
.common-layout {
  height: 100vh;
  width: 100vw;
}

.layout-container {
  height: 100%;
  width: 100%;
  background-color: #bec1c3;
}




.el-main {
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
</style>