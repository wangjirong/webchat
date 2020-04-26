import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: {name: 'Message'},
        children: [
            {
                path: "/message",
                name: "Message",
                component: () => import('../views/Home/Message')
            },
            {
                path: "/contact",
                name: "Contact",
                component: () => import('../views/Contactor/Contactors'),
                redirect: '/contact/friends',
                children: [
                    {
                        path: "/contact/friends",
                        name: "Friends",
                        component: () => import('../views/Contactor/friends')
                    },
                    {
                        path: "/contact/group",
                        name: "Group",
                        component: () => import('../views/Contactor/group')
                    },
                ]
            },
            {
                path: "/my",
                name: "My",
                component: () => import('../views/Home/My')
            }
        ],
        meta: {
            title: ""
        },
        requireAuth: true
    },
    {
        path: '/chat',
        name: "Chat",
        component: () => import('../views/Chat')
    },
    {
        path: '/login',
        name: "Login",
        component: () => import('../views/Login')
    },
    {
        path: '/register',
        name: "Register",
        component: () => import('../views/Register')
    },
    {
        path: '/forgetPassword',
        name: "ForgetPassword",
        component: () => import('../views/ForgetPassword')
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    if (to.requireAuth) {
        const user = sessionStorage.getItem("user");
        if (user) next();
        else {
            if (to.name === ("Login" || "Register")) next();
            else next({name: 'Login'});
        }
    } else next();
})


export default router
