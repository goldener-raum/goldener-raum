<template>
  <section>
    <AnotherBlobSection :topAnimated="false" style="min-height: 50vh">
      <Video />
    </AnotherBlobSection>
    <div class="width: 100%">
      <div style="margin: 10rem 4rem 5rem 4rem">
        <h2 class="headline pb8" :style="getFontSize">
          Wir sind die Aktivist*innen des goldenen Raums.
        </h2>

        <w-flex basis-zero>
          <div class="grow">
            <p class="py4 title2 grow">
              Wir sind (20) junge Menschen, die mit viel kreativer Energie die
              Welt zu einem schöneren und nachhaltigeren Ort machen.<br />
              Den einen ist soziale Gerechtigkeit besonders wichtig, den anderen
              das Klima. Die einen haben privilegierte Herkünfte, die anderen
              haben auch schon mal auf der Straße gelebt. Die einen stehen noch
              vor dem Berufseinstieg, die anderen gehören älteren Generationen
              an.
            </p>

            <p class="py4 title2">
              Mit dem goldenen Raum haben wir einen Generationenfonds kreiert,
              der es uns erlaubt, Geld als gemeinschaftliches Gestaltungsmittel
              zu erproben. So wird die Lebensphase vor dem Berufsleben zum
              "goldenen Raum" für biographische und gesellschaftliche
              Entwicklungen.
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
      if (this.$waveui.breakpoint.width / 30 >= 22) {
        return `font-size: ${this.$waveui.breakpoint.width / 30}px;`;
      }
      return `font-size: 22px;`;
    },
  },
};
</script>

<style scoped></style>
