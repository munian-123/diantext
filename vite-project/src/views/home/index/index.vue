<template>
    <div id="module">
        <div class="box" v-for="item in items" :key="item.icon">
        <div class="list-box" >
            <i><el-icon><component :is="item.icon"></component></el-icon></i>
            <p>{{ item.name }}</p>
        </div>
    </div>

    </div>

    <div class="module-box">
        <div class="box" style="flex: 0 1 70%; margin: 5px;">
            <el-card class="box-card">
                <!-- 图表 -->
                <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
                <div ref="chart" style="width: 100%;height:400px;"></div>
            </el-card>
        </div>
        <div class="box" style="flex: 0 1 30%;margin: 5px;background-color: aliceblue;">
            <el-card class="box-card">
                <Chart />
            </el-card>
        </div>
    </div>

    <div class="module-box">
        <div class="box" style="flex: 0 1 100%; margin: 5px;">
            <el-card class="box-card">
                <Charts />
            </el-card>
        </div>
        </div>
       


</template>
<script setup>
import Chart from './chart.vue'
import Charts from './charts.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref,onMounted } from 'vue';
import * as echarts from 'echarts';
const items=ref([
        {name:"电量监控1",icon:Document},
        {name:"电量监控1",icon:Location},
        {name:"电量监控1",icon:Location},
        {name:"电量监控1",icon:Setting},
        {name:"电量监控1",icon:Setting},
])


const chart=ref()
onMounted(() => {
    init() //首屏加载时触发initial()
})
 function init(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(chart.value);

// 指定图表的配置项和数据
let option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: '呼叫啊回复地方',
   textStyle:{  //样式
    color:'#fff'  //
   }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
    }
  ]
};

option && myChart.setOption(option);

 }
</script>
<style scoped>
.box{
    flex:20%;
    width: 300px;
}
#module{
    display: flex;
    /* background-color:#f4fbfc; */
}
.el-card__body{
    background: #fff;
}
.module-box{
    margin-top: 10px;
    background-color: aliceblue;
}
</style>

