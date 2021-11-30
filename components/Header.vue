<template>
  <section class="sh1" id="pageHeaderDefault">
    <w-flex
      v-if="$nuxt.$route.path === '/'"
      class="navBar"
      :style="`${variableMargin} ${variablePadding}`"
    >
      <!-- <p :class="`${$waveui.breakpoint.xs ? 'ml4' : 'ml8'}`">Der&nbsp;goldene&nbsp;Raum</p> -->
      <div class="grow" />
      <a :class="`${$waveui.breakpoint.xs ? 'ml4' : 'ml8'}`" href="/faq">FAQ</a>
      <a :class="`${$waveui.breakpoint.xs ? 'ml4' : 'ml8'}`" href="#about">
        Über&nbsp;uns
      </a>
      <a :class="`${$waveui.breakpoint.xs ? 'ml4' : 'ml8'}`" href="#support">
        Unterstützen
      </a>
    </w-flex>
    <w-flex
      v-else
      class="navBar"
      :style="`${variableMargin} ${variablePadding}`"
    >
      <!-- <p :class="`${$waveui.breakpoint.xs ? 'ml4' : 'ml8'}`">Der&nbsp;goldene&nbsp;Raum</p> -->
      <div class="grow" />
      <a :class="`${$waveui.breakpoint.xs ? 'ml4' : 'ml8'}`" href="/">
        zurück zur Startseite
      </a>
    </w-flex>
  </section>
</template>
<script>
export default {
  computed: {
    variableMargin() {
      const margin =
        this.$waveui.breakpoint.md ||
        this.$waveui.breakpoint.sm ||
        this.$waveui.breakpoint.xs
          ? `margin: 0 ${this.$waveui.breakpoint.width / 500}em;`
          : `margin: 0 ${this.$waveui.breakpoint.width / 150}em;`;
      return margin;
    },
    variablePadding() {
      const padding = this.$waveui.breakpoint.xs
        ? `padding: 0.5rem 0;`
        : `padding: 0.9rem 0;`;
      return padding;
    },
  },
};
</script>
<style>
#pageHeaderDefault {
  border-bottom: 1px solid lightgrey;
  padding: 0.5rem;
}
.navBar {
  font-family: 'DMSans-Bold';
}
a:hover {
  color: #33408e;
  text-decoration: underline;
}
</style>
