import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Graphique from '@/components/Graphique'
import Tableau from '@/components/Tableau'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tableau',
      name: 'Tableau',
      component: Tableau
    },
    {
      path: '/graphique',
      name: 'Graphique',
      component: Graphique
    }
  ]
})
