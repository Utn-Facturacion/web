<template lang="pug">
    div
        h1.title Listado de Alumnos

        b-table(
            :data="students"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :default-sort-direction="defaultSortDirection"
            )

            template(slot-scope="props")
                b-table-column(field="id" label="Numero" width="40" sortable) {{ props.row.Matricula.id }}

                b-table-column(field="name" label="Nombre" sortable) {{ props.row.name }}

                b-table-column(field="lastname" label="Apellido" sortable) {{ props.row.lastname }}

                b-table-column(field="dni" label="Dni" sortable) {{ props.row.dni }}

                b-table-column(field="students" label="")
                  a.button.is-small.is-outlined.is-primary(@click="goToFee(props.row.Matricula.id)") Cuotas

                b-table-column(field="students" label="")
                  a.button.is-small.is-outlined.is-primary(@click="goToBill(props.row.id)") Aranceles

</template>

<script>
import studentService from '@/services/student'

export default {
  name: 'StudentList',
  data () {
    return {
      students: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 5
    }
  },
  created () {
    this.getAllStudents()
  },
  watch: {
  },
  methods: {
    getAllStudents () {
      studentService.getAll()
        .then(students => {
          console.log(students)
          this.students = students
        })
        .catch(err => {
          console.log(err)
        })
    },
    goToFee (i) {
      this.$router.push({ path: `/fee/${i}` })
    },
    goToBill (i) {
      this.$router.push({ path: `/bill/${i}` })
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
