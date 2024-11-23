import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import AppLayoutVue from "@/layout/AppLayout.vue";
import MainPageVue from "@/views/MainPage.vue";

const routes:RouteRecordRaw[] = [
    {
        path:'/',        
        component: AppLayoutVue,
        redirect:{name:"home"},
        children:[
            {
                path:"/home",
                name:"home",
                component:MainPageVue               
            },
            {
                path:"/favorites",
                name:"favorites",
                component:()=>import("@/views/FavoritePage.vue")
            }
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;