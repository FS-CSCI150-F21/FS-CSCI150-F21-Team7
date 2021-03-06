import Vue from "vue";
import Router from "vue-router";
//import Home from "@/components/Home";
import ViewEmployee from "@/components/ViewEmployee";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Calendar from "@/components/Calendar";
import Followlist from "@/components/Followlist";
import Profile from "@/components/Profile";
import Homepage from "@/components/Homepage";
import AvatarPage from "@/components/AvatarPage";
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
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
      path: "/AvatarPage",
      name: "AvatarPage",
      component: AvatarPage,
      meta: {
        requiresAuth: true
      }
    },
    {
    path: "/Profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
    {
      path: "/followlist",
      name: "followlist",
      component: Followlist,
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