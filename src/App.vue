<template>
<div class="w-full justify-items-center p-10">
  <plateNumber class="max-w-96" />
</div>
</template>

<script>
import plateNumber from './components/plate-number.vue'

export default {
  name: 'App',
  components: {
    plateNumber
  }
}
</script>
