<template>
  <section class="sh1" id="pageHeaderDefault">
    <w-flex
      v-if="$nuxt.$route.path === '/'"
      :style="$waveui.breakpoint.xs ? 'padding: 0.5rem;' : 'padding: 0.9rem;'"
    >
      <!-- <p class="mx2">Der&nbsp;goldene&nbsp;Raum</p> -->
      <div class="grow" />
      <a class="mx2" href="#about">Über&nbsp;uns</a>
      <a class="mx2" href="#support">Unterstützen</a>
    </w-flex>
    <w-flex
      v-else
      :style="$waveui.breakpoint.xs ? 'padding: 0.5rem;' : 'padding: 0.9rem;'"
    >
      <!-- <p class="mx2">Der&nbsp;goldene&nbsp;Raum</p> -->
      <div class="grow" />
      <a class="mx2" href="/">zurück zur Startseite</a>
    </w-flex>
  </section>
</template>
<script>
export default {};
</script>
<style>
#pageHeaderDefault {
  border-bottom: 1px solid lightgrey;
  padding: 0.5rem;
}
</style>
