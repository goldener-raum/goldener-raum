<template>
  <div
    style="margin-top: 5rem; margin-bottom: 5rem"
    :class="
      $waveui.breakpoint.sm || $waveui.breakpoint.xs
        ? 'sectionMarginMobile'
        : 'sectionMarginDesktop'
    "
  >
    <w-flex
      basis-zero
      :column="
        $waveui.breakpoint.xs || $waveui.breakpoint.sm || $waveui.breakpoint.md
      "
    >
      <div class="grow">
        <a name="support" class="anchorOffset"></a>
        <h2 class="headline mt8 mb4 mr8 white" :style="getFontSize">
          Werde Teil des goldenen Raumes.
        </h2>
        <p class="white py4 mb8 grow">
          Kurzer Erklärtext: Richte hier eine Dauerspende ein und trage dich
          unten ins goldene Buch ein, um deine Unterstützung auch öffentlich zu
          zeigen. Was bedeutet es? Warum 1 Promille?
        </p>
      </div>
      <div class="grow">
        <Twingle
          :class="{
            ma8:
              !$waveui.breakpoint.xs &&
              !$waveui.breakpoint.sm &&
              !$waveui.breakpoint.md,
          }"
        />
      </div>
    </w-flex>
  </div>
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
