<template>
  <div class="mt-3">
    <b-table striped hover
        id="people-table"
        ref="peopleTable"
        :per-page="perPage"
        :current-page="currentPage"
        :items="items"
        :fields="fields"
        small
        dark
        bordered
        @row-clicked="onrowclicked">
    </b-table>

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
          key: 'id',
          sortable: true
        },
        {
          key: 'lastname',
          sortable: true
        },
        {
          key: 'firstname',
          sortable: true
        },
        {
          key: 'gender',
          sortable: true
        },
        {
          key: 'preferences',
          sortable: true
        }
      ],
      items: [],
      personne_selection: {

      }
    }
  },
  methods: {
    async Jsonlist () {
      let url = 'https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7'
      fetch(url)
        .then((dataJson) => dataJson.json())
        .then((data) => (this.items = data.people))
    },
    onrowclicked (index, row) {
      this.personne_selection = index
      console.log('index:', index)
      console.log('row:', row)
      onclick('v-b-toggle.collapse-1')
    }
  },
  beforeMount () {
    this.Jsonlist()
  },
  computed: {
    rows () {
      return this.items.length
    }
  }
}
</script>
