import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import AppContent from './components/AppContent.vue'
import Footer from './components/Footer.vue'

export const eventBus = new Vue();


Vue.component('app-header', Header);
Vue.component('app-content', AppContent);
Vue.component('app-footer', Footer);


new Vue({
  el: '#app',
  render: h => h(App)
})
