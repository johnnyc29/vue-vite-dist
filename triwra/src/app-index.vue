<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
import DataTable from 'datatables.net-dt';
 

export default{
    data() {
        return {
            title: 'abc', 
            comp: `MultipleChartsProjectCostsRevenues`,
            compList: [
                {
                    componentName: 'GanttChart', 
                    type: 'BarChart',
                    title: '基礎 Gantt Chart(甘特圖)', 
                    description: 'Gantt Chart(甘特圖)', 
                }, 
                {
                    componentName: 'BasicBarChart', 
                    type: 'BarChart',
                    title: '基礎 Bar Chart', 
                    description: '基礎 Bar Chart', 
                }, 
                {
                    componentName: 'BasicLineChart', 
                    type: 'LineChart',
                    title: '基礎 Line Chart', 
                    description: '基礎 Line Chart', 
                }, 
                {
                    componentName: 'MultipleCharts', 
                    type: 'Custom',
                    title: '進階-多張表', 
                    description: '多張表，Bar + Line', 
                }, 
                {
                    componentName: 'MultipleChartsProjectCostsRevenues', 
                    type: 'Custom',
                    title: '專案成本營收分析', 
                    description: '多張表，Gantt + Bar', 
                }
            ]
        }
    }, 
    mounted(){

        let table = new DataTable('#myTable');
    }
}

</script>
<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <table id="myTable" class="table table-border"></table>
    </div>
</template>
<style scoped>

</style>