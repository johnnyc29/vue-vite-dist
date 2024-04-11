<script >



import $ from 'jquery';
window.jQuery = $;


import 'bootstrap-table';
import 'bootstrap-table/dist/bootstrap-table.min.css';
//import BootstrapTable from 'bootstrap-table/dist/bootstrap-table'
//import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js'
//import BootstrapTable from 'vue-bootstrap-table';
// //import BootstrapTable from ''
//import BootstrapTable from './VueBootstrapTable.vue';

export default {
  components: {
    BootstrapTable: 'bootstrap-table'
  },
  data() {
    return {
      count: 0,
      columns: [{
        field: 'id',
        title: 'Item ID'
      }, {
        field: 'name',
        title: 'Item Name'
      }, {
        field: 'price',
        title: 'Item Price'
      }],
      data: [{
        id: 1,
        name: 'Item 1',
        price: '$1'
      }, {
        id: 2,
        name: 'Item 2',
        price: '$2'
      }]
    }
  },
  mounted() {
    console.log(`the component is now mounted.`)
    $('.test').on('click', () => { alert('a') });

    let opt = {
      columns: this.columns,
      data: this.data
    };
    $('#bootstrapTable').bootstrapTable(opt);
    //console.log($('#bootstrapTable').length);
  }
}

</script>

<template>
  <div>
    <div class="test">
      hello
    </div>
    <div class="bg-primary">
      <table id="bootstrapTable" class="table table-border"></table>
    </div>
    <!-- <div>
      <BootstrapTable :columns="columns" :data="data" />
      <bootstrap-table :data="data" :columns="columns"></bootstrap-table>
    </div> -->
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
