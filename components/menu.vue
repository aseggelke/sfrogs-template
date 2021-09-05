<template>
  <div>
    <div class="absolute right-5 top-3 z-30" @click="menuOpen=!menuOpen">
      <div class="w-10 my-2 h-0.5 transition-all duration-300" :class="menuOpen? 'bg-black changedFirst': 'bg-white'"/>
      <div  class="w-10 my-2 h-0.5 transition-all" :class="menuOpen? 'invisible': 'bg-white'"/>
      <div style="height:2px" class="w-10 my-2 transition-all duration-300" :class="menuOpen? 'bg-black changedLast': 'bg-white'"/>
    </div>
    <div class="absolute z-20 bg-white w-full duration-300 ease-in-out font-bold text-center pt-16 text-2xl" :class="menuOpen? 'top-0 shadow-xl':'-top-72'">
      <ul>
        <li class="border-2 py-2" @click="scrollToSection('berufsberater')">Der Beruf</li>
        <li class="border-b-2 py-2" @click="scrollToSection('philosophy')">Meine Philosophie</li>
        <li class="border-b-2 py-2" @click="scrollToSection('career')">Über mich</li>
        <li class="border-b-2 py-2" @click="scrollToSection('contact')">Kontakt</li>
      </ul>

    </div>
  </div>
</template>


<script>

export default {
  name: "menu",
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
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
.changedFirst{
  transform: rotate(-45deg) translate(-5px, 6px);
}
.changedLast{
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
