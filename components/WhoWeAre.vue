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
            Für die Begegnung auf Augenhöhe kreieren wir immer wieder goldene
            Räume und laden Interessierte dazu ein. Es geht um
            Potenzialentfaltung, um das Erleben von Selbstwirksamkeit und darum,
            mit Menschen aus anderen Herkünften und sozialen Hintergründen in
            Verbindung zu kommen.
          </p>
        </w-flex>
      </div>
    </div>
    <BlobSection :background="'#33408e'">
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
              Wir sind der Goldene Raum
            </h2>
            <p class="white py4 grow">
              Zum Start im Oktober 2021 kamen etwa 40 Menschen zusammen:
              Aktivist*innen und Unterstützer*innen, manche mit privilegierten
              Herkünften, anderen haben auch schon mal auf der Straße gelebt.
              Einige stehen noch vor dem Berufseinstieg, andere gehören älteren
              Generationen an. 12 Aktivist*innen gaben Einblicke aus ihrer
              Arbeit, und mit viel Gold wurden gemeinsame Begegnungen
              zelebriert. Seither trifft sich eine Kerngruppe regelmäßig,
              tauscht sich über die Aktivitäten und die eigenen Bedarfe aus und
              bereitet weitere Events vor. Unterstützt wird der goldene Raum
              auch von der GLS Bank und Organisationen der Aktivist*innen.
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
    </BlobSection>
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
