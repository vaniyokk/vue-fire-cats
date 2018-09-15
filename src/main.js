import '@babel/polyfill';
import Vuefire from 'vuefire';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import firebase from './services/firebase';

Vue.use(Vuefire);

Vue.config.productionTip = false;

new Vue({
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at')
  },
  router,
  render: h => h(App)
}).$mount('#app');
