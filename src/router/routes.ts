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
        }
      ]
    }
  ]
}
