import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { showLoading, hideLoading } from '../components/loading'
import Home from '../views/home'
import Administration from '../views/administration'
import Admin from '../views/administration/adminChildren/admin'
import User from '../views/administration/adminChildren/user'
import Journal from '../views/administration/adminChildren/journal'
import Fnc from '../views/fnc'
import Ticket from '../views/fnc/fncChildren/ticket'
import Papers from '../views/fnc/fncChildren/papers'
import Control from '../views/control'
import Note from '../views/control/controlChildren/note'
import Car from '../views/control/controlChildren/car'
import Personnel from '../views/control/controlChildren/personnel'
import Release from '../views/control/controlChildren/release'
import Management from '../views/management'
import PoliceDisplay from '../views/management/managementChildren/policeDisplay'
import PoliceRoute from '../views/management/managementChildren/policeRoute'
import PointPeople from '../views/management/managementChildren/pointPeople'
import PoliceMan from '../views/management/managementChildren/policeMan'
import StressCar from '../views/management/managementChildren/stressCar'
import PositionCar from '../views/management/managementChildren/positionCar'
import SociologyCar from '../views/management/managementChildren/sociologyCar'
import Business from '../views/business'
import Scene from '../views/business/businessChildren/scene'
import Study from '../views/business/businessChildren/study'
import Regulated from '../views/business/businessChildren/regulated'
import Activity from '../views/activity'
import Apply from '../views/activity/activityChildren/apply'
import Approval from '../views/activity/activityChildren/approval'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/admin',
    name: '系统管理',
    component: Administration,
    children: [
      {
        path: 'role',
        component: Admin
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'journal',
        component: Journal
      }
    ]
  },
  {
    path: '/fnc',
    name: '接入功能',
    component: Fnc,
    children: [
      {
        path: 'ticket',
        component: Ticket
      },
      {
        path: 'papers',
        component: Papers
      }
    ]
  },
  {
    path: '/control',
    name: '布控管理',
    component: Control,
    children: [
      {
        path: 'note',
        component: Note
      },
      {
        path: 'car',
        component: Car
      },
      {
        path: 'personnel',
        component: Personnel
      },
      {
        path: 'release',
        component: Release
      }
    ]
  },
  {
    path: '/management',
    name: '数据管理',
    component: Management,
    children: [
      {
        path: 'policeDisplay',
        component: PoliceDisplay
      },
      {
        path: 'policeRoute',
        component: PoliceRoute
      },
      {
        path: 'pointPeople',
        component: PointPeople
      },
      {
        path: 'policeMan',
        component: PoliceMan
      },
      {
        path: 'stressCar',
        component: StressCar
      },
      {
        path: 'positionCar',
        component: PositionCar
      },
      {
        path: 'sociologyCar',
        component: SociologyCar
      }
    ]
  },
  {
    path: '/business',
    name: '业务协同',
    component: Business,
    children: [
      {
        path: 'scene',
        component: Scene
      },
      {
        path: 'study',
        component: Study
      },
      {
        path: 'regulated',
        component: Regulated
      }
    ]
  },
  {
    name: '活动管理',
    path: '/activity',
    component: Activity,
    children: [
      {
        path: 'apply',
        component: Apply
      },
      {
        path: 'approval',
        component: Approval
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  store.commit('setRouterName', to.matched[0].name)
  showLoading()
  setTimeout(() => {
    hideLoading()
  }, 888)
  next()
})
export default router
