import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

import user from '@/pages/user'
import role from '@/pages/role'
import premisstion from '@/pages/premisstion'
import commonComponents from '@/pages/commonComponents'
import echarts from '@/pages/echarts'
import fileDownload from '@/pages/fileDownload'

Vue.use(Router);

const originalPush = Router.prototype.push

Router.prototype.push = function push (location) {

    return originalPush.call(this, location).catch(err => err)

}
const router = new Router({
	// mode: 'history',
	routes: [{
		//登陆
		path: "/login",
		name: 'login',
		component: resolve => void (require(['@/pages/login.vue'], resolve))
	},
    {
		//layout
		path: "/",
		component: resolve => void (require(['@/pages/layout/layout.vue'], resolve)),
        children: [
            {
                //首页
                path: "/",
                name: 'index',
                component: resolve => void (require(['@/pages/index.vue'], resolve))
            },
            {
                //dashboard
                path: "/dashboard",
                name: 'dashboard',
                component: resolve => void (require(['@/pages/dashboard.vue'], resolve))
            },
            ...user.routes,
            ...role.routes,
            ...premisstion.routes,
            ...commonComponents.routes,
            ...echarts.routes,
            ...fileDownload.routes
        ]
	}]
})

//路由拦截器
router.beforeEach((to, from, next) => {
    let userInfo = Cookies.get('userInfo');
    if(to.path != '/login') {
        userInfo ? next() : next({ path: '/login' });
    }

    next()
});

export default router 


