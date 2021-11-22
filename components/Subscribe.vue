<template>
  <section>
    <h2 class="headline mt12 mb4 mr8 text-right" style="font-size: 3rem">
      Trag dich ein!
    </h2>
    <w-flex
      class="basis-zero"
      :column="$waveui.breakpoint.sm || $waveui.breakpoint.md"
    >
      <div
        class="grow ma8"
        v-if="!($waveui.breakpoint.sm || $waveui.breakpoint.md)"
      >
        <CustomImage :filename="'goldener-raum-02.png'" />
      </div>

      <div class="grow" style="position: relative">
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
      <div
        class="grow ma8"
        v-if="$waveui.breakpoint.sm || $waveui.breakpoint.md"
      >
        <CustomImage :filename="'goldener-raum-02.png'" />
      </div>
    </w-flex>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
