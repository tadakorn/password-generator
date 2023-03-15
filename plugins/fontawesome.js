import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
/* import specific icons */
import {
    faArrowsRotate,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faClone,
  } from "@fortawesome/free-regular-svg-icons";
  
  /* add icons to the library */
  library.add(
    faArrowsRotate,
    faClone,
  );
  

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})


