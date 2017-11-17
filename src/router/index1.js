import Vue from 'vue';
import Router from 'vue-router';
import layout from '../components/common/layout.vue';
import header from '../components/common/header.vue';
import side from '../components/common/side.vue';
import welcome from '../components/welcome.vue';
import user from '../components/user/user.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          name: "欢迎页",
          path: 'welcome',
          components: {
            header: header,
            side: side,
            tab: welcome,
          },
        },
        {
          name: "用户",
          path: 'user',
          components: {
            header: header,
            side: side,
            tab: user,
          },
        },
      ]
    }],
  linkActiveClass: 'active'
});
