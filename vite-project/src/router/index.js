import { createRouter,createWebHashHistory } from "vue-router";
const routes=[
    {path:'/',redirect:'/login'},

    {path:'/login',
    name:'login',
    component:()=>import('../views/login/index.vue')
},
   {path:'/home',
    name:'home',
    component:()=>import('../views/home/index.vue'),
    children:[
        {
            path:'/index',  //首页模块
            name:'index',
            component:()=>import('../views/home/index/index.vue')  
        },
        {
            path:'/monitor',  //电量模块
            name:'monitor',
            component:()=>import('../views/home/monitor/index.vue'),
            children:[
                {
                    path:'/monitor/info', //详情
                    name:'info',
                    component:()=>import('../views/home/monitor/info/index.vue'),
            },
            {
                path:'/monitor/list',   //列表
                name:'list',
                component:()=>import('../views/home/monitor/list/index.vue'),
        },
            ]  
        },
        {
            path:'/census',  //统计模块
            name:'census',
            component:()=>import('../views/home/census/index.vue')  
        },

    ]
},
]
const router = createRouter({
   history:createWebHashHistory(),
   routes
})
export default router