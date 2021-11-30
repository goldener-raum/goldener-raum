<template>
  <w-flex
    :justify-end="!$waveui.breakpoint.xs"
    v-if="$nuxt.$route.path === '/'"
  >
    <a :class="`${mobileMenu ? 'ml4' : 'ml8'}`" href="/faq">FAQ</a>
    <a :class="`${mobileMenu ? 'ml4' : 'ml8'}`" href="#about">Über&nbsp;uns</a>
    <a :class="`${mobileMenu ? 'ml4' : 'ml8'}`" href="#support">Unterstützen</a>
  </w-flex>
  <a v-else :class="`${$waveui.breakpoint.xs ? 'ml2' : 'ml8'}`" href="/">
    zurück zur Startseite
  </a>
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
