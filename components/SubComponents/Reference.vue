<template>
  <div>
    <div class="text-center text-lg text-white">
      <div class="px-12 text-xl">
        {{ headline }}
      </div>
      <div class="mt-28 grow" ref="image">
          <img :src="require('@/assets/images/iphone-'+image+'.png')" alt="website"/>
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
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
    handleScroll(){
      if(this.$refs.image.getBoundingClientRect().top<350 ){
        this.$refs.image.style= ' transform: scale(1); margin: 3rem'
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }
}
</script>
<style>

.grow{
  transition: all 0.5s ease-in-out;
  transform: scale(1.3)
}

</style>
