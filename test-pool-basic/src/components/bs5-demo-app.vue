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
        
    }
}
</script>
<template>
    <div class="container row">

        <Header title="Bs5 demo"></Header>
        <div>
            <a href="https://getbootstrap.com/" target="_blank">official instructions</a>
            <ul>
                <li>install bs<br>
                    <code>
                        npm i --save bootstrap @popperjs/core<br>
                        npm i --save-dev sass
                    </code>
                </li>
                <li>prepare scss for bootstrap css files<br>
                    e.g. create a file styles.css of /src/scss/<br>
                    add the following codes: <br>
                    <code>
                        // Import all of Bootstrap's CSS<br>
                        @import "bootstrap/scss/bootstrap";
                    </code>
                </li>
                <li>
                    import needed components from bs<br>
                    <code>
                        // Import our custom CSS<br>
                        import '../../src/scss/styles.scss'<br>

                        // Import all of Bootstrap's JS<br>
                        import * as bootstrap from 'bootstrap'
                    </code>
                </li>
            </ul>
        </div>
        <div v-for="(obj, idx) in pageList" :key="idx" class="col-3">
            <a :href="obj.url">{{ obj['page-name'] }}</a>
        </div>

    </div>
</template>
<style scoped>
.highlight {
    color: blue;
}
</style>
