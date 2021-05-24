
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
    name:'etapa',
    path: '/etapa',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Stage.vue') }
    ]
  },
  {
    name:'bonus',
    path: '/bonus',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Fase_Bonus.vue') }
    ]
  },
  {
    name:'apoie',
    path: '/apoie',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Apoie.vue') }
    ]
  },
  {
    name:'loja',
    path: '/loja',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Lojinha.vue') }
    ]
  },
  {
    name:'tema',
    path: '/tema',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Tema.vue') }
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
  {
    name:'apoiase',
    path: '/apoiase',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Apoiase.vue') }
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
