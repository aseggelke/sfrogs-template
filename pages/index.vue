<template>
  <div class="text-gray-500">
    <Menu/>
    <hero-image/>
    <intro/>
    <my-work/>
    <philosophy/>
    <career/>
    <contact/>
  </div>
</template>

<script>
import HeroImage from "~/components/HeroImage";
import Intro from "@/components/Intro";
import Philosophy from "@/components/Philosophy";
import MyWork from "@/components/MyWork";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Menu from "@/components/menu";

export default {
  name: 'Startseite',
  components: {Contact, Career, MyWork, Philosophy, Intro, HeroImage, Menu},
}
</script>
