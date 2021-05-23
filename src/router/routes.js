
const routes = [
  {
    name: 'start',
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Start.vue') }
    ]
  },  
  {
    name:'etapas',
    path: '/home',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Stages.vue') }
    ]
  },
  {
    name:'login',
    path: '/login',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Login.vue') }
    ]
  },
  {
    name: 'cadastro',
    path: '/cadastro',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Register.vue') }
    ]
  },
  {
    name:'perfil',
    path: '/perfil',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Profile.vue') }
    ]
  },
  {
    name:'execicio',
    path: '/exercicio',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Exercicio.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('../pages/Error404.vue')
  }
]

export default routes
