<template>
  <div class="hello">
      <h1>Graphique VUE</h1>
      <div v-if="chargeDone">
        <pie-chart :data="triPetParameter"/>
      </div>
  </div>
</template>

<script>
import PieChart from './PieChart.vue'
export default {
  name: 'Graphique',
  components: {
    PieChart
  },
  props: {
    items: Array
  },
  data: function () {
    return {
      triPetData: [0, 0, 0, 0],
      chargeDone: false,
      triPetParameter: {}
    }
  },
  mounted () {
    if (this.items) {
      this.triPet()
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
      console.log(this.triPetData)
      this.triPetParameter = {
        labels: ['Dog', 'Cat', 'Bird', 'Rat'],
        datasets: [
          {
            backgroundColor: ['#FFD8FF', '#A5C400', '#00D8FF', '#00D8B5'],
            data: this.triPetData
          }
        ]
      }
    }
  }
}
</script>
