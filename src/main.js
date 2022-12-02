import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
/*Import icone regular */
import {  } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add()

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* import specific icons */
import {  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar)

new Vue({
  render: h => h(App),
}).$mount('#app')
