import Vue from 'vue'
import Router from 'vue-router'
/* import Home from './views/Home.vue' */


Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about"  './views/About.vue')
    } */
    {
        path: '/',
        name: 'Initial',
        meta: {
          title: "Home Page"
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../view/Home.vue')
      },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: "Home Page"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../view/Home.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      meta: {
        title: "Um pouco sobre mim"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../view/Sobre.vue')
    },
    {
      path: '/portifolio',
      name: 'portifolio',
      meta: {
        title: "Alguns trabalhos"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../view/Portifolio.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      meta: {
        title: "Entre em contato conosco"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../view/Contato.vue')
    }
    ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

/*Colocar titulo na barra de titulo do navegador

- Mudar 'export default new Router' para 'export const router = new Router'

- adicionar o metodo beforeEach:

    router.beforeEach((to, from, next) => {
      document.title = to.meta.title
      next()
    })

- Incluir:
   =>    meta: {
           title: "Home Page"
         },
    esta chave na rota com o titulo desejado


*/