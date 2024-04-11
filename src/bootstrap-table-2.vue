<script setup>


import { onMounted, ref, render, watch } from 'vue'
import $ from 'jquery';
window.jQuery = $;


import 'bootstrap-table';
import 'bootstrap-table/dist/bootstrap-table.min.css';
//import BootstrapTable from 'bootstrap-table/dist/bootstrap-table'
//import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js'
//import BootstrapTable from 'vue-bootstrap-table';
// //import BootstrapTable from ''
//import BootstrapTable from './VueBootstrapTable.vue';

const columns = ref(
  [{
      field: 'id',
      title: 'Item ID'
    }, {
      field: 'name',
      title: 'Item Name'
    }, {
      field: 'price',
      title: 'Item Price'
    }]
)
const $table = ref(null);
const data = ref(
  [{
      id: 1,
      name: 'Item 1',
      price: '$1'
    }, {
      id: 2,
      name: 'Item 2',
      price: '$2'
    }]
)
watch(data, async(n, o) => {
  console.log(n)
  renderTable();
})

function update(){
  data.value = 
  [{
      id: 1,
      name: 'Item 1',
      price: '$1'
    }, {
      id: 2,
      name: 'Item 2',
      price: '$2'
    }, {
      id: 3,
      name: 'Item 2',
      price: '$3'
    }]
}

function renderTable(){
  console.log($table.value);
  // if($table.value != null){
  //   $table.value.bootstrapTable('destroy')
  // }
  let opt = {
    columns: columns.value,
    data: data.value,
  };
  // $table.value = $('#bootstrapTable').bootstrapTable(opt);
  if($table.value == null){
    $table.value = $('#bootstrapTable').bootstrapTable(opt);
  }else{
   $table.value.bootstrapTable('load', data.value);
  }
}
onMounted(() => {
  console.log(`the component is now mounted.`)

  $('.test').on('click', update);

  renderTable();
})

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
