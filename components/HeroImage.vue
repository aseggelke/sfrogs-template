<template>
  <div class="h-screen relative">
    <img src="../assets/images/heroImage.jpg" class="image" alt="Image">
    <div>
      <h1 class="absolute text-center top-24 text-white left-1/2 headline">Betreuungsbüro Vianden-Klees</h1>
    </div>
    <div @click="openContact" :class="{'w-52': isOpended}" class="duration-500 cursor-pointer absolute bg-gray-400 bg-opacity-80 right-0 bottom-36 w-14 h-28">
      <img class="pt-5 pl-4" src="../assets/images/phone-call.png" alt="Image">
      <img class="pt-5 pl-4" src="../assets/images/mail.png" alt="Image">
    </div>
    <div  class="cursor-pointer" @click="scrollToNextElement">
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
  name: "HeroImage",
  data() {
    return {
      isOpended: false,
    }
  },
  methods: {
    scrollToNextElement() {
      window.scrollTo({ top: window.innerHeight, left: 0, behavior: 'smooth' })
    },
    openContact() {
      this.isOpended = !this.isOpended
    }
  }
}
</script>

<style scoped>
.image {
  object-fit: cover;
  @apply h-screen w-screen;
}
.headline{
  transform: translate(-50%, -50%);
}
.arrow:after {
  content: '';
  @apply absolute transition-transform duration-300 ease-in-out border-solid border-b-4 border-l-4 inline-block transform;
  width: 70%;
  height: 70%;
  transform: translateY(-12%) rotate(-45deg);
  filter: drop-shadow(0 0 2px #000);
}
</style>
