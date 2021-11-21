<template>
    <div class="pt-10 pb-24">
      <div class="m-auto bg-white h-24 w-24 mb-3 shadow-lg rounded-full">
        <div class="h-14 w-14 m-auto pt-5">
          <img :src="require('@/assets/images/'+icon+'.png')" alt="brushes">
        </div>
      </div>
      <div v-observe-visibility="{callback: visibilityChanged,once: true,throttle: throttle,}"
           class="text-xl text-center">
        <vue-typer v-if="isVisible" :text="headline" :repeat="0"/>
      </div>
      <slot/>
  </div>
</template>

<script>
import {VueTyper} from 'vue-typer'
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

export default {
  name: "SectionHeader",
  data() {
    return {
      isVisible: false
    }
  },
  props: {
    throttle: {
      type: Number,
      required: false,
      default: 0
    },
    icon: {
      type: String,
      required: true,
      default: ''
    },
    headline: {
      type: String,
      required: true,
      default: ''
    }
  },
  components: {
    VueTyper,
  },
  methods: {
    visibilityChanged (isVisible) {
      this.isVisible = isVisible
    },
  }
}
</script>
