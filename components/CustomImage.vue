<template>
  <w-image
    class="grow ma8"
    :transition="'slide-fade-up'"
    :src="imageSource"
    :width="1000"
    :height="600"
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
