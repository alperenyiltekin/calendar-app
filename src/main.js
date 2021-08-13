import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import 'firebase/firestore'
import VueTextAreaAutoSize from 'vue-textarea-autosize'

Vue.use(firebase)
Vue.use(VueTextAreaAutoSize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});
export const db = firebase.firestore()

new Vue({
  vuetify,
  VueTextAreaAutoSize,
  render: h => h(App)
}).$mount('#app')
