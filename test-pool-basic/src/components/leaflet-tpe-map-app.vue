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
            testArray: [],
            leafMap: null,
            mapSettings: {
                zoomLevel: 13,
                assets: [],
                mapTile: null,
                mapCurrentUsage: null,
                drawingCache: {
                    polyline: {
                        latLngList: [], 
                        anchorMarkerList: [],
                        object: null, 
                        name: '畫線', 
                    }, 
                    polygon: {
                        latLngList: [],
                        anchorMarkerList: [], 
                        object: null, 
                        name: '畫多邊型'
                    }
                }
            },
            mapTileList: [
                {
                    name: 'Open Street Map',
                    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    key: 'open-street-map'
                },
                {
                    name: '北市-97圖框',
                    url: 'https://www.historygis.udd.gov.taipei/arcgis/rest/services/Urban/FrameIndex/MapServer/tile/{z}/{y}/{x}',
                    key: 'map97'
                },
                {
                    name: '北市-106年航測影像',
                    //url: 'https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2017/MapServer/tile/',
                    url: 'https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2018/MapServer/tile/{z}/{y}/{x}',
                    key: 'tpe-satellite'
                },
                {
                    name: '北市-104年地形圖',
                    //url: 'https://www.historygis.udd.gov.taipei/arcgis/rest/services/TOPO/DGN_2015/MapServer/tile/',
                    url: 'https://www.historygis.udd.gov.taipei/arcgis/rest/services/TOPO/DGN_2017/MapServer/tile/{z}/{y}/{x}',
                    key: 'tpe-topography'
                },
                {
                    name: '北市-地籍',
                    url: 'https://www.historygis.udd.gov.taipei/arcgis/rest/services/Urban/EMap/MapServer/tile/{z}/{y}/{x}',
                    key: 'tpe-cadastre'
                },
                {
                    name: '北市-67圖框',
                    url: 'https://www.historygis.udd.gov.taipei/arcgis/rest/services/Urban/FrameIndex_67/MapServer/tile/{z}/{y}/{x}',
                    key: 'map67'
                }
            ]

        }
    },
    computed: {
        mapUageList(){
            let list = [];
            list.push(
                { name: '查看', key: 'view'}
            );

            Object.keys(this.mapSettings.drawingCache).forEach(key => {
                //console.log(key);
                list.push(
                    { name: this.mapSettings.drawingCache[key].name
                        , key: key}
                );
            });

            if(this.mapSettings.mapCurrentUsage == null){
                this.mapSettings.mapCurrentUsage = list[0].key;
            }

            return list;
        },
        mapBoundary() {
            let b = {
                sw: { lat: null, lng: null },
                ne: { lat: null, lng: null },
                nw: { lat: null, lng: null },
                se: { lat: null, lng: null },
            };

            if (this.leafMap != null) {
                //init DOM and render before mounted
                //need to detect if map has initialized

                let bounds = this.leafMap.getBounds();
                b.sw = bounds.getSouthWest();
                b.ne = bounds.getNorthEast();
                b.nw = bounds.getNorthWest();
                b.se = bounds.getSouthEast();

            }
            return b;
        }
    },
    watch: {
        'testArray.length'(newValue, oldValue){
            console.log('testArray changed');
        },
        'mapSettings.drawingCache.polyline.latLngList.length'(newValue, oldValue){
            this.mapSettings.drawingCache.polyline.object = L.polyline(this.mapSettings.drawingCache.polyline.latLngList, {color: 'red'});
            console.log(newValue);
        },
        'mapSettings.drawingCache.polyline.object'(newValue, oldValue){
            if(oldValue != null){
                oldValue.removeFrom(this.leafMap);
            }
            newValue.addTo(this.leafMap);
        },
        'mapSettings.drawingCache.polygon.latLngList.length'(newValue, oldValue){
            this.mapSettings.drawingCache.polygon.object = L.polygon(this.mapSettings.drawingCache.polygon.latLngList, {color: 'green'});
            console.log(newValue);
        },
        'mapSettings.drawingCache.polygon.object'(newValue, oldValue){
            if(oldValue != null){
                oldValue.removeFrom(this.leafMap);
            }
            newValue.addTo(this.leafMap);
        },
        'mapSettings.mapTile'(newValue, oldValue) {
            //console.log(newValue);
            if (oldValue != null) {
                oldValue.ifChecked = false;
                if (oldValue.t != null) {
                    t.removeFrom(this.leafMap);
                }
            }
            newValue.ifChecked = true;
            let t = L.tileLayer(
                newValue.url,
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                })
                .addTo(this.leafMap);
            newValue.tileObject = t;
        }
    },
    methods: {
        initMapAssets() {
            let options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            //let url = '/public/data/latlng.json';
            let url = '/data/latlng.json';  //point to public directory
            fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(jsonData => {
                    // Now you can use the jsonData variable to access the parsed JSON data
                    console.log(jsonData);
                    this.mapSettings.assets = jsonData;
                })
                ;
        },
        initMap() {
            this.leafMap = L.map("map").setView([25.1148852, 121.5316475], this.mapSettings.zoomLevel);

            this.mapSettings.mapTile = this.mapTileList[0];

            this.leafMap.on('click', event => {
                console.log('map clicked')
                console.log(event);

                let newMarker = L.marker(event.latlng);

                switch(this.mapSettings.mapCurrentUsage){
                    case 'polygon':
                        this.mapSettings.drawingCache.polygon.anchorMarkerList.push(newMarker);
                        newMarker.on('click', _event => {
                            console.log(_event);
                            let idx = this.mapSettings.drawingCache.polygon.latLngList.findIndex(obj => obj.lat == _event.latlng.lat && obj.lng == _event.latlng.lng);
                            console.log(idx);
                            this.mapSettings.drawingCache.polygon.latLngList.splice(idx, 1);
                            newMarker.removeFrom(this.leafMap);
                        });
                        //newMarker.addTo(this.leafMap);

                        this.mapSettings.drawingCache.polygon.latLngList.push(event.latlng);
                        break;
                    case 'polyline':
                        this.mapSettings.drawingCache.polyline.anchorMarkerList.push(newMarker);
                        newMarker.on('click', _event => {
                            console.log(_event);
                            let idx = this.mapSettings.drawingCache.polyline.latLngList.findIndex(obj => obj.lat == _event.latlng.lat && obj.lng == _event.latlng.lng);
                            console.log(idx);
                            this.mapSettings.drawingCache.polyline.latLngList.splice(idx, 1);
                            newMarker.removeFrom(this.leafMap);
                        });
                        //newMarker.addTo(this.leafMap);

                        this.mapSettings.drawingCache.polyline.latLngList.push(event.latlng);
                        break;
                    default:
                        break;
                }

                newMarker.addTo(this.leafMap);
                
            });
        },
        renderMarkers() {
            let markers = this.mapSettings.assets.slice(0, 10);
            markers.forEach((obj, idx) => {
                let _marker = L.marker(
                    [obj.lat, obj.lng],
                    { 
                        title: obj.locationDescription,
                        //draggable: true, 
                     }
                );
                _marker.on('click', () => {
                    console.log(`${obj.lat} clicked`)
                    let popup = L.popup()
                        .setLatLng({lng: obj.lng, lat: obj.lat})
                        .setContent(
                            `<p>行政區：${obj.district}, 路面材質：${obj.locationDescription}</p>
                            <p>(${obj.lat}, ${obj.lng})</p>`
                            )
                        .openOn(this.leafMap);
                    
                });
                _marker.addTo(this.leafMap);

            });

        },
        zoomIn() {
            this.mapSettings.zoomLevel++;
            this.leafMap.setZoom(this.mapSettings.zoomLevel);
        },
        zoomOut() {
            this.mapSettings.zoomLevel--;
            this.leafMap.setZoom(this.mapSettings.zoomLevel);
        },
        setMapTile(mapTileObj) {
            this.mapSettings.mapTile = mapTileObj;
        },
        pushTestArray(){
            this.testArray.push(1);
        },
    },
    beforeMount() {
    },
    mounted() {
        this.initMapAssets();
        this.initMap();
    }
}
</script>
<template>
    <div class="container ">

        <Header title="Leaflet map demo"></Header>

        <div class="row">
            <div id="map" class="col-9"></div>

            <div class="control-panel col-3">
                <div class="row">
                    <h5>Usage</h5><span>current: {{ mapSettings.mapCurrentUsage }}</span>
                    <div class="form-check" v-for="(obj, idx) in mapUageList" :key="obj.key">
                        <input class="form-check-input" 
                            type="radio"  
                            :id="'map-usage-' + obj.key"
                            name="map-usage"
                            :checked="mapSettings.mapCurrentUsage == obj.key"
                            @click="mapSettings.mapCurrentUsage = obj.key">
                        <label class="form-check-label" :for="'map-usage-' + obj.key">
                            {{ obj.name }}
                        </label>
                    </div>
                </div>
                <div class="row">
                    <h5>Zoom</h5><span>current zoom level: {{ this.mapSettings.zoomLevel }}</span>
                    <button class="btn btn-primary mx-2 col-auto" @click="zoomIn">+</button>
                    <button class="btn btn-primary mx-2 col-auto" @click="zoomOut">-</button>
                </div>
                <div class="mt-2 row">
                    <h5>Boundary </h5>
                    <label>North West</label><span>({{ mapBoundary.nw.lat }}, {{ mapBoundary.nw.lng }})</span>
                    <label>North East</label><span>({{ mapBoundary.ne.lat }}, {{ mapBoundary.ne.lng }})</span>
                    <label>South West</label><span>({{ mapBoundary.sw.lat }}, {{ mapBoundary.sw.lng }})</span>
                    <label>South East</label><span>({{ mapBoundary.se.lat }}, {{ mapBoundary.se.lng }})</span>
                </div>
                <div class="mt-2 row">
                    <h5>Assets </h5>
                    <label>records: {{ mapSettings.assets.length }}</label>
                    <div class="col-auto">
                        <button @click="renderMarkers" class="btn btn-primary">show locations</button>
                    </div>

                </div>
                <div class="mt-2 row">
                    <h5>Map Tiles </h5>
                    <label>Current: {{ (mapSettings.mapTile != null) ? mapSettings.mapTile.name : '' }}</label>
                    <div class="form-check" v-for="(obj, idx) in mapTileList" :key="obj.key">
                        <input class="form-check-input" type="radio" value="" :id="obj.key" @click="setMapTile(obj)"
                            :checked="obj.ifChecked">
                        <label class="form-check-label" :for="obj.key">
                            {{ obj.name }}
                        </label>
                    </div>
                </div>
                <!-- <div class="mt-2 row">
                    <h5 @click="pushTestArray">Map Tiles {{ testArray.length }}</h5>
                </div> -->

            </div>

        </div>
        <Footer></Footer>

    </div>
</template>
<style scoped>
#map {
    z-index: 0;
    height: 80vh;
}

.control-panel {
    height: 80vh;
    background-color: aqua;
    overflow-y: auto;
}
</style>
