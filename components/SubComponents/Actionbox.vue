<template>
  <div class="bg-white mx-4 mt-10 rounded-xl shadow-lg" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="400">
    <div class="px-5 pt-8 pb-6">
      <div class="flex">
      <p class="font-semibold pb-6">{{ headline }}</p>
      <img :src="require('@/assets/images/'+icon+'.png')" class="w-14 h-14 -mt-3" alt="icon"/>
      </div>
      <div class="font-light">
        <slot name="text"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Actionbox",
  props: {
    headline: {
      type: String,
      required: true,
      default: ''
    },
    icon: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
