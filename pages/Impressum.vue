<template>
  <div>
    <HeroImageImpressum/>

    <div class="py-12 px-7 md:px-16 padding">
      <div class='pb-10'><h2>Impressum</h2>
        <p>Angaben gemäß § 5 TMG</p>
        <p>Florian Marks<br>
        <p>
          Braunstraße 15<br>
          50933 Köln<br>

        </p>
        <p><strong>Kontakt:</strong> <br>
          Telefon: 0176 72755862<br>
          E-Mail: <a href='mailto:info@web-sm.de'>info@web-sm.de</a></br></p><br>
        <p><strong>Haftungsausschluss: </strong><br><strong>Haftung für Inhalte</strong><br>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
          TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
          sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
          zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.<br><br><strong>Urheberrecht</strong><br>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
          dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
          werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.<br><br><strong>Datenschutz</strong><br>
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
    <Footer/>
  </div>
</template>

<script>
import HeroImageImpressum from "@/components/HeroImpressum";

import Footer from "@/components/Footer";

export default {
  name: 'Startseite',
  components: {Footer, HeroImageImpressum}
}
</script>

<style>
h2 {
  margin-bottom: 30px;
  font-size: 25px;
  font-family: "Courier",serif;
}
h3 {
  font-size: 20px;
  font-family: "Courier",serif;
}
h4 {
  font-size: 18px;
  font-style: italic;
}

p{
  font-family: "Courier New",serif;
  font-size: 18px;
}

li {
  list-style-type: circle;
  font-size: 18px;
  list-style-position: outside;
  margin-left: 30px;
  font-family: "Courier New",serif;
}

</style>
