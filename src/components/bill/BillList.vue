<template lang="pug">
    div
        h1.title Listado de Aranceles

        b-table(
            :data="bills"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            :row-class="(row) => { return getWarning(row) }"
            )

            template(slot-scope="props")
                b-table-column(field="codigo" label="Codigo" width="40" sortable) {{ props.row.id }}

                b-table-column(field="vencimiento" label="Vencimiento" sortable) {{ new Date(props.row.vencimiento).toLocaleDateString() }}

                b-table-column(field="total" label="Total" sortable) {{ props.row.total }}

                b-table-column(field="fee" label="")
                  a.button.is-small.is-outlined.is-primary(@click="goToBillDescription(props.row.id)") Detalle

</template>

<script>
import billService from '@/services/bill'

export default {
  name: 'BillsList',
  data () {
    return {
      bills: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 5
    }
  },
  created () {
    this.getBillsById()
  },
  methods: {
    getWarning (row) {
      if (!row.pagada) {
        return true && 'is-danger'
      }
    },
    getBillsById () {
      const id = this.$route.params.id
      billService.getbillsByStudent(id)
        .then(bills => {
          console.log(bills)
          this.bills = bills
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToBillDescription (i) {
      this.$router.push({ path: `/bill/description/${i}` })
    }
  }
}
</script>

<style lang="scss">
  tr.is-danger {
      background:red;
      // color: #fff;
  }
</style>
