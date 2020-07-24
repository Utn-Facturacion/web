<template lang="pug">
  main
    utnHeader
    .section
      .columns
        .column.is-2
          left-bar

        .column
          router-view
</template>

<script>
import utnHeader from '@/components/layout/Header'
import LeftBar from '@/components/layout/LeftBar'

export default {
  components: { utnHeader, LeftBar }
}
</script>
