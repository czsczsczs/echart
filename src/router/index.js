import {createRouter,createWebHistory} from 'vue-router'
const routes=[
    {
        name:'echart',
        path:'/',
        component:()=>import('../echart.vue')
    },
    {
        name:'chatgpt',
        path:'/chatgpt',
        component:()=>import('../chatgpt.vue')
    }
]
    

const router=createRouter({
    routes,
    history:createWebHistory()
})
export default router