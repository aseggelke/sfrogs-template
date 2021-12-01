<template>
  <div>
    <div class="text-center text-lg text-white">
      <div class="px-12 text-xl">
        {{ headline }}
      </div>
      <div class="mt-28 grow lg:hidden" ref="image">
        <a :href="link">
          <img :src="require('@/assets/images/iphone-'+image+'.png')" class="m-auto" alt="website"/>
        </a>
      </div>
      <div class="mt-12 hidden lg:block">
        <a :href="link">
          <img :src="require('@/assets/images/iphone-'+image+'.png')" class="m-auto h-100" alt="website"/>
        </a>
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
    },
    link: {
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
