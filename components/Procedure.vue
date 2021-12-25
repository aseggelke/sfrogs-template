<template>
  <div class="bg-orange">
    <SectionHeader icon="paint-brush" headline="Was machen wir?" class="procedure">
      <div class="xl:px-40 2xl:px-64">
        <div class="lg:flex">
        <Actionbox
          class="lg:flex-1"
          headline="Erstellung einer auf Sie zugeschnittenen Website"
          icon="target">
          <template #text>
            <p>Wir finden zusammen die Anforderungen für Ihre Website heraus um einen Webauftritt zu erstellen, der
              genau
              zu <span class="text-yellow">Ihnen und Ihren Vorstellungen passt</span>.</p>
          </template>
        </Actionbox>
        <Actionbox
          class="lg:flex-1"
          headline="Optimierter Webauftritt für alle Endgeräte"
          icon="tv">
          <template #text>
            <p>Bei der Erstellung der  Website verwenden wir einen sogenannten <span class="text-yellow">Mobile-First-Ansatz</span>,
              wodurch bei der
              Gestaltung der Website ein besonderer Wert auf mobile Geräte gesetzt wird.</p>
          </template>
        </Actionbox>
        </div>
        <div class="lg:flex">
        <Actionbox
          class="lg:flex-1"
          headline="Nutzung neuster Techniken und Entwicklungstools"
          icon="tool">
          <template #text>
            <p>Wir verwenden Werkzeuge und Techniken die auch bei <span class="text-yellow">großen Werbeagenturen</span>
              benutzt werden und bleiben durch
              den Kontakt zur Arbeitswelt immer auf dem neusten Stand</p>
          </template>
        </Actionbox>
        <Actionbox
          class="lg:flex-1"
          headline="Iteraktive Entwicklung und Kommunikation"
          icon="circle">
          <template #text>
            <p>Eine gute Website entsteht nicht beim ersten Versuch. Nur durch <span class="text-yellow">wiederholtes verfeinern und verbessern</span>
              erreicht man ein optimales Ergebnis. </p>
          </template>
        </Actionbox>
        </div>
      </div>
    </SectionHeader>
  </div>
</template>

<script>
import Actionbox from "~/components/SubComponents/Actionbox";
import SectionHeader from "~/components/SubComponents/SectionHeader";

export default {
  name: "Procedure",
  components: {
    Actionbox,
    SectionHeader,
  },
}
</script>

<style>
  .procedure .vue-typer .custom.char.typed {
    color: #fff;
    font-size: 1.3em;
  }
</style>
