<template>
  <div class="wrap" :style="`background: ${background}`">
    <div
      v-if="topAnimated"
      class="circleTop"
      :style="`background: ${background}; width: ${width}vw; height: ${height}vh; top: ${top}vh; left: -50%`"
    />
    <div
      class="staticTop"
      :style="`background: ${background}; width: 100vw; height: 20vh; top: ${top}vh`"
      v-else
    />

    <slot />

    <div
      v-if="bottomAnimated"
      class="circleBottom"
      :style="`background: ${background}; width: ${width}vw; height: ${height}vh;  bottom: ${bottom}vh; left: -50%`"
    />
  </div>
</template>

<script>
export default {
  props: {
    topAnimated: {
      type: Boolean,
      default: true,
    },
    bottomAnimated: {
      type: Boolean,
      default: true,
    },
    left: {
      type: Number,
      default: -100,
    },
    right: {
      type: Number,
      default: -100,
    },
    top: {
      type: Number,
      default: -10,
    },
    bottom: {
      type: Number,
      default: -10,
    },
    background: {
      type: String,
      default: '#f4bd51',
    },
    animationTime: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 50,
    },
    width: {
      type: Number,
      default: 200,
    },
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}
.circleTop {
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  overflow: hidden;
  animation: morph 6s linear infinite;
  z-index: -1;
  position: absolute;
}

.staticTop {
  overflow: hidden;
  z-index: -1;
  position: absolute;
}

.circleBottom {
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  overflow: hidden;
  animation: morph 12s linear infinite;
  z-index: -1;
  position: absolute;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }
}
</style>
