import Vue from 'vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element-variables.scss'
import './assets/css/theme.scss'
import store from './store'
import router from './router'
import VueI18n from 'vue-i18n'
import './mock'

import App from './App.vue'

Vue.use(VueI18n)
Vue.use(ElementUI, { size: 'small' });

Vue.config.productionTip = false
const i18n = new VueI18n({
    //定义默认语言
    locale: 'zh', 
    messages:{
      'zh': require('./lang/zh'),
      'en': require('./lang/en')
    }
})

new Vue({
  render: h => h(App),
  store,
  router,
  i18n
}).$mount('#app')
