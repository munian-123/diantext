<template>
    <div id="module">
    <el-container>
         <navMenu />
      <el-container>

        <el-header>
            <el-button type="warning" class="exit" @click="goBox">退出</el-button>
        </el-header>
        
        <el-main> 
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>
<script setup>
import navMenu from './navMenu.vue'
import {useRouter} from 'vue-router'
import { ElMessage } from 'element-plus'
const router=useRouter()
const goBox=()=>{
  ElMessage('退出登录')
  router.push('/')
  
}
</script>
<style>
    
</style>