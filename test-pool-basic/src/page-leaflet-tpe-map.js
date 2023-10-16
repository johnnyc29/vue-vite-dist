import { createApp } from 'vue'

//general helpers
import './helpers';

//import './style.css'

//bs5
import * as Bootstrap from 'Bootstrap';
import '../../src/scss/styles.scss'

//leaflet
import "leaflet/dist/leaflet.css";

//vue component
import App from './components/leaflet-tpe-map-app.vue';


createApp(App).mount('#app')
