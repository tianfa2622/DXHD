import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: Home
  },
  {
    path: '/admin',
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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
