<template>
  <section style="position: relative">
    <Blob
      :background="background"
      :left="left"
      :right="right"
      :top="top"
      :animationTime="animationTime"
      :blobShape="blobShape"
      :height="height"
      :width="width"
    />
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    left: {
      type: Number,
      default: 50,
    },
    right: {
      type: Number,
      default: 50,
    },
    top: {
      type: Number,
      default: 50,
    },
    background: {
      type: String,
      default: '#f4bd51',
    },
    animationTime: {
      type: Number,
      default: 50,
    },
    blobShape: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 100,
    },
    width: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped></style>
