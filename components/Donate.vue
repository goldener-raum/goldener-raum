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
          Den goldenen Raum unterstützen
        </h2>
        <p class="white py4 mb8 grow">
          Mindestens ein Promille vom eigenen Einkommen zahlen sowohl die
          Aktivist*innen als auch die Unterstützer*innen monatlich ein. Das
          können 30 Cent sein oder über 10 EUR - ganz auf Augenhöhe leisten alle
          ihren Beitrag zur solidarischen Unterstützung. Auch Einmalbeträge sind
          willkommen. Denn Geld ist ein soziales Gestaltungsmittel. Über
          Auszahlungen entscheidet die Kerngruppe gemeinschaftlich auf
          <a href="https://elinor.network" target="_blanc">elinor.network</a>
          .
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
      const minimumFontSize = 35;
      if (this.$waveui.breakpoint.width / 30 >= minimumFontSize) {
        return `font-size: ${this.$waveui.breakpoint.width / 30}px;`;
      }
      return `font-size: ${minimumFontSize}px;`;
    },
  },
};
</script>

<style scoped>
a {
  color: white;
}
</style>
