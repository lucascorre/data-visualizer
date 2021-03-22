import Vue from 'vue'
import Router from 'vue-router'
import Graphique from '@/components/Graphique'
import Tableau from '@/components/Tableau'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Tableau',
      component: Tableau
    },
    {
      path: '/graphique',
      name: 'Graphique',
      component: Graphique,
      props: true
    }
  ]
})
