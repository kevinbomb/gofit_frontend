import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'log.in',
    component: () => import('@/views/loginPage.vue'),
  },
  {
    path: '/home',
    name: 'beranda',
    component: () => import('@/components/DashboardLayout.vue'),
    meta: {
      requiresAuth: true, // This route requires authentication
    },
    children: [
      {
        path: '/instruktur',
        name: 'instruktur.index',
        component: () => import('@/views/Instruktur/indexPage.vue'),
      },
      {
        path: '/instruktur/add',
        name: 'instruktur.add',
        component: () => import('@/views/Instruktur/addPage.vue'),
      },
      {
        path: '/instruktur/edit',
        name: 'instruktur.edit',
        component: () => import('@/views/Instruktur/editPage.vue'),
      },
      {
        path: '/jadwal',
        name: 'jadwal.index',
        component: () => import('@/views/Jadwal/indexPage.vue'),
      },
      {
        path: '/jadwal/add',
        name: 'jadwal.add',
        component: () => import('@/views/Jadwal/addPage.vue'),
      },
      {
        path: '/jadwal/edit',
        name: 'jadwal.edit',
        component: () => import('@/views/Jadwal/editPage.vue'),
      },
      {
        path: '/member',
        name: 'member.index',
        component: () => import('@/views/Member/indexPage.vue'),
      },
      {
        path: '/member/add',
        name: 'member.add',
        component: () => import('@/views/Member/addPage.vue'),
      },
      {
        path: '/member/edit',
        name: 'member.edit',
        component: () => import('@/views/Member/editPage.vue'),
      },
      {
        path: '/member/card',
        name: 'member.card',
        component: () => import('@/views/Member/cardPage.vue'),
      },
      {
        path: '/member/trans',
        name: 'member.trans',
        component: () => import('@/views/Member/transPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'log.in' }); // Redirect to the login page
  } else {
    next(); // Proceed to the next route
  }
});

export default router;