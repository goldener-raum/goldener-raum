<template>
  <section>
    <BlobSection :topAnimated="false">
      <Video />
    </BlobSection>
    <div class="width: 100%">
      <div
        style="margin-top: 7.5rem; margin-bottom: 5rem"
        :class="
          $waveui.breakpoint.sm || $waveui.breakpoint.xs
            ? 'sectionMarginMobile'
            : 'sectionMarginDesktop'
        "
      >
        <h2 class="headline pb8" :style="getFontSize">
          Das Gold der Selbstwirksamkeit
        </h2>

        <w-flex basis-zero>
          <div class="grow">
            <p class="py4 grow">
              Die Welt zu einem schöneren und nachhaltigeren Ort machen – dafür
              unterstützen sich Menschen gegenseitig hier im goldenen Raum.
              Manche sind als Aktivist*innen unterwegs, etwa für
              Klimagerechtigkeit oder für die Abschaffung der Obdachlosigkeit.
              Andere begleiten diese Aktivitäten mit ihrem Interesse.
              <br />
              Gemeinsam zahlen sie in einen Generationenfonds ein – jede Person
              mindestens ein Promille ihres Einkommens. Das können mal 30 Cent
              im Monat sein, oder auch 10 Euro und mehr. Über Auszahlungen für
              die Aktivitäten wird gemeinschaftlich entschieden.
            </p>
          </div>
          <div
            v-if="
              !$waveui.breakpoint.xs &&
              !$waveui.breakpoint.sm &&
              !$waveui.breakpoint.md
            "
            class="grow"
          />
        </w-flex>
      </div>
      <div class="grow">
        <CustomImage :filename="'goldener-raum-01.png'" />
      </div>
    </div>
  </section>
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

<style scoped></style>
