<template>
  <div>
    <div class="h-screen relative image">
      <div>
        <h1 class="text-center pt-14 lg:pt-10 text-white">Impressum</h1>
      </div>
      <div class="text-lg m-auto text-white">
        <div>
          <div class="flex justify-center pt-2 text-2xl">
            <NuxtLink class="relative px-4 cursor-pointer menu-point" to="/">Zurück zur Startseite</NuxtLink>
          </div>
        </div>
      </div>
      <div class="cursor-pointer" @click="scrollToNextElement">
      <span class="
      absolute
      bottom-0
      left-1/2
      arrow
      w-12
      h-12
      animate-bounce
      "
      />
      </div>
    </div>
    <div class="py-12 px-7 md:px-16 padding">
      <div class='pb-10'><h2>Impressum</h2>
        <p>Angaben gemäß § 5 TMG</p>
        <p>Simone Vianden-Klees<br>Berufsbetreuer
        <p>
          Postfach 11 32<br>
          51655 Wiehl <br>

        </p>
        <p><strong>Kontakt:</strong> <br>
          Telefon: 02262 - 30 50 390<br>
          E-Mail: <a href='mailto:Info@Betreuung-Vianden-Klees.de'>Info@Betreuung-Vianden-Klees.de</a></br></p>
        <p><strong>Berufsbezeichnung:</strong><br>Berufsbetreuer<br></p>
        <p><strong>Aufsichtsbehörde:</strong><br>
          Oberbergischer Kreis<br>
          Der Landrat<br>
          Kreisjugendamt<br>
          Betreuungsstelle<br>
          Am Wiedenhof 9<br>
          51643 Gummersbach<br></p>
        <p><strong>Haftungsausschluss: </strong><br><br><strong>Haftung für Inhalte</strong><br><br>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
          TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
          sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
          zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
          dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br><br>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
          Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt
          dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
          nicht an Dritte weitergegeben. <br>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich. <br>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
          nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
          von Werbeinformationen, etwa durch Spam-Mails, vor.<br>
        </p>
        Website Impressum von <a href="https://www.impressum-generator.de">impressum-generator.de</a>
      </div>

      <div class="flex md:block flex-col">
        <NuxtLink
          class="p-3 md:mr-5 mb-5 text-center hover:bg-black hover:text-white border-4 border-solid border-black"
          to="/">Zurück Zur
          Startseite
        </NuxtLink>
        <NuxtLink class="p-3 hover:bg-black text-center hover:text-white border-4 border-solid border-black"
                  to="/Datenschutz">
          Datenschutz
        </NuxtLink>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Impressum",
  methods: {
    scrollToNextElement() {
      window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'})
    },
  }
}
</script>

<style scoped>

.arrow:after {
  content: '';
  @apply absolute transition-transform duration-300 ease-in-out border-solid border-white border-b-4 border-l-4 inline-block transform;
  width: 70%;
  height: 70%;
  transform: translateY(-12%) rotate(-45deg);
}

.image {
  background: url('../assets/images/datenschutz2.jpg');
  background-size: cover;
  @apply h-screen w-screen
}

p {
  margin-bottom: 15px;
}

h2 {
  margin-bottom: 20px;
}

.menu-point {
  text-decoration: none;
}

.menu-point::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.menu-point:hover::before {
  transform: scaleX(0.5);
}

@media only screen and (min-width: 1024px) {
  .image {
    background: url('../assets/images/datenschutz.jpg');
    background-size: cover;
  }
}
</style>
