import VueRouter from "vue-router";
import Cart from "../components/cart/Cart";
import User from "../components/user/User";
import Vue from 'vue'

Vue.use(VueRouter)

const routes=[
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/user',
        component: User
    },
]

var router=new VueRouter({
    'mode':'history',
    routes
})

export default router;