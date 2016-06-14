import MpList from './pages/MpList.vue'
import Home from './pages/Home.vue'
import Dashboard from './pages/Dashboard.vue'
import Single from './layout/Single.vue'
import Message from './pages/Message.vue'
import App from './pages/App.vue'
import FindPass from './pages/Findpass.vue'
import Callback from './pages/Callback.vue'

export default function (router) {
  router.map({
    '/': {
      component: Single,
      subRoutes: {
        '/': {
          component: MpList
        },
        '/findPass': {
          component: FindPass
        },
        '/lock': {
          component: App
        },
        '/callback': {
          component: Callback
        }
      }
    },
    '/home': {
      name: 'home',
      component: Dashboard,
      subRoutes: {
        '/': {
          component: Home
        },
        '/features': {
          name: 'features',
          component: App,
          subRoutes: {
            '/mass-send': {
              component: App
            },
            '/auto-reply': {
              component: App
            },
            '/custom-menu': {
              component: App
            },
            '/vote': {
              component: App
            }
          }
        },
        '/management': {
          name: 'management',
          component: App,
          subRoutes: {
            '/messages': {
              component: App
            },
            '/users': {
              component: App
            },
            '/raw': {
              component: App
            }
          }
        },
        '/stat': {
          name: 'stat',
          component: App,
          subRoutes: {
            '/user-analysis': {
              component: App
            },
            '/app-analysis': {
              component: App
            },
            '/menu-analysis': {
              component: App
            },
            '/message-analysis': {
              component: App
            }
          }
        },
        '/message': {
          name: 'message',
          component: Message
        },
        '/profile': {
          name: 'profile',
          component: App
        },
        '/app': {
          name: 'app',
          component: App
        }
      }
    }
  })
  router.redirect({
    '*': '/'
  })
}
