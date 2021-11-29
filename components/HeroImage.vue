<template>
  <div class="h-screen relative image">
    <div>
      <h1 class="text-center pt-20 lg:pt-16 text-white">Betreuungsbüro Vianden-Klees</h1>
    </div>
    <div class="hidden lg:block text-lg m-auto text-white">
      <div>
        <ul class="flex justify-center pt-2 text-2xl">
          <li class="border-r-2 relative px-4 border-white cursor-pointer menu-point" @click="scrollToSection('berufsberater')">Der Beruf</li>
          <li class="border-r-2 relative px-4 border-white cursor-pointer menu-point" @click="scrollToSection('philosophy')">Meine Philosophie</li>
          <li class="border-r-2 relative px-4 border-white cursor-pointer menu-point" @click="scrollToSection('career')">Über mich</li>
          <li class="px-4 relative cursor-pointer menu-point" @click="scrollToSection('contact')">Kontakt</li>
        </ul>
      </div>
    </div>
    <div class="absolute bottom-10 hidden lg:block text-white">
      <div class="flex pb-4">
        <img class="mx-6 h-6 w-6" src="../assets/images/phone-call.png" alt="Image">
        <a class="hover:underline" href="tel:022623050390">02262 / 30 50 390</a>
      </div>
      <div class="flex">
        <img class="mx-6 h-6 w-6" src="../assets/images/mail.png" alt="Image">
        <span><a class="hover:underline" href="mailto:Info@Betreuung-Vianden-Klees.de">Info@Betreuung-Vianden-Klees.de</a></span>
      </div>
    </div>
    <div @click="openContact" :class="{'w-60': isOpended}"
         class="block lg:hidden text-white text-base duration-500 cursor-pointer absolute bg-dark-gray bg-opacity-80 right-0 bottom-36 w-14">
      <div class="flex">
        <img class="pt-5 pl-3 h-12" src="../assets/images/phone-call.png" alt="Image">
        <span v-if="showDelayedElement" class="pt-4 hover:underline text-center	w-full"><a href="tel:+49 213 193242">+49 213 193242</a></span>
      </div>
      <div class="flex pb-4">
        <img class="pt-5 pl-3 h-12" src="../assets/images/mail.png" alt="Image">
        <a v-if="showDelayedElement" class="hover:underline text-center" href="mailto:Info@Betreuung-Vianden-Klees.de">
          <span class="">vianden-klees@</span>
          <span class="">betreuungsbuero.de</span>
        </a>
      </div>
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
  name: "HeroImage",
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
    openContact() {
      this.isOpended = !this.isOpended
      if (this.isOpended) {
        setTimeout(() => {
          this.showDelayedElement = true
        }, 200)
      }
      this.showDelayedElement = false
    },
    scrollToSection(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
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
.menu-point{
   text-decoration: none;
}
.menu-point::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.menu-point:hover::before {
  transform: scaleX(0.5);
}

@media only screen and (min-width: 1024px) {
  .image {
    background: url('../assets/images/hero2.png');
    background-size: cover;
  }
}
</style>
