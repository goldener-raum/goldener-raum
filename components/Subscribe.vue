<template>
  <section style="margin-top: 15rem; margin-bottom: 15rem; position: relative">
    <Blob
      :background="'#f4bd51'"
      :right="-70"
      :top="-50"
      :animationTime="50"
      :blobShape="2"
    />
    <w-flex class="basis-zero">
      <CustomImage :filename="'goldener-raum-02.png'" />
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
