<template lang="pug">
    div
        h1.title Listado de cuotas

        b-table(
            :data="fees"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            :row-class="(row) => { return getWarning(row) }"
            )

            template(slot-scope="props")
                b-table-column(field="id" label="Matricula" width="40" sortable) {{ props.row.MatriculaId }}

                b-table-column(field="mes" label="Mes" sortable) {{ props.row.mes }}

                b-table-column(field="anio" label="Año" sortable) {{ props.row.anio }}

                b-table-column(field="monto" label="Monto" sortable) {{ props.row.montoCuota }}

                b-table-column(field="monto" label="Monto Abonado" sortable) {{ props.row.montoAbonado }}

                b-table-column(field="fee" label="")
                  a.button.is-small.is-outlined.is-primary(@click="goToFeeDescription(props.row.id)") Detalle

</template>

<script>
import feeService from '@/services/fee'

export default {
  name: 'FeeList',
  data () {
    return {
      fees: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 5
    }
  },
  created () {
    this.getFeedsById()
  },
  watch: {
  },
  methods: {
    getWarning (row) {
      if (row.montoAbonado < row.montoCuota) {
        return true && 'is-danger'
      }
    },
    getFeedsById () {
      const id = this.$route.params.id
      feeService.getFeesById(id)
        .then(fees => {
          console.log(fees)
          this.fees = fees.Cuotas
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToFeeDescription (i) {
      this.$router.push({ path: `/fee/description/${i}` })
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
