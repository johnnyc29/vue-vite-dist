import { createApp } from 'vue'

// Import our custom CSS
import '../../src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//import './style.css'
import App from './components/bs5-demo-app.vue'
import './helpers'

createApp(App).mount('#app')
