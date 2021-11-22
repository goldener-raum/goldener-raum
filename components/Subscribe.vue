<template>
  <section style="padding: 4rem">
    <h2 class="headline mt12 mb4" :style="getFontSize">Trag dich ein!</h2>
    <w-flex
      class="basis-zero"
      :column="
        $waveui.breakpoint.xs || $waveui.breakpoint.sm || $waveui.breakpoint.md
      "
    >
      <div
        class="grow ma8"
        v-if="
          !(
            $waveui.breakpoint.xs ||
            $waveui.breakpoint.sm ||
            $waveui.breakpoint.md
          )
        "
      >
        <CustomImage :filename="'goldener-raum-02.png'" />
      </div>

      <div class="grow" style="position: relative">
        <NewSubscriber />
        <ListSubscribers />
      </div>
      <div
        class="grow ma8"
        v-if="
          $waveui.breakpoint.xs ||
          $waveui.breakpoint.sm ||
          $waveui.breakpoint.md
        "
      >
        <CustomImage :filename="'goldener-raum-02.png'" />
      </div>
    </w-flex>
  </section>
</template>

<script>
export default {
  computed: {
    getFontSize() {
      if (this.$waveui.breakpoint.width / 30 >= 25) {
        return `font-size: ${this.$waveui.breakpoint.width / 30}px;`;
      }
      return `font-size: 25px;`;
    },
  },
};
</script>

<style scoped></style>
