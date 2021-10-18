<template>
  <div class="bg-dark-gray text-white flex text-sm justify-between mt-10 py-2 px-4">
  <div class="flex flex-col">
    <div class="flex">
  <span>Made by web-sm</span>
    </div>
  <span>© 2021 Betreuungsbüro Vianden-Klees</span>
  </div>
    <div class="flex flex-col">
      <NuxtLink to="/Impressum">Impressum</NuxtLink>
      <NuxtLink to="/Datenschutz">Datenschutz</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>
