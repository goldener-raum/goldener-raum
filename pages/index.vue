<template>
  <div>
    <Introduction style="margin-top: 5rem; margin-bottom: 10rem" />
    <WhoWeAre style="margin-bottom: 10rem" />

    <section
      style="margin-top: 15rem; margin-bottom: 10rem; position: relative"
    >
      <BlobBlue />
      <h2 class="headline mb12 ml8" style="font-size: 3rem">Unsere Projekte</h2>
      <Slider />
    </section>

    <section
      style="margin-top: 15rem; margin-bottom: 10rem; position: relative"
    >
      <BlobGoldRight />
      <h2 class="headline mb8 ml8" style="font-size: 3rem">Trag dich ein!</h2>
      <w-flex class="basis-zero">
        <NewSubscriber />
        <ListSubscribers />
      </w-flex>
    </section>
  </div>
</template>

<script>
export default {};
</script>
