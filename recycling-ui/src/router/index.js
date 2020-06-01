import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import UserList from '../components/UsersList.vue'



Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Home',
      component: Home,
      redirect:'/Welcome',
      children: [{
          path: '/Welcome',
          component: Welcome
        },
        {
          path: '/usersList',
          component: UserList
        }

      ]
    },


  ]
})

//挂载路由导航守卫（相当与shiro 的认证）
router.beforeEach((to, from, next) => {
  //p1 将要访问的路径  p2 代表从哪个路径跳转过来的 p3 是个函数,代表放行
  if (to.path === '/login') return next();

  const token = window.sessionStorage.getItem("token");
  //判断token 是否存在
  //跳转到登录页
  if (!token) return next('/login')
  //存在直接放行
  next();
});


export default router;
