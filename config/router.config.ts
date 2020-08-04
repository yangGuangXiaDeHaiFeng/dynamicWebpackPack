import { aRouters, bRouters, cRouters, dRouters, eRouters } from './routerConfig';
export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: './Welcome.tsx',
      },
      aRouters,
      bRouters,
      cRouters,
      dRouters,
      eRouters,
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
