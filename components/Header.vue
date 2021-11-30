<template>
  <section class="sh1" id="pageHeaderDefault">
    <w-flex :style="`${variableMargin} ${variablePadding}`" class="navBar">
      <Logo />
      <div class="grow" />

      <Navbar v-if="!$waveui.breakpoint.xs" />
      <button
        class="invisibleButton"
        v-else
        @click="openMobileMenu = !openMobileMenu"
      >
        <w-icon xl color="primary">mdi mdi-menu</w-icon>
      </button>

      <w-drawer v-model="openMobileMenu" top absolute>
        <w-flex :style="`${variableMargin} ${variablePadding}`">
          <Navbar />
          <div class="grow" />
          <button class="invisibleButton" @click="openMobileMenu = false">
            <w-icon xl color="primary">mdi mdi-close</w-icon>
          </button>
        </w-flex>
      </w-drawer>
    </w-flex>
  </section>
</template>
<script>
export default {
  data() {
    return {
      openMobileMenu: false,
    };
  },
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

a:hover {
  color: #33408e;
  text-decoration: underline;
}
a {
  font-size: 1.1rem;
  line-height: 1.4;
  color: black;
}
.invisibleButton {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
.navBar {
  font-family: 'DMSans-Bold';
}

@media only screen and (max-width: 600px) {
  a {
    font-size: 1rem;
    line-height: 1.4;
  }
}
</style>
