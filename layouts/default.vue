<template>
  <w-app>
    <div v-if="!showMaintenance">
      <div v-if="isReady">
        <Header id="stickyHeader" />
        <main class="grow">
          <Nuxt />
        </main>
        <Footer />
      </div>
    </div>
    <w-flex justify-center v-else style="background: #f4bd51">
      <div style="margin-top: 40vh" class="text-center">
        <h1>Hier entsteht die Website des goldenen Raumes</h1>
        <h2>Schau gerne bald wieder vorbei!</h2>
      </div>
    </w-flex>
  </w-app>
</template>

<script>
import '~/style/global-layout.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default {
  mounted() {
    this.isReady = true;
    if (window) {
      if (window.location.origin === 'https://www.goldenerraum.de') {
        this.showMaintenance = true;
      }
    }
  },
  data() {
    return {
      isReady: false,
      showMaintenance: false,
    };
  },
};
</script>

<style scoped>
#stickyHeader {
  background: white;
  height: 3.25rem;
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
