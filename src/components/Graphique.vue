<template>
  <div class="hello">
      <h1>Graphique VUE</h1>
      <div v-if="chargeDone">
        <pie-chart :data="triPetParameter"/>
        <bar-chart :data="triColorParameter"/>
      </div>
  </div>
</template>

<script>
import PieChart from './PieChart.vue'
import BarChart from './BarChart.vue'
export default {
  name: 'Graphique',
  components: {
    PieChart,
    BarChart
  },
  props: {
    items: Array
  },
  data: function () {
    return {
      chargeDone: false,
      triPetData: [0, 0, 0, 0],
      triPetParameter: {},
      triColorData: [0, 0, 0, 0, 0, 0],
      triColorParameter: {}
    }
  },
  mounted () {
    if (this.items) {
      this.triPet()
      this.triColor()
      this.chargeDone = true
    }
  },
  methods: {
    triPet () {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].preferences.favorite_pet === 'Dog') {
          this.triPetData[0] += 1
        }
        if (this.items[i].preferences.favorite_pet === 'Cat') {
          this.triPetData[1] += 1
        }
        if (this.items[i].preferences.favorite_pet === 'Bird') {
          this.triPetData[2] += 1
        }
        if (this.items[i].preferences.favorite_pet === 'Rat') {
          this.triPetData[3] += 1
        }
      }
      this.triPetParameter = {
        labels: ['Dog', 'Cat', 'Bird', 'Rat'],
        datasets: [
          {
            backgroundColor: ['#FFD8FF', '#A5C400', '#00D8FF', '#00D8B5'],
            data: this.triPetData
          }
        ]
      }
    },
    triColor () {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].preferences.favorite_color === 'Red') {
          this.triColorData[0] += 1
        }
        if (this.items[i].preferences.favorite_color === 'Blue') {
          this.triColorData[1] += 1
        }
        if (this.items[i].preferences.favorite_color === 'Green') {
          this.triColorData[2] += 1
        }
        if (this.items[i].preferences.favorite_color === 'Yellow') {
          this.triColorData[3] += 1
        }
        if (this.items[i].preferences.favorite_color === 'Orange') {
          this.triColorData[4] += 1
        }
        if (this.items[i].preferences.favorite_color === 'Purple') {
          this.triColorData[5] += 1
        }
      }
      this.triColorParameter = {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple'],
        datasets: [
          {
            backgroundColor: ['#FF0000', '#0000FF', '#00FF00', '#00D8B5', '#55FF12', '#98FF87'],
            data: this.triColorData
          }
        ]
      }
    }
  }
}
</script>
