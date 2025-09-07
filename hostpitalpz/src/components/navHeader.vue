<template>
  <el-header class="el-header flex-box" >
    <div class="header-lf flex-box">
      <!-- 点击后触发store中的mutation里的isCollapse放法 -->
      <el-icon class="icon" @click="store.commit('isCollapse')"><Operation /></el-icon>
    </div>
    <div class="header-rg">
      <el-dropdown >
    <span class="el-dropdown-link flex-box">
     <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
     <p class="user-name">admin</p>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">Action 1</el-dropdown-item>
        <el-dropdown-item command="b">Action 2</el-dropdown-item>
        <el-dropdown-item command="c">Action 3</el-dropdown-item>
        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
</el-header>
</template>
<script setup>
import { useStore } from 'vuex';
const store=useStore()
</script>
<style lang="less" scoped>
.flex-box{
  display: flex;
  align-items: center;
}
.el-header {
  transition: all 0.3 ease;
  background-color: rgb(250, 247, 247);
  color: var(--el-text-color-primary);
  // text-align: center;
  width: 100%;
  justify-content: space-between;
  height: 40px;
  padding-left: 0;
  .header-lf{
    height: 100%;
    .icon{
      height: 100%;
      font-size: 20px;
      cursor: pointer;
      width: 45px;
    }
    .icon:hover{
      background-color: #d0cccc;
    }
  }
  .header-rg{
    .el-dropdown-link{
      outline: none;
      cursor: pointer;
    el-avatar{
      margin-left: 10px;
    }
    .user-name{
      margin-left: 10px;
    }
  }
    }
}
</style>