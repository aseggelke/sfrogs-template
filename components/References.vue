<template>
  <div class="bg-gradient-to-t to-yellow via-yellow from-white">
    <SectionHeader headline="Unsere Referenzen" icon="prasentation" :throttle="300">
      <div>
          <Reference headline="Praxis für Osteopathie Bärbel Schenk" image="schenk"/>
          <Reference headline="Betreuungsbüro Vianden-Klees" image="kremer"/>
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
