<script>
import Header from './header.vue'
import Footer from './footer.vue'
import L from 'leaflet'


export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {

        }
    },
    methods: {
        initMap() {
            var map = L.map("map").setView([25.1148852,121.5316475], 13);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            // L.marker([51.5, -0.09])
            //     .addTo(map)
            //     .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
            //     .openPopup();
        }
    }, 
    mounted(){
        this.initMap();
    }
}
</script>
<template>
    <div class="container row">

        <Header title="Leaflet map demo"></Header>

        <div id="map"></div>
        <Footer></Footer>

    </div>
</template>
<style scoped>
#map {
    z-index: 0;
    height: 80vh;
    width: 100%;;
}
</style>
