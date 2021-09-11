<template>
  <div>
    <div class="py-12 px-7 lg:px-40">
      <div class="mb-9 text-center">
        <h2>
          Willkommen auf meiner Website
        </h2>
        <hr class="border-b border-gray-400 w-20 m-auto mt-1"/>
      </div>
      <p>
        Mein Name ist Simone Vianden-Klees und ich bin hauptberufliche Betreuerin. <br><br>
        Viele Menschen erschrecken, wenn sie „Vormund“ oder „Betreuer“ hören.
        Dabei sind Angst und Sorge völlig unbegründet.<br><br>
        Betreuung ist nicht Bevormundung, sondern
        Hilfe in schwierigen Momenten des Lebens.
        Deshalb unterstütze ich meine Klienten als
        Ansprechpartnerin in verschiedenen Bereichen und
        in Zusammenarbeit mit anderen Helfern.
      </p>
    </div>
    <div id="berufsberater" class="text-white image">
      <div class="bg-gray-500 bg-opacity-80 pb-16 pt-8 px-7 lg:px-40">
        <div class="relative">
          <div class="mb-9 text-center">
            <h2>
              Was macht ein Berufsbetreuer?
            </h2>
            <hr class="border-b border-white w-20 m-auto mt-1"/>
          </div>
          <p class="lg:text-center">Betreuung ist nicht Bevormundung, sondern
            Hilfe in schwierigen Momenten des Lebens.
            Deshalb unterstütze ich meine Klienten als
            Ansprechpartnerin in verschiedenen Bereichen und
            in Zusammenarbeit mit anderen Helfern.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
}
</script>

<style scoped>
.image {
  background: url('../assets/images/hand.jpeg');
  background-size: cover;
}
</style>
