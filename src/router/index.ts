import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/home/home.vue'

const routes = [
  {
    path: '/',
    component: () => import('../components/layout/layout.vue'),
    meta: { title: '布局' },
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/home.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/shop/shoplist/list',
        name: 'ShopList',
        component: () => import('../views/shop/shoplist/list.vue'),
        meta: { title: '店铺列表' }
      },
      {
        path: '/shop/shoplist/details',
        name: 'ShopDetails',
        component: () => import('../views/shop/shoplist/details.vue'),
        meta: { title: '店铺详情' }
      },
      {
        path: '/shop/stock/list',
        name: 'StockList',
        component: () => import('../views/shop/stock/list.vue'),
        meta: { title: '仓库列表' }
      },
      {
        path: '/shop/shoplist/details',
        name: 'StockDetails',
        component: () => import('../views/shop/stock/details.vue'),
        meta: { title: '仓库详情' }
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router