<template>
  <section style="margin-bottom: 15rem">
    <h2 class="headline mt8 mb4 mr8 text-right white" style="font-size: 3rem">
      Wer sind wir?
    </h2>
    <w-flex
      class="basis-zero mb8"
      :column="$waveui.breakpoint.sm || $waveui.breakpoint.md"
    >
      <div
        class="grow ma8"
        v-if="!($waveui.breakpoint.sm || $waveui.breakpoint.md)"
      >
        <CustomImage :filename="'goldener-raum-03.png'" />
      </div>

      <div class="grow ma8" style="position: relative">
        <Blob
          :background="'#217c6f'"
          :left="50"
          :top="50"
          :animationTime="50"
          :blobShape="3"
        />

        <div class="white">
          <p class="title2">
            Im Generationenfonds organisieren sich junge Aktivistinnen und
            Aktivisten in Gruppen und verfügen über ein gemeinsames Budgets. Es
            geht um Potenzialentfaltung, um das Erleben von Selbstwirksamkeit
            und darum, mit Menschen aus anderen Herkünften und sozialen
            Hintergründen auf Augenhöhe in Verbindung zu kommen. Mit Blick auf
            die existenziellen Krisen erproben sie Geld als gemeinschaftliches
            Gestaltungsmittel. Und die Lebensphase vor dem Berufsleben wird zum
            „goldenen Raum“ für biographische und gesellschaftliche
            Entwicklungen.
          </p>
          <p class="py8 title2">
            Ermöglicht wird dies durch Unterstützer*innen, die mindestens ein
            Promille ihres Einkommens monatlich einzahlen, genau so wie die
            Aktivist*innen - ganz auf Augenhöhe. Es gibt Kooperationen mit
            Karuna Sozialgenossenschaft, Elinor und der GLS Bank. Denn Ökologie
            und Solidarität gehören zusammen. Werde Teil des Generationsfonds
            und einer Community die zeigt: Es ist die Diversität, die uns stark
            macht.
          </p>
        </div>
      </div>
      <div
        class="grow ma8"
        v-if="$waveui.breakpoint.sm || $waveui.breakpoint.md"
      >
        <CustomImage :filename="'goldener-raum-03.png'" />
      </div>
    </w-flex>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
