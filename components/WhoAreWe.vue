<template>
  <div class="bg-gray">
    <SectionHeader headline="Wer sind wir?" icon="friends" class="whoarewe">
      <div class="lg:flex xl:px-40 justify-center">
        <Character image-name="flo" bg-color="orange" name="Florian Marks" :age="26"
                   interests="Design, User Experience, Softwareentwicklung"/>
        <Character image-name="aaron" bg-color="yellow" name="Aaron Seggelke" :age="24"
                   interests="Design, User Experience, Softwareentwicklung"/>
      </div>
    </SectionHeader>
  </div>
</template>

<script>
import Character from "~/components/SubComponents/Character";
import SectionHeader from "~/components/SubComponents/SectionHeader";

export default {
  name: "WhoAreWe",
  components: {
    Character,
    SectionHeader
  },
}
</script>
<style>
  .whoarewe .vue-typer .custom.char.typed {
    color: #505050;
    font-size: 1.3em;
  }
</style>
