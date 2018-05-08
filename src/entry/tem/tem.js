import Vue from 'vue'
import tem from './tem.vue'

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  el: '#app',
  template:'<tem/>',
  components:{ tem }
})
