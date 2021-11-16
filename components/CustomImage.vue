<template>
  <w-image
    :transition="'slide-fade-up'"
    :src="imageSource"
    :ratio="600 / 1000"
  />
</template>

<script>
export default {
  props: {
    filename: String,
  },
  computed: {
    imageSource() {
      return `${this.$config.baseUrl}/landingpage/${this.filename}`;
    },
  },
};
</script>

<style scoped></style>
