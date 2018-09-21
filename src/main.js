import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import AppContent from './components/AppContent.vue'
import Footer from './components/Footer.vue'
import router from './router'
import {firebaseAuth} from './db'
import './db/index'

export const eventBus = new Vue();


Vue.component('app-header', Header);
Vue.component('app-content', AppContent);
Vue.component('app-footer', Footer);


let app;
firebaseAuth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
});



