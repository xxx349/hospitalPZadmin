<template>
  <div class="aside-container">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="aside-menu"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
    <p class="logo-pz">医院陪诊</p>
      <treeMenu :menuData="menuData" :index="1"/>
    </el-menu>
  </div>
</template>


<script setup>
import router from '../router';
import treeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
const menuData=reactive(useRouter().options.routes[0].children)


  const handleOpen=()=>{}
  const handleClose=()=>{}
  
</script> 


<style lang="less" scoped>
  .aside-container {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    .logo-pz{
      color: #fff;
      text-align: center;
      line-height:50px;
      height: 50px;
      font-size: 20px;
    }
  }
  
  .aside-menu {
    height: 100%;
    width: 100%;
    border-right: none;
    margin: 0;
    padding: 0;
  }
</style>