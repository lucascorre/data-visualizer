<template>
<div class="mt-3">
  <b-input-group class="mx-auto w-50"
  prepend="Recherche"
  >
    <b-form-input
    v-model="filter"
    >
    </b-form-input>
    <b-input-group-append>
      <b-button variant="dark" v-on:click="routeToGraphique">Graphique</b-button>
    </b-input-group-append>
  </b-input-group>

  <div class="mt-3">
    <b-table striped hover
      id="people-table"
      ref="peopleTable"
      :per-page="perPage"
      :current-page="currentPage"
      :items="items"
      :fields="fields"
      :filter="filter"
      small
      dark
      bordered
      @row-clicked="onrowclicked"
      @filtered="onFiltered"
      >
    </b-table>
  </div>

  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
    </b-card>
  </b-collapse>

  <div class="pagination justify-content-center">
    <b-pagination
      v-model="currentPage"
      pills
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="people-table">
    </b-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: 'Tableau',
  data: function () {
    return {
      perPage: 20,
      currentPage: 1,
      fields: [
        {
          key: 'lastname',
          label: 'Last Name',
          sortable: true
        },
        {
          key: 'firstname',
          label: 'First Name',
          sortable: true
        },
        {
          key: 'gender',
          label: 'Gender',
          sortable: true
        },
        {
          key: 'preferences.favorite_pet',
          label: 'Favorite Pet',
          sortable: true
        },
        {
          key: 'preferences.favorite_fruit',
          label: 'Favorite Fruit',
          sortable: true
        },
        {
          key: 'preferences.favorite_color',
          label: 'Favorite Color',
          sortable: true
        },
        {
          key: 'preferences.favorite_movie',
          label: 'Favorite Movie',
          sortable: true
        }
      ],
      items: [],
      filter: '',
      rows: 0,
      personne_selection: {

      }
    }
  },
  methods: {
    async Jsonlist () {
      let url = 'https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7'
      fetch(url)
        .then((dataJson) => dataJson.json())
        .then((data) => {
          this.items = data.people
          this.rows = this.items.length
        })
    },
    onrowclicked (index, row) {
      this.personne_selection = index
      console.log('index:', index)
      console.log('row:', row)
      onclick('v-b-toggle.collapse-1')
    },
    onFiltered (filteredItems) {
      this.rows = filteredItems.length
      this.currentPage = 1
    },
    routeToGraphique () {
      this.$router.push({name: 'Graphique', params: {items: this.items}})
    }
  },
  beforeMount () {
    this.Jsonlist()
  }
}
</script>
