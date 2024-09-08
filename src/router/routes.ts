import { type RouteRecordRaw } from 'vue-router'

export default (): Array<RouteRecordRaw> => {
  return [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      redirect: { name: 'home' },
      meta: {
        requiresAuth: true,
        title: 'Home'
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/pages/home/Home.vue'),
          meta: {
            requiresAuth: true,
            title: 'Home'
          }
        },
        {
          path: '/charts',
          name: 'charts',
          component: () => import('@/pages/charts/Charts.vue'),
          meta: {
            requiresAuth: true,
            title: 'Charts'
          }
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('@/pages/settings/Settings.vue'),
          meta: {
            requiresAuth: true,
            title: 'Settings'
          }
        }
      ]
    }
  ]
}
