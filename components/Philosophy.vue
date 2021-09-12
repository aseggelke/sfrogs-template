<template>
  <div id="philosophy">
    <div class="image pb-5 lg:flex">
      <img src="../assets/images/pilosophy.jpg" class="h-full w-1/3 hidden lg:block" alt="Bild">
      <div class="lg:bg-dark-gray lg:text-white 2xl:px-28 lg:px-10">
        <div class="text-center 2xl:pb-20 xl:pb-12">
          <h2 class="pt-4 lg:pt-8">
            Meine Philosophie
          </h2>
          <hr class="border-b border-dark-gray w-16 lg:w-32 m-auto mt-1 lg:border-white"/>
        </div>
        <div class="relative bg-dark-gray mt-44 lg:m-0 bg-opacity-80 lg:bg-transparent mx-3 pl-12 pr-5 pt-9 pb-5 text-white">
          <div class="absolute top-3 left-3 w-12 h-12">
            <img src="../assets/images/quote.png" alt="Image">
          </div>
          <p class="text-white italic">
            Die Würde aller Menschen steht im Mittelpunkt meiner Arbeit.
            Hierfür steht für mich ein harmonisches Miteinander zwischen meinen Klienten und allen Helfern im
            Vordergrund, die im besten Fall zur Verselbständigung führt. Oberste Priorität hat für mich das
            selbstbestimmte eigenständige Leben der Betreuten in einem bekannten Umfeld.
            Hierzu braucht es individueller Lösungsansätze für die unterschiedlichsten Probleme und Fragestellungen in
            deren Zentrum für mich jedoch immer der Mensch steht.<br><br>

            Gemeinsam nehmen wir jede Hürde.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "philosophy"
}
</script>

<style scoped>
.image {
  background: url('../assets/images/pilosophy.jpg');
  background-size: cover;
  @apply lg:bg-none;
}
</style>
