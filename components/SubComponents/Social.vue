<template>
  <div>
    <div class="m-auto bg-white h-10 w-10 shadow-lg border rounded-full" :class="'border-'+color">
      <div class="h-6 w-6 m-auto pt-1.5">
        <img :src="require('@/assets/images/'+image+'.png')" :alt="image">
      </div>
    </div>
    <p>{{caption}}</p>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: {
    image: {
      type: String,
      required: true,
      default: ''
    },
    caption: {
      type: String,
      required: true,
      default: ''
    },
    color: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
