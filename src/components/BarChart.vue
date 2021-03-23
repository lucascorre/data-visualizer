<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    data: Object
  },
  data: function () {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
