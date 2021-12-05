<template>
  <div class="overflow-x-hidden">
    <hero-image/>
    <intro/>
    <my-work/>
    <philosophy/>
    <career/>
    <contact/>
    <Footer/>
  </div>
</template>

<script>
import HeroImage from "~/components/HeroImage";
import Intro from "@/components/Intro";
import Philosophy from "@/components/Philosophy";
import MyWork from "@/components/MyWork";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  name: 'Startseite',
  components: {Footer, Contact, Career, MyWork, Philosophy, Intro, HeroImage},
}
</script>
