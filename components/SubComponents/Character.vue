<template>
  <div class="mt-10">
    <img :src="require('@/assets/images/'+imageName+'.png')" class="w-50 h-44 m-auto" alt="fotos"/>
    <div v-observe-visibility="{callback: visibilityChanged,throttle: 600,}" :class="'bg-'+bgColor" class="lg:hidden mx-4 rounded-xl border-white shadow-lg border-2">
      <div class="px-5 pt-2 pb-2 text-white text-center">
        <p @click="isVisible = !isVisible " class="font-semibold text-lg">{{ name }}</p>
        <CollapseTransition>
          <div v-show="isVisible" class="font-light">
            <p :class="bgColor === 'yellow'? 'text-orange' :'text-yellow'" class="pt-4">Alter</p>
            <p>{{ age }} Jahre</p>
            <p :class="bgColor === 'yellow'? 'text-orange' :'text-yellow'" class="pt-4">Ausbildung</p>
            <p>Bachelor Medieninformatik</p>
            <p :class="bgColor === 'yellow'? 'text-orange' :'text-yellow'" class="pt-4">Interessen</p>
            <p class="pb-2">{{ interests }}</p>
          </div>
        </CollapseTransition>
      </div>
    </div>
        <div class="hidden lg:block mx-4 rounded-xl border-white shadow-lg border-2" :class="'bg-'+bgColor">
          <div class="font-light px-5 pt-2 pb-2 text-white text-center">
            <p class="font-semibold text-lg">{{ name }}</p>
            <p :class="bgColor === 'yellow'? 'text-orange' :'text-yellow'" class="pt-4">Alter</p>
            <p>{{ age }} Jahre</p>
            <p :class="bgColor === 'yellow'? 'text-orange' :'text-yellow'" class="pt-4">Ausbildung</p>
            <p>Bachelor Medieninformatik</p>
            <p :class="bgColor === 'yellow'? 'text-orange' :'text-yellow'" class="pt-4">Interessen</p>
            <p class="pb-2">{{ interests }}</p>
          </div>
        </div>
  </div>
</template>

<script>

import {CollapseTransition} from "@ivanv/vue-collapse-transition"

export default {
  name: "Character",
  components: {CollapseTransition},
  data() {
    return {
      isVisible: false
    }
  },
  props: {
    bgColor: {
      type: String,
      required: true,
      default: ''
    },
    imageName: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    age: {
      type: Number,
      required: true,
      default: 0
    },
    interests: {
      type: String,
      required: true,
      default: ''
    },
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible
    },
  }
}
</script>
