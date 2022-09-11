import type { RouteRecordRaw } from 'vue-router'

import { RouteType } from '@/enums'

export default <RouteRecordRaw[]>[
  {
    path: '/',
    name: 'BaseHome',
    component: () => import('@/views/BaseHome.vue'),
    meta: { type: RouteType.HOME },
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { type: 'normal route' },
  },

  {
    path: '/plus-minus-machine',
    name: 'PlusMinusMachine',
    component: () => import('@/views/PlusMinusMachine.vue'),
    meta: { type: RouteType.FEATURE_PAGE },
  },

  {
    path: '/todo-list',
    name: 'TodoList',
    component: () => import('@/views/TodoList.vue'),
    meta: { type: RouteType.FEATURE_PAGE },
  },
]
