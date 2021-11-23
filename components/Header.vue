<template>
  <section class="sh1" id="pageHeaderDefault">
    <w-flex
      :style="$waveui.breakpoint.xs ? 'padding: 0.5rem;' : 'padding: 0.9rem;'"
    >
      <!-- <p class="mx2">Der&nbsp;goldene&nbsp;Raum</p> -->
      <div class="grow" />
      <p class="mx2">Über&nbsp;uns</p>
      <p class="mx2">Unterstützen</p>
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
