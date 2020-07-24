import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StudentList from '@/components/student/StudentList.vue'
import FeeList from '@/components/fee/FeeList.vue'
import FeeDescription from '@/components/fee/FeeDescription.vue'
import BillList from '@/components/bill/BillList.vue'
import BillDescription from '@/components/bill/BillDescription.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/students' },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: StudentList
      },
      {
        path: '/students',
        name: 'students',
        component: StudentList
      },
      {
        path: '/fee/:id',
        name: 'fees',
        component: FeeList
      },
      {
        path: '/fee/description/:id',
        name: 'fees-description',
        component: FeeDescription
      },
      {
        path: '/bill/:id',
        name: 'bill',
        component: BillList
      },
      {
        path: '/bill/description/:id',
        name: 'bill-description',
        component: BillDescription
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
