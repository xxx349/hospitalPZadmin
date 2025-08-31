<template>
  <div >
    <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item> -->
      
      <template 
      v-for="(item) in props.menuData"
      >
        <el-menu-item @click="handleClick(item)"
        v-if="!item.children||item.children.length===0"
        :key="`${props.index}-${item.meta.id}`"
        :index="`${props.index}-${item.meta.id}`"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.name }}</span>
      </el-menu-item>
      
        <el-sub-menu v-else 
        :key="`${props.index}-${item.meta.id}`"
        :index="`${props.index}-${item.meta.id}`">
        
          <template #title> 
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
          <span>{{ item.meta.name }}</span>
        </template>
            <tree-menu :menuData="item.children" :index="`${props.index}-${item.meta.id}`"/>
        </el-sub-menu>
        
        

      </template>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router=useRouter()
const props=defineProps({
  menuData:{
    type:Object,
    required:true},
    index:{
      type:Number,
      required:true
    }
})
const handleClick=(item)=>{
  router.push(item.meta.path)
}




</script>
<style lang="less" scoped>

</style>