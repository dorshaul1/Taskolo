

<script>
import VueCharts from "vue-chartjs";
import { Bar, Line, Doughnut } from "vue-chartjs";

// MonthlyIncome.vue 
export default {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>



