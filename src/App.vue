<template>
  <div>
    <header-item/>

    <div class="container">
        <statement-item/>
    </div>
  </div>
</template>

<script>
import Statement from './views/Statement.vue'
import Header from './views/layouts/Header.vue'
export default {
  components: {
   'statement-item': Statement,
   'header-item': Header
  },
    data() {
      return {
        
      }
    },

}
</script>

<style>

</style>
