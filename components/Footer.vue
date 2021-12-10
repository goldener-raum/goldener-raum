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
      <b>
        <a class="mx2" style="text-decoration: underline" href="/datenschutz">
          Datenschutz
        </a>
      </b>

      <div class="mt4 mb2">
        <a
          href="https://de-de.facebook.com/DerGoldeneRaum/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-media"
        >
          <w-icon color="black" :style="`font-size: 2.5rem`">
            mdi mdi-facebook
          </w-icon>
        </a>
        <a
          href="https://de-de.facebook.com/DerGoldeneRaum/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-media"
        >
          <w-icon color="black" :style="`font-size: 2.5rem`">
            mdi mdi-instagram
          </w-icon>
        </a>
      </div>

      <p class="mt2 mb2">Kontakt: goldener-raum@gls.de</p>
    </w-flex>
    <!-- <div class="pa8" style="position: absolute: left: 0">
      <p class="py8" :style="$waveui.breakpoint.xs && 'font-size: 0.7rem'">
        Mit freundlicher Unterstützung:
      </p>
      <w-flex justify-start>
        <div style="width: 45%; max-width: 15rem">
          <w-image :ratio="163 / 500" :src="`/logos/gls-logo.png`" />
        </div>
        <div style="width: 45%; max-width: 15rem">
          <w-image :ratio="163 / 500" :src="`/logos/xbge-logo.png`" />
        </div>
      </w-flex>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.social-media:hover {
  text-decoration: none;
}

.social-media:hover i {
  color: #33408e;
}
</style>
