<script>
import Header from './header.vue'
export default {
    components: {
        Header
    },
    data() {
        return {
            pageList: [
                {
                    'page-name': 'index',
                    url: './index.html'
                },
                {
                    'page-name': 'map',
                    url: './map.html'
                },
                {
                    'page-name': 'bs5',
                    url: './bs5-demo.html'
                }
            ],
        }
    },
    methods: {
        add1: function () {
            this.count++;
        }
    }
}
</script>
<template>
    <div class="container">

        <Header :title="'index page'"></Header>
        <div v-for="(obj, idx) in pageList" :key="idx">
            <a :href="obj.url">{{ obj['page-name'] }}</a>
        </div>
    </div>
</template>
<style scoped>
.highlight {
    color: blue;
}
</style>
