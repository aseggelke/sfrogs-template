<template>
  <div class="bg-gray-light">
    <div>
      <h4 class="text-center pt-2">
        WEBDESIGNER
      </h4>
      <div class="flex justify-center">
        <p class="pr-2 text-yellow">Seggelke</p>
        <p class="pr-2">&</p>
        <p class="text-orange">Marks</p>
      </div>
      <div class="flex py-4 justify-center	">
        <div class="flex">
          <Social class="md:pl-10 xl:pl-20" color="yellow" image="email" caption="E-Mail"/>
          <Social class="pl-4 md:pl-10 xl:pl-20" color="yellow" image="social-media" caption="Sozial"/>
        </div>
        <div class="flex pl-4 md:pl-10 xl:pl-20">
          <Social color="orange" image="fingerprint" caption="Datenschutz"/>
          <Social class="pl-4 md:pl-10 xl:pl-20" color="orange" image="shield" caption="Impressum"/>
        </div>
      </div>
      <div class="text-center justify-center bg-gray-dark text-white text-xs py-1 flex">
        Made with <img src="../assets/images/heart.png" class="px-1" alt="herz"/> by web-sm
      </div>
    </div>
  </div>
</template>

<script>
import Reference from "~/components/SubComponents/Reference";
import SectionHeader from "~/components/SubComponents/SectionHeader";
import Social from "@/components/SubComponents/Social";

export default {
  name: "Footer",
  components: {
    Social,
    Reference,
    SectionHeader
  },
}
</script>
