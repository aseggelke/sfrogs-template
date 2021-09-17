<template>
  <Nuxt />
</template>

<script>

export default {
  name: 'Default',
}
</script>
<style>
h1{
  font-family: 'Avenir Next', sans-serif;
  font-size: 40px;
  line-height: 50px;
  @apply lg:text-6xl
}
h2{
  font-family: 'Avenir Next', sans-serif;
  font-size: 20px;
  @apply lg:text-4xl
}
html, body {
  font-family: 'Avenir', sans-serif;
  font-size: 15px;
  @apply text-dark-gray lg:text-lg;
}
li::marker{
  color: #C9C9C9;
}
@media only screen and (min-width: 1024px) {
  .padding {
    padding-left: 18vw;
    padding-right: 18vw;
  }
}

</style>
