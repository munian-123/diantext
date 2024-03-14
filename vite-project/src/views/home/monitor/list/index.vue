<template>
    <div>
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>车辆列表</span>
        <el-button class="button" text>添加</el-button>
      </div>
    </template>
    <el-table :data="tableData" height="100%" style="width: 100%">
    <el-table-column prop="date" label="时间" width="180" />
    <el-table-column prop="name" label="地点" width="180" />
    <el-table-column prop="address" label="车辆" />
  </el-table>
  </el-card>
    </div>
</template>
<script setup>
import {ref} from 'vue'
// const channelList=ref([])
// const getChannelLisr= async ()=>{
// const res=await artGetChannelsService()
// console.log(res);
// channelList.value=res.data.data
// console.log(channelList.value);
// }
// getChannelLisr()
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
// console.log(tableData);
</script>
<style scoped>
.box-card{
    min-height: 100%;
    height: 100%;
}
.card-header{
    display: flex;
    justify-content: space-between;
}
span{
    color: black;
    font-size: 20px;
}
.text{
    color: black;
    width: 100%;
    background-color: aqua;
}
</style>