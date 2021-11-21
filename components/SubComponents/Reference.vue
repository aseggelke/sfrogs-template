<template>
  <div>
    <div class="text-center text-lg text-white pt-16">
      <div class="px-16">
        {{ headline }}
      </div>
      <div class="pt-4 relative">
        <img src="../../assets/images/iphone.png" class="m-auto" alt="iphone"/>
        <img :src="require('@/assets/images/'+image+'.png')" class="absolute top-12 m-auto left-0 right-0 w-32 h-56" alt="website"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reference",
  props: {
    image: {
      type: String,
      required: true,
      default: ''
    },
    headline: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
