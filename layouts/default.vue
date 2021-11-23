<template>
  <w-app id="app">
    <div v-if="isReady">
      <Header id="stickyHeader" />
      <main class="grow">
        <Nuxt />
      </main>
      <Footer />
    </div>
  </w-app>
</template>

<script>
import '~/style/global-layout.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default {
  mounted() {
    this.isReady = true;
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

@media only screen and (max-width: 600px) {
  #stickyHeader {
    height: 2.5rem;
  }
}
</style>
