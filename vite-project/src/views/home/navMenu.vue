 <template>
    <div>
           <!-- 导航  -->
      <el-aside width="200px"  class="aside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
      <router-link to="/index">
      <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
      </router-link>

      
        <el-sub-menu index="2">
          <template #title>  
            <el-icon><location /></el-icon>
            <span>电量监控</span>
          </template>
          
       <router-link to="/monitor/info">
          <el-menu-item index="1-1">车辆详情</el-menu-item>
        </router-link>
        <router-link to="/monitor/list">
            <el-menu-item index="1-2">车辆列表</el-menu-item>
          </router-link>
        </el-sub-menu>

      <router-link to="/census">
        <el-menu-item index="3">
          <el-icon><icon-menu /></el-icon>
          <span>统计分析</span>
        </el-menu-item>
      </router-link>
      <!-- <el-menu-item :index="item.url" v-for="item in items" :key="item.url">
          <el-icon><component :is="item.icons"></component></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item> -->
      </el-menu>
        </el-aside>
    </div>
 </template>
 <script setup>
 import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {reactive} from 'vue'
const items = reactive([
    {name:'首页',icons:Document,url:'/index'},
    {
        name:'电量监控',
        icons:Location,
        url:'/',
        child:[
            {name:'车辆详情',icons:Document,url:'/monitor/info'},
            {name:'车辆列表',icons:Document,url:'/monitor/list'},
        ]
    },
    {name:'统计分析',icons:Setting,url:'/census'},
])
 </script>
 <style>
    .aside{
      height: 600px;
    }
 </style>