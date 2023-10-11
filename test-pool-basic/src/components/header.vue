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
    </div>
</template>
<style scoped>
.highlight {
    color: blue;
}
</style>
