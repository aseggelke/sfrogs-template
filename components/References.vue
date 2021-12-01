<template>
  <div class="bg-gradient-to-t to-yellow via-yellow from-white">
    <SectionHeader headline="Unsere Referenzen" icon="prasentation" :throttle="200">
      <div class="pt-12 -mb-10 lg:flex justify-center">
          <Reference headline="Praxis für Osteopathie Bärbel Schenk" image="schenk" link="https://www.schenk-osteopathie.de/"/>
          <Reference headline="Betreuungsbüro Vianden-Klees" image="kremer" link="https://www.betreuung-vianden.de/"/>
      </div>
    </SectionHeader>
  </div>
</template>

<script>
import Reference from "~/components/SubComponents/Reference";
import SectionHeader from "~/components/SubComponents/SectionHeader";

export default {
  name: "References",
  components: {
    Reference,
    SectionHeader
  },
}
</script>
