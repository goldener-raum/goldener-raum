<template>
  <section>
    <w-flex class="basis-zero">
      <CustomImage :filename="'goldener-raum-02.png'" />

      <div class="grow ma8" style="position: relative">
        <h2 class="headline mb8 ml8" style="font-size: 3rem">Trag dich ein!</h2>
        <NewSubscriber />
        <ListSubscribers />

        <Blob
          :background="'#f4bd51'"
          :left="50"
          :top="50"
          :animationTime="50"
          :blobShape="3"
        />
      </div>
    </w-flex>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
