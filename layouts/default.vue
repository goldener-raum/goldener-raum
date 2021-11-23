<template>
  <w-app id="app">
    <section v-if="isReady">
      <Header id="stickyHeader" />
      <main class="grow">
        <Nuxt />
      </main>
    </section>
    <w-spinner
      fade
      color="amber"
      style="min-heigth: 100vh; margin-top: 25vh"
      :size="500"
      v-else
    />
  </w-app>
</template>

<script>
import '~/style/global-layout.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default {
  mounted() {
    setTimeout(() => {
      this.isReady = true;
    }, 1);
  },
  data() {
    return {
      isReady: false,
    };
  },
};
</script>

<style scoped>
#stickyHeader {
  background: white;
  height: 3.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 20;
}
</style>
