import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: {
      auth: true,
    },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'dashboard',
        path: '',
        meta: {
          title: 'Trang chủ',
        },
        component: () => import('pages/Dashboard.vue'),
      },
    ],
  },
  // Guest
  {
    path: '/',
    meta: {
      auth: false,
    },
    component: () => import('layouts/Auth.vue'),
    children: [
      {
        name: 'login',
        path: '/login',
        meta: {
          title: 'Đăng nhập',
        },
        component: () => import('pages/auth/Login.vue'),
      },
      {
        name: 'register',
        path: '/register',
        meta: {
          title: 'Đăng ký',
        },
        component: () => import('pages/auth/Register.vue'),
      },
      {
        name: 'forgot-password',
        path: '/forgot-password',
        meta: {
          title: 'Quên mật khẩu',
        },
        component: () => import('pages/auth/ForgotPassword.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
