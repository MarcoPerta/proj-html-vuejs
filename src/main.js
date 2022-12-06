import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

  // / import font awesome icon component /
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  // / import specific icons /
  import { faPhone } from '@fortawesome/free-solid-svg-icons'
  import { faFacebook } from '@fortawesome/free-brands-svg-icons'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons'
  import { faInstagram} from '@fortawesome/free-brands-svg-icons'
  import { faYoutube} from '@fortawesome/free-brands-svg-icons'
  import { faPaperPlane} from '@fortawesome/free-regular-svg-icons'
  import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
  import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

  
  // / add icons to the library /
  library.add(faPhone,faFacebook,faTwitter,faInstagram,faYoutube,faPaperPlane,faChevronRight,faChevronUp)

  // / add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
