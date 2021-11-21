<template>
  <div class="bg-gradient-to-t to-orange via-gray from-yellow">
    <SectionHeader headline="Wer sind wir?" icon="friends">
      <div>
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
