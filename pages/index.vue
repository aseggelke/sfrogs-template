<template>
  <div>
    <HeroImage/>
    <Procedure/>
    <WhoAreWe/>
    <References/>
    <ContactForm/>
    <Footer/>
  </div>
</template>

<script>
import HeroImage from "@/components/Hero";
import Procedure from "@/components/Procedure";
import WhoAreWe from "@/components/WhoAreWe";
import References from "@/components/References";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default {
  name: 'Startseite',
  components: {ContactForm, Footer, HeroImage, Procedure, WhoAreWe, References},
}
</script>
