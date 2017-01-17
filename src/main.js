import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';//非官方的，发送ajax请求的一个库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

import App from './App';
import register from 'components/register/register';
import startup from 'components/startup/startup';
import login from 'components/login/login';
import main from 'components/main/main';
import home from 'components/home/home';
import explore from 'components/explore/explore';
import notification from 'components/notification/notification';
import me from 'components/me/me';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Mint);

const router = new VueRouter({
  routes :[
    {
      path: '/startup',
      component: startup,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'register',
          component: register
        },
        {
          path: 'login',
          component: login
        }
      ]
    },
    {
      path:'/main',
      name:'main',
      component:main,
      children:[
        {
          path:'home',
          component:home
        },
        {
          path:'explore',
          component:explore
        },
        {
          path:'notification',
          component:notification
        },
        {
          path:'me',
          component:me
        },

      ]
    },

  ]
});


const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
