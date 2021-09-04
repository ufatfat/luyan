import Vue from "vue";
import Router from "vue-router";
import Main from "@/containers/Main";
// import storage from "@/utils/storage";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main,
            meta: {
                title: "首页",
            }
        }
    ]
})

export default router;