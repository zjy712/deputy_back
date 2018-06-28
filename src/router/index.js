import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index/index'
import UserTable from '../components/page/UserTable'
import TaskTable from '../components/page/TaskTable'
import DateShow from '../components/page/DateShow'
import Login from '../components/public/Login'
import Home1 from '../components/page/Home'
import AddUser from '../components/page/AddUesr'
import AddAdmin from '../components/page/AddAdmin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Index,
      children:[
        {
          path:'/home/usershow',
          name: 'usershow',
          component: UserTable
        }
        ,
        {
          path:'/home/taskshow',
          name: 'taskshow',
          component: TaskTable
        }
        ,
        {
          path:'/home/dateshow',
          name: 'dateshow',
          component: DateShow
        },
        {
          path:'/home/adduser',
          name:'adduser',
          component:AddUser,
        },{
          path:'/home/addadmin',
          name:'addadmin',
          component:AddAdmin,
        }
        ,{
          path: '/',
          name:'s',
          component: Home1,
        }
      ]

    },{
      path:'/test',
      component:HelloWorld,
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
  ]
})
