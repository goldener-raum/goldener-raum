<template>
  <div style="margin: 5rem 4rem">
    <w-flex basis-zero>
      <div class="grow">
        <h2 class="headline mt8 mb4 mr8 white" style="font-size: 3rem">
          Werde Teil des goldenen Raumes.
        </h2>
        <p class="white py4 title2 grow">
          Kurzer Erklärtext: Richte hier eine Dauerspende ein und trage dich
          unten ins goldene Buch ein, um deine Unterstützung auch öffentlich zu
          zeigen. Was bedeutet es? Warum 1 Promille?
        </p>
      </div>
      <div
        v-if="!$waveui.breakpoint.xs && !$waveui.breakpoint.sm"
        class="grow"
      />
    </w-flex>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
