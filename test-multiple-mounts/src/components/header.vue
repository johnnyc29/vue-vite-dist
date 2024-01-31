<script>
export default {
    props: {
        title: {
            type: String, 
            default: 'unset'
        }
    },
    data() {
        return {
            menuList: [
                {
                    title: 'index', 
                    url: 'index.html'
                }, 
                {
                    title: 'page2', 
                    url: 'page2.html'
                }, 
            ]
        }
    },
    methods: {
        goBack: function(){
            history.back();
        }
    }
}
</script>
<template>
    <div class="header">
        <h1>{{title}}</h1>
        <div @click="goBack">back</div>
        <div v-for="(obj, idx) in menuList" :key="idx">
            <a :href="obj.url">{{ obj.title }}</a>
        </div>
        <hr>
    </div>
</template>
<style scoped>
.highlight {
    color: blue;
}
</style>
