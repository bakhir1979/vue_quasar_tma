import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

import './style.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const pinia = createPinia()

createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .use(pinia)
  .mount('#app')
