<template>
  <div>
      <Nuxt />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'Default',
  components: {},
  created () {
    AOS.init()
  }
}
</script>
<style>
h1{
  font-family: "Courier New",serif;
  @apply text-5xl md:text-8xl;

}
h2{
  @apply text-3xl md:text-6xl;
}
body{
  font-family: Courier,serif;
  @apply text-gray-dark leading-tight
}
</style>
