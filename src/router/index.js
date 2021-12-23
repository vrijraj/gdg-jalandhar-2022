import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Google Developers Group Jalandhar | GDG Jalandhar",
    },
  },
  {
    path: "/team",
    name: "team",
    // route level code-splitting
    // this generates a separate chunk (team.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "team" */ "../views/Team.vue"),
    meta: {
      title: "Team | GDG Jalandhar",
    },
  },
  {
    path: "/events",
    name: "events",
    // route level code-splitting
    // this generates a separate chunk (events.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/Events.vue"),
    meta: {
      title: "Events | GDG Jalandhar",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta:{
        title:"About | GDG Jalandhar" 
      }
  },
  {
    path: "/faq",
    name: "FAQ",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FAQ" */ "../views/FAQ.vue"),
    meta:{
      title:"FAQ | GDG Jalandhar" 
    }
  },
  {
    path: "/code-of-conduct",
    name: "coc",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "coc" */ "../views/CoC.vue"),
    meta:{
      title:"Code of Conduct | GDG Jalandhar" 
    }
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "FAQ" */ "../views/PageNotFound.vue"),
      meta:{
        title:"Page not found | GDG Jalandhar" 
      }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  routes,
});

router.beforeEach((to,from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router;
