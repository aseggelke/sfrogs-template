<template>
  <div>
    <HeroImage/>

    <Footer/>
  </div>
</template>

<script>
import HeroImage from "@/components/Hero";

import Footer from "@/components/Footer";

export default {
  name: 'Startseite',
  components: {Footer, HeroImage},
}
</script>
