<template>
  <div class="pt-10 padding md:px-16 px-7" id="contact">
    <div class="mb-5 text-center">
      <h2>
        Kontaktieren Sie mich!
      </h2>
      <hr class="border-b border-light-gray w-16 lg:w-32 m-auto mt-1"/>
    </div>
    <p>Alternativ zu den oben angegebenen Kontaktdaten
      können Sie mir auch gerne direkt über das folgende
      Kontaktformular schreiben.
    </p>
    <div class="flex flex-col py-10">
      <label>Vor- und Nachname</label>
      <input class="border-2 p-2" v-model="name" placeholder="Bitte den Vor und Nachnamen eingeben">
      <label class="pt-6">Betreff</label>
      <input class="border-2 p-2" v-model="subject" placeholder="Bitte den Betreff eingeben">
      <label class="pt-6">Nachricht</label>
      <textarea class="border-2 p-2" v-model="message"
                placeholder="Bitte ihre Frage oder Nachricht eingeben"></textarea>
    </div>
    <div :class="{'pointer-events-none opacity-30':isDisabled}" class="text-white bg-dark-gray py-2 text-center cursor-pointer m-auto w-40 mb-10">
      <a
         :href="'mailto:Info@Betreuung-Vianden-Klees.de?subject=Von ' + name+' Betreff:' +subject +'&body='+message"
         class="focus:outline-none">
        Fortfahren
      </a>
    </div>
    <div class="text-center">(Hinweis: Beim klicken auf „Fortfahren“
      wird Ihr E-Mail Programm geöffnet)</div>

  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      subject: '',
      message: '',
    }
  },
  computed: {
    isDisabled() {
      return this.name === '' || this.subject === '' || this.message === ''
    }
  },
}
</script>
