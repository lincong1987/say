import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';//非官方的，发送ajax请求的一个库
import App from './App';
import register from 'components/register/register';
import home from 'components/home/home';
import login from 'components/login/login';


Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    path: '/home', component: home
  },
   {
    path: '/register', component: register
  },
   {
    path: '/login', component: login
  }
];
const router = new VueRouter({
  routes
});


const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
