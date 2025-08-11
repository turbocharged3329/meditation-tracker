export const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../views/StatisticsView.vue'),
  },
]
