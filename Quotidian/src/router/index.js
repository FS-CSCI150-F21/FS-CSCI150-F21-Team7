import Vue from "vue";
import Router from "vue-router";
//import Home from "@/components/Home";
import ViewEmployee from "@/components/ViewEmployee";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Calendar from "@/components/Calendar";
import Profile from "@/components/Profile";
import Friends from "@/components/Friends";
import Home from "@/components/Homepage";
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile",
      name: "prodfile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/friends",
      name: "friends",
      component: Friends,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/:employee_id",
      name: "view-employee",
      component: ViewEmployee,
      meta: {
        requiresAuth: true
      }
    },
  ]
});


//Nav guards
router.beforeEach((to, from, next) => {
  // Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //Check if NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to login page
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged in
    if (firebase.auth().currentUser) {
      // Go to home page
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // proceed to route
      next();
    }
  } else {
    // proceed to route
    next();
  }
});

export default router;