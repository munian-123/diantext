<template>
    <div>
        <div ref="charts" style="width: 100%;height:400px;"></div>
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import * as echarts from 'echarts';
const charts=ref()
onMounted(() => {
    init() //首屏加载时触发initial()
})
 function init(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(charts.value);
// 指定图表的配置项和数据
let option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

option && myChart.setOption(option);

 }
</script>