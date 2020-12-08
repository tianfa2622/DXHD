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
import PoliceDisplayCar from '../views/management/managementChildren/policeDisplay/policeDisplayChildren/car'
import PoliceDisplayPolic from '../views/management/managementChildren/policeDisplay/policeDisplayChildren/polic'
import PoliceRoute from '../views/management/managementChildren/policeRoute'
import PointPeople from '../views/management/managementChildren/pointPeople'
import PoliceMan from '../views/management/managementChildren/policeMan'
import StressCar from '../views/management/managementChildren/stressCar'
import StatisticsCar from '../views/management/managementChildren/stressCar/stressCarChildren/statisticsCar'
import PositionCar from '../views/management/managementChildren/stressCar/stressCarChildren/positionCar'
import SociologyCar from '../views/management/managementChildren/sociologyCar'
import PoliceDatas from '../views/management/managementChildren/policeDatas'
import Business from '../views/business'
import Scene from '../views/business/businessChildren/scene'
import Study from '../views/business/businessChildren/study'
import Regulated from '../views/business/businessChildren/regulated'
import Activity from '../views/activity'
import Apply from '../views/activity/activityChildren/apply'
import Approval from '../views/activity/activityChildren/approval'
import Programme from '../views/activity/activityChildren/programme'
import ProgrammeDetailed from '../views/activity/activityChildren/programme/detailed'
import Trial from '../views/activity/activityChildren/trial'
import File from '../views/activity/activityChildren/file'
import ActivityArchives from '../views/activity/activityChildren/file/fileChildren/activityArchives'
import VenueArchives from '../views/activity/activityChildren/file/fileChildren/venueArchives'
import ActivityJournal from '../views/activity/activityChildren/file/fileChildren/activityJournal'
import Statistics from '../views/activity/activityChildren/statistics'
import Checkpoint from '../views/activity/activityChildren/statistics/statisticsChildren/checkpoint'
import PreventionControl from '../views/activity/activityChildren/statistics/statisticsChildren/control'
import Watchman from '../views/activity/activityChildren/statistics/statisticsChildren/watchman'
import Situation from '../views/situation'
import SituationMap from '../views/situation/situationChildren/map'
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
        component: PoliceDisplay,
        children:
          [
            {
              path: 'policeDisplayCar',
              component: PoliceDisplayCar
            },
            {
              path: 'policeDisplayPolic',
              component: PoliceDisplayPolic
            }
          ]
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
        component: StressCar,
        children:
          [
            {
              path: 'statisticsCar',
              component: StatisticsCar
            },
            {
              path: 'positionCar',
              component: PositionCar
            }
          ]
      },
      {
        path: 'sociologyCar',
        component: SociologyCar
      },
      {
        path: 'policeDatas',
        component: PoliceDatas
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
      },
      {
        path: 'programme',
        component: Programme
      },
      {
        path: 'programme/:id',
        component: ProgrammeDetailed
      },
      {
        path: 'Trial',
        component: Trial
      },
      {
        path: 'file',
        component: File,
        children: [
          {
            path: 'activityArchives',
            component: ActivityArchives
          },
          {
            path: 'venueArchives',
            component: VenueArchives
          },
          {
            path: 'activityJournal',
            component: ActivityJournal
          }
        ]
      },
      {
        path: 'statistics',
        component: Statistics,
        children: [
          {
            path: 'checkpoint',
            component: Checkpoint
          },
          {
            path: 'control',
            component: PreventionControl
          },
          {
            path: 'watchman',
            component: Watchman
          }
        ]
      }
    ]
  },
  {
    name: '态势感知',
    path: '/situation',
    component: Situation,
    children: [
      {
        path: 'situationMap',
        component: SituationMap
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
  console.log('%c ', 'background: url(https://pic1.zhimg.com/v2-edd414d01c4c0d838f5fd6530c91ea09_r.jpg?source=1940ef5c) no-repeat center;padding-left:800px;padding-bottom: 500px;background-size: 100% 100%;')
})
export default router
