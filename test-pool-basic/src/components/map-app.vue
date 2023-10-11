<script>
//using components - 01 
import Header from './header.vue'
import FooterPart from './footer.vue'
//using components - 01

export default {
    //using components - 02
    components: {
        Header, 
        FooterPart
    },
    //using components - 02
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add1: function(){
            this.count++;
        }
    }
}
</script>
<template>    
    <div class="container">
        <!-- using components - 03 -->
        <Header :title="'map page'" />
        <!-- using components - 03 -->
        
        <div class="highlight">
            {{ count }}
        </div>
        <a @click="add1">Add 1</a>
        

        <!-- using components - 03 -->
        <footer-part />
        <!-- using components - 03 -->        
    </div>

</template>
<style scoped>
.highlight {
    color: blue;
}
</style>
