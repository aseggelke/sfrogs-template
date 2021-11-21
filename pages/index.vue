<template>
  <div>
    <HeroImage/>
    <Procedure/>
    <WhoAreWe/>
    <References/>
  </div>
</template>

<script>
import HeroImage from "@/components/Hero";
import Procedure from "@/components/Procedure";
import WhoAreWe from "@/components/WhoAreWe";
import References from "@/components/References";

export default {
  name: 'Startseite',
  components: {HeroImage, Procedure, WhoAreWe, References},
}
</script>
