<template>
  <section>
    <w-flex class="basis-zero mb12">
      <div class="grow ma8">
        <h2 class="title1">Ein Promille deines Einkommens.</h2>
        <h2 class="title1">Unterstützung auf Augenhöhe.</h2>
        <h2 class="title1">Werde Teil des goldenen Raums.</h2>

        <p class="py8 title2">
          Hier unterstützen sich Menschen gegenseitig bei ihrem Kampf für eine
          lebenswerte Zukunft. Den einen ist soziale Gerechtigkeit besonders
          wichtig, den anderen das Klima. Die einen haben privilegierte
          Herkünfte, die anderen haben auch schon mal auf der Straße gelebt. Die
          einen stehen noch vor dem Berufseinstieg, die anderen gehören älteren
          Generationen an.
        </p>

        <h2 class="title1 text-center pt8">So funktioniert es:</h2>
        <w-flex class="justify-space-around px8 py12">
          <w-card>
            <w-icon class="mr1" style="font-size: 5rem" color="primary">
              mdi mdi-account-cash-outline
            </w-icon>
          </w-card>

          <w-card>
            <w-icon class="mr1" style="font-size: 5rem" color="primary">
              mdi mdi-account-group
            </w-icon>
          </w-card>

          <w-card>
            <w-icon class="mr1" style="font-size: 5rem" color="primary">
              mdi mdi-account-heart
            </w-icon>
          </w-card>
        </w-flex>
      </div>
      <w-image
        class="grow ma8"
        :src="`${$config.baseUrl}/landingpage/goldener-raum-01.png`"
      />
    </w-flex>

    <w-flex class="basis-zero mb12">
      <w-image
        class="grow ma8"
        :src="`${$config.baseUrl}/landingpage/goldener-raum-02.png`"
      />

      <div class="grow ma8">
        <h2 class="title1">Wer sind wir?</h2>

        <div>
          <p class="py8 title2">
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
    </w-flex>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
