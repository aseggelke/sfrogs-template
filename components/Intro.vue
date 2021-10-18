<template>
  <div>
    <div class="py-12 px-7 md:px-16 padding">
      <div class="mb-9 text-center">
        <h2>
          Willkommen auf meiner Website
        </h2>
        <hr class="border-b border-light-gray w-16 lg:w-32 m-auto mt-1"/>
      </div>
      <p class="lg:text-center">
        Mein Name ist Simone Vianden-Klees und ich bin hauptberufliche Betreuerin. <br><br>
        Viele Menschen erschrecken, wenn sie „Vormund“ oder „Betreuer“ hören.
        Dabei sind Angst und Sorge völlig unbegründet.<br>
        Betreuung ist nicht Bevormundung, sondern
        Hilfe in schwierigen Momenten des Lebens.
        Deshalb unterstütze ich meine Klienten als
        Ansprechpartnerin in verschiedenen Bereichen und
        in Zusammenarbeit mit anderen Helfern.
      </p>
    </div>
    <div id="berufsberater" class="text-white image">
      <div class="bg-dark-gray bg-opacity-80 md:px-16 pb-16 pt-8 px-7 padding">
        <div class="relative">
          <div class="mb-9 text-center">
            <h2>
              Was macht ein Berufsbetreuer?
            </h2>
            <hr class="border-b border-white lg:w-32 w-16 m-auto mt-1"/>
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
@media only screen and (min-width: 560px) {
  .image {
    background: url('../assets/images/hand2.jpeg');
    background-size: cover;
  }
}
@media only screen and (min-width: 1400px) {
  .image {
    background: url('../assets/images/hand3.jpeg');
    background-size: cover;
  }
}
</style>
