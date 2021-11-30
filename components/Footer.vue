<template>
  <div style="background: #ededed; padding: 2rem 0; position: relative">
    <w-flex column class="text-center">
      <b>
        <a class="mx2" style="text-decoration: underline" href="/faq">FAQ</a>
      </b>
      <b>
        <a class="mx2" style="text-decoration: underline" href="/impressum">
          Impressum
        </a>
      </b>
    </w-flex>
    <div class="pa8" style="position: absolute: left: 0">
      <p class="py8" :style="$waveui.breakpoint.xs && 'font-size: 0.7rem'">
        Mit freundlicher Unterstützung:
      </p>
      <w-flex justify-start>
        <div style="width: 45%; max-width: 20rem">
          <w-image :ratio="163 / 500" :src="`/logos/gls-logo.png`" />
        </div>
        <div style="width: 45%; max-width: 20rem">
          <w-image :ratio="163 / 500" :src="`/logos/xbge-logo.png`" />
        </div>
      </w-flex>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
