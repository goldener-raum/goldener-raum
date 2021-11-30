<template>
  <div :class="`${$waveui.breakpoint.xs ? 'mb1' : 'mb3'}`">
    <p class="caption disableSelect">{{ label }}:</p>
    <p :style="`${$waveui.breakpoint.xs && 'font-size: 0.9rem'}`">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    content: String,
  },
};
</script>

<style scoped>
.disableSelect {
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
</style>
