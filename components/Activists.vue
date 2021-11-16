<template>
  <section style="margin-bottom: 15rem; position: relative">
    <Blob
      :background="'#33408e'"
      :animationTime="50"
      :blobShape="4"
      :left="25"
      :top="50"
    />
    <h2 class="headline mb12 ml8" style="font-size: 3rem; width: 50%">
      Einige unserer AktivistInnen
    </h2>
    <Slider />
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
