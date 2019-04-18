import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import find from '../pages/find/find'
import library from '../pages/library'
import community from '../pages/community'
import me from '../pages/me'
import attention from '../pages/find/children/attention'
import headline from '../pages/find/children/headline'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
            redirect: '/find',
            children: [
                {
                    path: '/find',
                    component: find,
                    redirect: '/headline',
                    children: [
                        {
                            path: '/attention',
                            component: attention,
                            meta:{index:0}
                        }, {
                            path: '/headline',
                            component: headline,
                            meta:{index:1}
                        }
                    ]
                },
                {
                    path: '/library',
                    component: library
                },
                {
                    path: '/community',
                    component: community
                },
                {
                    path: '/me',
                    component: me
                }
            ]
        }
    ]
})
