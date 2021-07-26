import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Select, Option, Tree } from 'element-ui'
import elEasySelect from '@/index'
Vue.use(Select)
Vue.use(Option)
Vue.use(Tree)
Vue.use(elEasySelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
