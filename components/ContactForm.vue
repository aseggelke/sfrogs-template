<template>
  <div class="px-9 xl:px-40 2xl:px-64">
    <SectionHeader headline="Worauf wartest du?" icon="letters" class="footer">
      <div class="text-center m-auto pt-8 pb-4">
        <p>Schick uns eine Nachricht und
          erzähle uns von deiner Idee oder
          stelle uns deine Frage!</p>
      </div>
      <div>
        <div class="flex flex-col py-10">
          <label for="name">Vor- und Nachname</label>
          <input id="name" class="border text-sm mt-2 rounded-xl border-yellow p-2" v-model="name" placeholder="Namen eingeben...">
          <label for="subject" class="pt-6">E-Mail Adresse</label>
          <input id="subject" class="border text-sm mt-2 rounded-xl border-yellow p-2" v-model="email" placeholder="E-Mail Adresse eingeben...">
          <label for="text" class="pt-6">Nachricht</label>
          <textarea id="text" class="border text-sm rounded-xl mt-2 h-40 border-yellow p-2" v-model="message"
                    placeholder="Nachricht eingeben..."></textarea>
        </div>
        <div :class="{'pointer-events-none opacity-30':isDisabled}" class="text-white rounded-xl bg-yellow py-2 text-center cursor-pointer m-auto w-40">
          <a
            href="mailto:info@web-sm.de"
            class="focus:outline-none">
            Fortfahren
          </a>
        </div>
      </div>
    </SectionHeader>
  </div>
</template>

<script>
import Reference from "~/components/SubComponents/Reference";
import SectionHeader from "~/components/SubComponents/SectionHeader";

export default {
  name: "ContactForm",
  components: {
    Reference,
    SectionHeader
  },
  data() {
    return {
      name: '',
      email: '',
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

<style>
  .footer .vue-typer .custom.char.typed {
    color: #505050;
    font-size: 1.3em;
  }
</style>
