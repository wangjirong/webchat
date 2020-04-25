import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect:{name:'Message'},
        children:[
            {
                path:"/message",
                name:"Message",
                component:()=>import('../views/Home/Message')
            },
            {
                path:"/contact",
                name:"Contact",
                component:()=>import('../views/Home/Contactors')
            },
            {
                path:"/my",
                name:"My",
                component:()=>import('../views/Home/My')
            }
        ],
        meta:{
            title:""
        },
        requireAuth:true
    },
    {
        path: '/login',
        name:"Login",
        component: ()=>import('../views/Login')
    },
    {
        path: '/register',
        name:"Register",
        component: ()=>import('../views/Register')
    },
    {
        path: '/forgetPassword',
        name:"ForgetPassword",
        component: ()=>import('../views/ForgetPassword')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
