<template>
    <el-menu class="aside-container aside-menu" :style="{width: isCollapse ? '64px' : '230px'}"
       :collapse="isCollapse"
      active-text-color="#ffd04b"
      background-color="#545c64"
     
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      mode="vertical"
    >
    <p class="logo-pz">{{isCollapse?'DIDI':'DIDI陪诊'}}</p>
      <treeMenu :menuData="menuData" :index="1"/>
    </el-menu>
</template>


<script setup>
import { useStore } from 'vuex';
import router from '../router';
import treeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router';
import { reactive,computed } from 'vue';
const menuData=reactive(useRouter().options.routes[0].children)
// 获取vuex中的isCollapse
  const store=useStore()
  const isCollapse=computed(()=>store.state.menu.isCollapse)

  const handleOpen=()=>{}
  const handleClose=()=>{}
  
</script> 


<style lang="less" scoped>
  .aside-container {
    transition: all 0.3 ease;
    height: 100%;
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

    border-right: none;
    margin: 0;
    padding: 0;
  }
</style>