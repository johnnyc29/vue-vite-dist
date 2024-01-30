import { createApp } from 'vue'

//import './style.css'
import App from './app-index.vue'
import '../../src/helpers'

// Import our custom CSS
import '../../src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).mount('#app')
