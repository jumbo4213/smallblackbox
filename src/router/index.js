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
      redirect:'/find',
      children:[
        {
          path:'/find',
          component: find,
          redirect:'/find/headline',
          children:[
            {
              path:'/attention',
              component:attention
            },{
              path:'/headline',
              component:headline
            }
          ]
        },
        {
          path:'/library',
          component: library
        },
        {
          path:'/community',
          component: community
        },
        {
          path:'/me',
          component: me
        }
      ]
    }
  ]
})
