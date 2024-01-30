import { createApp } from 'vue'

//general helpers
import './helpers';

//import './style.css'

//bs5
import * as Bootstrap from 'Bootstrap';
import '../../src/scss/styles.scss'

//leaflet
import "leaflet/dist/leaflet.css";
// //import "leaflet/dist/images/marker-icon.png";
// //delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//    iconUrl: require('leaflet/dist/images/marker-icon.png'),
//    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

//vue component
import App from './components/leaflet-tpe-map-app.vue';


createApp(App).mount('#app')
