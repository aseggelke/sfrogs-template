<template>
  <div id="career">
    <div>
      <h2 class="pt-16 text-center">
        Ausbildung
      </h2>
      <hr class="border-b border-light-gray w-16 lg:w-32 m-auto mt-1"/>
    </div>
    <div class="px-20 padding pt-16 grid md:grid-cols-4 gap-8 text-white text-center">
      <div class="bg-dark-gray w-full flex flex-col pb-4 pt-2">
        <span class="italic">
          - 1983 -
        </span>
        <img src="../assets/images/charity.png" class="w-20 h-20 my-4 self-center" alt="Bild">
        <span>
          Ausbildung zur
          examinierten Altenpflegerin
        </span>
      </div>
      <div class="bg-dark-gray w-full flex flex-col pb-4 pt-2">
        <span class="italic">
          - 1988 -
        </span>
        <img src="../assets/images/businesswoman.png" class="w-20 h-20 my-4 self-center" alt="Bild">
        <span>
        Ausbildung zur Bürokauffrau
        </span>
      </div>
      <div class="bg-dark-gray w-full flex flex-col pb-4 pt-2">
        <span class="italic">
          - 2000 -
        </span>
        <img src="../assets/images/medicine.png" class="w-20 h-20 my-4 self-center" alt="Bild">
        <span>
        Selbstständige Kauffrau in der Medizintechnik
        </span>
      </div>
      <div class="bg-dark-gray w-full flex flex-col pb-4 pt-2">
        <span class="italic">
          - 2021 -
        </span>
        <img src="../assets/images/handshake.png" class="w-20 h-20 my-4 self-center" alt="Bild">
        <span>
        Berufsbetreuerin
        </span>
      </div>
    </div>
    <div class="pt-20 text-center">
      <div class="mb-8">
        Mitglied im Bundesverband der Berufsbetreuer/innen BdB
      </div>
      <img src="../assets/images/BdB.png" alt="bdb" class="m-auto">
      <div class="mt-8">
        Tätig für verschiedene Gerichte.
      </div>
    </div>
    <div class="image">
      <div class="text-white my-16 py-8 md:px-20 px-10 bg-dark-gray bg-opacity-80">
        <div class="mb-5 text-center">
          <h2>
            Besuchte Seminare
          </h2>
          <hr class="border-b border-light-gray w-16 lg:w-32 m-auto mt-1"/>
        </div>
        <ul class="pt-6 list-outside list-disc">
          <div class="lg:flex justify-between">
            <div>
              <li class="pb-4">
                Weiterbildung „gerichtliche Betreuung“
              </li>
              <li class="pb-4">
                Psychose/Schizophrenie
              </li>
              <li class="pb-4">
                Vermögenssorge
              </li>
              <li class="pb-4">
                Aktuelle Entwicklung im Betreuungsrecht
              </li>
            </div>
            <div>
              <li class="pb-4">
                Zivilprozess- und Vollstreckung
              </li>
              <li class="pb-4">
                Hilfsmittelschulung
              </li>
              <li class="pb-4">
                Intensiv-Seminar Datenschutzbeauftragte
              </li>
              <li class="pb-4">
                Seminare NLP
              </li>
            </div>
          </div>
          <div class="lg:py-12">
            <div class="pb-4 pt-6 -mx-3">
              Zu dem Thema „Gestörte Lebenslagen“ habe ich folgende Seminare besucht:
            </div>
            <li class="pb-4">
              „Der ganz normale Wahnsinn - Klient*innen mit Psychosen“
            </li>
            <li class="pb-4">
              „Wimmelbilder im Kopf - Autistische Klient*innen“
            </li>
            <li class="pb-4">
              „Nie genug - Klient*innen mit emotional-instabiler Persönlichkeitsstörung (Borderline)“
            </li>
            <li class="pb-4">
              „Unterstützte Entscheidungsfindung aus kommunikationspsychologischer Sicht“
            </li>
          </div>
        </ul>

        <p class="pt-4 -mx-3 lg:px-60">
          Als examinierte Altenpflegerin verbessere ich meine Arbeit durch Fort- und Weiterbildung und regelmäßigen
          fachlichen Austausch mit Kollegen.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Career"
}
</script>

<style scoped>
.image {
  background: url('../assets/images/saal.jpeg');
  background-size: cover;
}
</style>
