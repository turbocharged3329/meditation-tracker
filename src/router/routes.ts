export const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/MainView.vue'),
  },
  {
    path: '/',
    name: 'Statistics',
    component: () => import('../views/StatisticsView.vue'),
  },
]
