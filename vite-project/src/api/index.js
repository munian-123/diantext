import axios from 'axios'
axios.defaults.baseURL=`http://big-event-vue-api-t.itheima.net`
//请求拦截器
axios.interceptors.request.use(config=>config);
// 响应拦截器
axios.interceptors.response.use(res=>{
    return res
},err=>{
    return Promise.reject(err)
})
export default axios
