<template>
  <div class="h-screen relative image">
    <div>
      <h1 class="text-center pt-20 lg:pt-16 text-white">Datenschutz</h1>
    </div>
    <div class="hidden lg:block text-lg m-auto text-white">
    </div>
    <div class="cursor-pointer" @click="scrollToNextElement">
      <span class="
      absolute
      bottom-0
      left-1/2
      arrow
      w-12
      h-12
      animate-bounce
      "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Datenschutz",
  data() {
    return {
      isOpended: false,
      showDelayedElement: false,
    }
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
  @apply absolute transition-transform duration-300 ease-in-out border-solid border-white border-b-4 border-l-4 inline-block transform;
  width: 70%;
  height: 70%;
  transform: translateY(-12%) rotate(-45deg);
}

.image {
  background: url('../assets/images/heroImage.jpg');
  background-size: cover;
  @apply h-screen w-screen
}

@media only screen and (min-width: 1024px) {
  .image {
    background: url('../assets/images/hero2.png');
    background-size: cover;
  }
}
</style>
