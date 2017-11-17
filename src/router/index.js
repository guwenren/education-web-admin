import Vue from 'vue';
import Router from 'vue-router';
import layout from '../components/common/layout.vue';
// import header from '../components/common/header.vue';
// import side from '../components/common/side.vue';
import welcome from '../components/welcome.vue';
import user from '../components/user/user.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      name: 'layout',
      iconCls: 'el-icon-message',//图标样式class
      children: [
        {path: '/welcome', component: welcome, name: 'welcome'},
        {path: '/user', component: user, name: 'user'}
      ]
    },
  ],
  linkActiveClass: 'active'
});
