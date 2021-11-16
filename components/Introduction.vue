<template>
  <section style="margin-top: 5rem; margin-bottom: 15rem">
    <w-flex class="basis-zero">
      <div class="grow ma8" style="position: relative">
        <Blob
          :background="'#f4bd51'"
          :left="50"
          :top="50"
          :animationTime="50"
          :blobShape="3"
        />

        <h2 class="headline mb12" style="font-size: 3rem">
          Betritt den goldenen Raum
        </h2>
        <h2 class="title1">
          <w-icon class="mr1" color="primary"> mdi mdi-arrow-right </w-icon>Ein
          Promille deines Einkommens.
        </h2>
        <h2 class="title1">
          <w-icon class="mr1" color="primary"> mdi mdi-arrow-right </w-icon
          >Unterstützung auf Augenhöhe.
        </h2>
        <h2 class="title1">
          <w-icon class="mr1" color="primary"> mdi mdi-arrow-right </w-icon
          >Werde Teil des goldenen Raums.
        </h2>

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
      <CustomImage class="grow" :filename="'goldener-raum-01.png'" />
    </w-flex>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
