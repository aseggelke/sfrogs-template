<template>
  <div>
    <div class="lg:hidden">
      <div class="cursor-pointer block absolute right-5 top-3 z-30" @click="menuOpen=!menuOpen">
        <div class="w-10 my-2 h-0.5 transition-all duration-300"
             :class="menuOpen? 'bg-black changedFirst': 'bg-white'"/>
        <div class="w-10 my-2 h-0.5 transition-all" :class="menuOpen? 'invisible': 'bg-white'"/>
        <div style="height:2px" class="w-10 my-2 transition-all duration-300"
             :class="menuOpen? 'bg-black changedLast': 'bg-white'"/>
      </div>
      <div class="z-20 bg-white w-full duration-500 ease-in-out text-center"
           :class="menuOpen? 'top-0 shadow-xl pt-14 h-64':'h-0 pt-0'">
        <ul>
          <li class="cursor-pointer border-b-2 border-t-2 py-2" @click="scrollToSection('berufsberater')"><h2>Der Beruf</h2></li>
          <li class="cursor-pointer border-b-2 py-2" @click="scrollToSection('philosophy')"><h2>Meine Philosophie</h2></li>
          <li class="cursor-pointer border-b-2 py-2" @click="scrollToSection('career')"><h2>Über mich</h2></li>
          <li class="cursor-pointer border-b-2 py-2" @click="scrollToSection('contact')"><h2>Kontakt</h2></li>
        </ul>
      </div>
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
      const el = document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
</script>
<style scoped>
.changedFirst {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.changedLast {
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
