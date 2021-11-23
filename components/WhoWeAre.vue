<template>
  <section style="margin-bottom: 10rem">
    <div style="margin-top: 2.5rem; margin-bottom: 7.5rem">
      <div
        :class="
          $waveui.breakpoint.sm || $waveui.breakpoint.xs
            ? 'sectionMarginMobile'
            : 'sectionMarginDesktop'
        "
      >
        <w-flex basis-zero>
          <div
            class="grow"
            v-if="
              !$waveui.breakpoint.xs &&
              !$waveui.breakpoint.sm &&
              !$waveui.breakpoint.md
            "
          />
          <p class="grow">
            Wir organisieren uns in Gruppen und verfügen über ein gemeinsames
            Budget. Es geht um Potenzialentfaltung, um das Erleben von
            Selbstwirksamkeit und darum, mit Menschen aus anderen Herkünften und
            sozialen Hintergründen auf Augenhöhe in Verbindung zu kommen. Mit
            Blick auf die existenziellen Krisen erproben sie Geld als
            gemeinschaftliches Gestaltungsmittel.
          </p>
        </w-flex>
      </div>
    </div>
    <AnotherBlobSection :background="'#33408e'">
      <div
        style="margin-bottom: 5rem"
        :class="
          $waveui.breakpoint.sm || $waveui.breakpoint.xs
            ? 'sectionMarginMobile'
            : 'sectionMarginDesktop'
        "
      >
        <w-flex basis-zero>
          <div class="grow">
            <h2 class="headline mt8 mb4 mr8 white" :style="getFontSize">
              Tritt mit uns in Verbindung.
            </h2>
            <p class="white py4 grow">
              Ermöglicht wird dies durch Unterstützer*innen, die mindestens ein
              Promille ihres Einkommens monatlich einzahlen, genau so wie die
              Aktivist*innen - ganz auf Augenhöhe. Es gibt Kooperationen mit
              Karuna Sozialgenossenschaft, Elinor und der GLS Bank. Denn
              Ökologie und Solidarität gehören zusammen. Werde Teil des
              Generationsfonds und einer Community die zeigt: Es ist die
              Diversität, die uns stark macht.
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

      <Slider />
      <Donate />
    </AnotherBlobSection>
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
