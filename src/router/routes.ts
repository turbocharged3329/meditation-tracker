export const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'Registration',
    component: () => import('../views/RegisterView.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../views/StatisticsView.vue'),
  },
]
