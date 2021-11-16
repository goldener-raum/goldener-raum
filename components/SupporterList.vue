<template>
  <section style="margin-top: 10rem; margin-bottom: 10rem; position: relative">
    <Blob :background="'#f4bd51'" :right="-30" :top="-10" :animationTime="50" />
    <w-flex class="basis-zero">
      <w-image
        class="grow ma8"
        :src="`${$config.baseUrl}/landingpage/goldener-raum-02.png`"
      />
      <div class="grow ma8">
        <h2 class="headline mb8 ml8" style="font-size: 3rem">Trag dich ein!</h2>
        <NewSubscriber />
        <ListSubscribers />
      </div>
    </w-flex>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
