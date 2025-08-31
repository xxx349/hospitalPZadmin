import { createWebHashHistory, createRouter } from 'vue-router'

import layout from '../views/Main.vue'
import login from '../views/login/login.vue'
import Dashboard from '../views/dashboard/dashboard.vue'
import Admin from '../views/auth/admin.vue'
import Group from '../views/auth/group.vue'
import Staff from '../views/vppz/staff.vue'
import Order from '../views/vppz/order.vue'
const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: 'dashboard',
        meta: { id: '1', name: '控制台', icon: 'Platform', path: '/dashboard', describe: '用于展示当前系统中的统计数据、统计报表及重要实时数据' },
        component: Dashboard
      },
      {
        path: 'auth',
        meta: { id: '2', name: '权限管理', icon: 'Grid' },
        children: [
          {
            path: '',
            alias: ['admin'],
            meta: { id: '1', name: '账号管理', icon: 'Avatar', path: '/auth/admin', describe: '管理员可以进行编辑，权限修改后需要登出才会生效' },
            component: Admin
          },
          {
            path: 'group',
            meta: { id: '2', name: '菜单管理', icon: 'Menu', path: '/auth/group', describe: '菜单规则通常对应一个控制器的方法,同时菜单栏数据也从规则中获取' },
            component: Group
          }
        ]
      },
      {
        path: 'vppz',
        meta: { id: '3', name: 'DIDI陪诊', icon: 'BellFilled' },
        children: [
          {
            path: '',
            alias: ['staff'],
            meta: { id: '1', name: '陪护管理', icon: 'Checked', path: '/vppz/staff', describe: '陪护师可以进行创建和修改，设置对应生效状态控制C端选择' },
            component: Staff
          },
          {
            path: 'order',
            meta: { id: '2', name: '订单管理', icon: 'List', path: '/vppz/order', describe: 'C端下单后可以查看所有订单状态，已支付的订单可以完成陪护状态修改' },
            component: Order
          }
        ]
      }
    ]

  },
  {
    path: '/login',
    component: login
  }
]

const router = createRouter({
  // 路由匹配模式
  history: createWebHashHistory(),
  // 路由具体数据
  routes,
})

export default router