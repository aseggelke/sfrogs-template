<template>
  <div class="h-screen relative image">
    <div class="pt-16 lg:pt-80 lg:pl-80">
      <h1 class="text-center text-gray-dark">
        <vue-typer text='WEBDESIGNER' :pre-type-delay='1000' :repeat="0"/>
      </h1>
      <div class="flex justify-center" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-delay="1800">
        <h2 class="pr-2 text-yellow">Seggelke</h2>
        <h2 class="pr-2 text-black">&</h2>
        <h2 class="text-orange">Marks</h2>
      </div>
    </div>
    <div @click="scrollToNextElement" class="
      absolute
      left-0
      right-0
      m-auto
      bottom-5
      arrow
      w-10
      h-10
      animate-bounce
      ">
    </div>
  </div>
</template>

<script>
import {VueTyper} from 'vue-typer'

export default {
  name: "HeroImage",
  components: {
    VueTyper,
  },
  methods: {
    scrollToNextElement() {
      window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'})
    },
  }
}
</script>

<style scoped>

.arrow:after {
  content: '';
  @apply transition-transform duration-300 ease-in-out border-solid border-black border-b-4 border-l-4 inline-block w-full h-full;
  transform: translateY(-12%) rotate(-45deg);
}

.image {
  @apply bg-hero lg:bg-hero-desktop;
  background-size: cover;
}

</style>
