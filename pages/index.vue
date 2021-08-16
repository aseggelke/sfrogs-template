<template>
  <div class="text-gray-500">
    <hero-image/>
    <intro/>
    <philosophy/>
    <my-work/>
    <career/>
  </div>
</template>

<script>
import HeroImage from "~/components/HeroImage";
import Intro from "@/components/Intro";
import Philosophy from "@/components/Philosophy";
import MyWork from "@/components/MyWork";
import Career from "@/components/Career";

export default {
  name: 'Startseite',
  components: {Career, MyWork, Philosophy, Intro, HeroImage},
}
</script>
