import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ViewEmployee from "@/components/ViewEmployee";
import Login from "@/components/Login";
import Register from "@/components/Register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/:employee_id",
      name: "view-employee",
      component: ViewEmployee
    },
  ]
});
