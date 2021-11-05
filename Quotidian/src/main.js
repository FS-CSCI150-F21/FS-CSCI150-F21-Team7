// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

/* eslint-disable no-new */
let app;
firebase.auth().onAuthStateChanged(user => { //Keeps the user logged in on page refresh
  if(!app){
    app = new Vue({
      el: "#app",
      router,
      template: "<App/>",
      components: { App }
    });
  }
});

