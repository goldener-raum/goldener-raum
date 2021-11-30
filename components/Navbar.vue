<template>
  <w-flex
    :justify-end="!$waveui.breakpoint.xs"
    v-if="$nuxt.$route.path === '/'"
  >
    <a :class="`${mobileMenu ? 'ml4' : 'ml8'}`" href="/faq">FAQ</a>
    <a :class="`${mobileMenu ? 'ml4' : 'ml8'}`" href="#about">Über&nbsp;uns</a>
    <a :class="`${mobileMenu ? 'ml4' : 'ml8'}`" href="#support">Unterstützen</a>
  </w-flex>
  <w-flex :justify-end="!$waveui.breakpoint.xs" v-else>
    <a :class="`${$waveui.breakpoint.xs ? 'ml2' : 'ml8'}`" href="/">
      zurück zur Startseite
    </a>
  </w-flex>
</template>

<script>
export default {
  computed: {
    mobileMenu() {
      return this.$waveui.breakpoint.xs || this.$waveui.breakpoint.width < 700;
    },
  },
};
</script>

<style scoped></style>
