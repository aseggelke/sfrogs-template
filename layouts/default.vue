<template>
  <div>
    <div class="pb-5">
      <Header />
    </div>
    <GridWidth>
      <Nuxt />
    </GridWidth>
    <Footer />
  </div>
</template>

<script>
import GridWidth from "~/components/grid_width/GridWidth";
import Header from "~/components/menu/Header";
import Footer from "~/components/menu/Footer";

export default {
  name: 'Default',
  components: {GridWidth, Header, Footer},
}
</script>
