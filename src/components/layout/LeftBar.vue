<template lang="pug">
  aside.menu
    p.menu-label General
    ul.menu-list
      li
        router-link(to="/") Dashboard

    p.menu-label Alumnos
    ul.menu-list
      li
        a Administrar Alumnos
        ul
          li
            router-link(to="/students") Listado de Alumnos

</template>

<style lang="scss" scoped>
  .router-link-active {
    background-color: rgb(234, 219, 137);
    color: rgb(48, 98, 93);
  }
</style>
