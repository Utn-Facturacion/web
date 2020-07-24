<template lang="pug">
  div
    .columns
      .column.is-9.is-offset-1
        .level
          .level-left
            .level-item
              h1.title Descripcion de Cuota
        form
          .field.is-horizontal
            .field-body
              .field
                .control
                  label.label Nombre
                  input.input(v-if="feeDescription.Matricula.Persona" type="text" v-model="feeDescription.Matricula.Persona.name" placeholder="Nombre" name="nombre" disabled)
              .field
                .control
                  label.label Apellido
                  input.input(type="text" v-model="feeDescription.Matricula.Persona.lastname" placeholder="Apellido" name="apellido" disabled)

          p.title.is-4 Matricula
          .field.is-horizontal
            .field-body
              .field
                .control
                  label.label Numero
                  input.input(type="text" v-model="feeDescription.Matricula.id" placeholder="numero" name="numero" disabled)
              .field
                .control
                  label.label Monto
                  input.input(type="text" v-model="feeDescription.Matricula.monto" placeholder="monto" name="monto" disabled)

          p.title.is-4(v-if="feeDescription.Matricula.Servicios.length !== 0") Servicios
          .field.is-horizontal(v-for="s in feeDescription.Matricula.Servicios")
            .field-body
              .field
                .control
                  label.label Nombre
                  input.input(type="text" v-model="s.nombre" placeholder="nombre" name="nombre" disabled)
              .field
                .control
                  label.label Monto
                  input.input(type="text" v-model="s.servicioMonto" placeholder="monto" name="monto" disabled)

          .field.is-horizontal
            .field-body
              .field
                .control
                  label.label Total Pagado
                  input.input(type="text" v-model="feeDescription.montoAbonado" placeholder="total" name="total" disabled)
              .field
                .control
                  label.label Total
                  input.input(type="text" v-model="feeDescription.montoCuota" placeholder="montoPagado" name="montoPagado" disabled)

</template>

<script>
import feeService from '@/services/fee'

export default {
  name: 'FeeDescription',
  data () {
    return {
      feeDescription: {}
    }
  },
  created () {
    this.getFeeDescription()
  },
  methods: {
    getFeeDescription () {
      const id = this.$route.params.id
      feeService.getFeeDescriptionById(id)
        .then(description => {
          console.log(description)
          this.feeDescription = description
        })
    }
  }
}
</script>

<style>

</style>
