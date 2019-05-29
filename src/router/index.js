import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import find from '../pages/find/find'
import library from '../pages/library'
import community from '../pages/community'
import me from '../pages/me'
import attention from '../pages/find/children/attention'
import headline from '../pages/find/children/headline'
import login from '../pages/login'
Vue.use(Router);

const router=new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path:'',
          redirect: '/find'
        },
        {
          path: '/find',
          component: find,
          redirect: '/headline/0',
          children: [
            {
              path: '/attention',
              component: attention,
              meta:{index:0,}
            }, {
              path: '/headline/:id',
              component: headline,
              meta:{index:1,},
            }
          ]
        },
        {
          path: '/library',
          component: library,
        },
        {
          path: '/community',
          component: community,
        },
        {
          path: '/me',
          component: me,
        },
        {
          path: '/login',
          component: login,
        }
      ]
    }
  ]
});
router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    next();
  }else{
    let token=localStorage.getItem('token');
    if(token===''||token===null){
      next('/login');
    }else{
      next();
    }
  }
})
export default router;
