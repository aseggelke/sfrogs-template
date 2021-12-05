<template>
  <div class="relative h-screen w-screen">
    <lazy-background :placeholder="require('@/assets/images/'+file)" class="hidden lg:block"
                     :src="require('@/assets/images/'+lowResFile)" no-ratio>
      <div slot="content" class="h-screen">
        <slot/>
      </div>
    </lazy-background>
    <lazy-background @onLoad="onLoad" :placeholder="require('@/assets/images/'+lowResFileMobile)"
                     class="block lg:hidden"
                     :src="require('@/assets/images/'+fileMobile)" no-ratio>
      <div slot="content" class="h-screen">
        <slot/>
      </div>
    </lazy-background>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLazyImageLoading from 'vue-lazy-image-loading'

Vue.use(VueLazyImageLoading)
export default {
  name: "LazyLoad",
  props: {
    file: {
      type: String,
      required: true,
    },
    lowResFile: {
      type: String,
      required: true,
    },
    fileMobile: {
      type: String,
      required: true,
    },
    lowResFileMobile: {
      type: String,
      required: true,
    }
  },
  methods: {
    onLoad() {
      setTimeout(()=> {
        console.log('jetzt')
        this.$store.dispatch("setImageLoaded")
      }, 1000);

    },
  }
}
</script>
