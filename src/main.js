import Vue from 'vue'
import App from './App.vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSave, faFolderOpen, faPrint } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { model } from './data'
import vuetify from './plugins/vuetify';

// library.add(faSave, faFolderOpen, faPrint)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.model = model;

new Vue({
  render: h => h(App),
  vuetify,

  data: {
    counter: 0
  }
}).$mount('#app')
