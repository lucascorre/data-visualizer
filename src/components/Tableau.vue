<template>
  <div class="container">
    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table striped hover
        id="people-table"
        ref="peopleTable"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        small>
    </b-table>

    <div class="pagination justify-content-center">
        <b-pagination
        v-model="currentPage"
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
        }
      ],
      items: []
    }
  },
  methods: {
    async Jsonlist () {
      let url = 'https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7'
      fetch(url)
        .then((dataJson) => dataJson.json())
        .then((data) => (this.items = data.people))
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
