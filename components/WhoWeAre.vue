<template>
  <section style="margin-bottom: 10rem">
    <div class="width: 100%">
      <div style="margin: 5rem 4rem 7.5rem 4rem">
        <w-flex basis-zero>
          <div class="grow" />
          <p class="title2 grow">
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
      <div style="margin: 5rem 4rem">
        <w-flex basis-zero>
          <div class="grow">
            <h2 class="headline mt8 mb4 mr8 white" style="font-size: 3rem">
              Unterstützung auf Augenhöhe.
            </h2>
            <p class="white py4 title2 grow">
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
            v-if="!$waveui.breakpoint.xs && !$waveui.breakpoint.sm"
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
export default {};
</script>

<style scoped></style>
