<template>
  <w-app id="app">
    <Header id="stickyHeader" />
    <main class="grow">
      <Nuxt />
    </main>
  </w-app>
</template>

<script>
import '~/style/global-layout.css';
import '@mdi/font/css/materialdesignicons.min.css';

export default {};
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
