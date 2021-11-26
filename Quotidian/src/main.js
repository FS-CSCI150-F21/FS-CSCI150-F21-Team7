// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(VueTextareaAutosize);
Vue.component('icon', Icon);
Vue.config.productionTip = false;

/* eslint-disable no-new */
let app;
firebase.auth().onAuthStateChanged(user => {
  //Keeps the user logged in on page refresh
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      template: "<App/>",
      vuetify,
      components: { App }
    });
  }
});
