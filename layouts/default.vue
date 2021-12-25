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
  @apply text-5xl md:text-7xl lg:text-8xl;

}
h2{
  font-family: "Courier New",serif;
  @apply text-3xl md:text-5xl lg:text-6xl;
}
h4{
  font-family: "Courier New",serif;
  @apply text-2xl md:text-3xl lg:text-4xl;
}
body{
  font-family: Courier,serif;
  @apply text-gray-dark leading-tight md:text-lg lg:text-xl
}
</style>
