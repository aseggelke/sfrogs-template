<template>
  <div class="bg-gray-light">
    <div>
      <h4 class="text-center pt-2">
        WEBDESIGNER
      </h4>
      <div class="flex justify-center">
        <p class="pr-2 text-gray-dark">Marks</p>
        <p class="pr-2 text-gray-dark">&</p>
        <p class="text-gray-dark">Seggelke</p>
      </div>
      <div class="flex py-4 justify-center">
        <div class="flex">

          <Social color="orange" image="shield" caption="Impressum"/>
          <Social class="pl-4 md:pl-10 xl:pl-20" color="orange" image="email" caption="info@web-sm.de"/>
          <Social class="pl-4 md:pl-10 xl:pl-20"  color="orange" image="fingerprint" caption="Datenschutz"/>
        </div>
      </div>
      <div class="text-center justify-center bg-orange text-white text-xs py-1 flex">
        Made by web-sm
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
