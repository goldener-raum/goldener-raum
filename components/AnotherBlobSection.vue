<template>
  <div :style="`background: ${background}`" class="wrap">
    <div
      v-if="topAnimated"
      class="circleTop"
      :style="`background: ${background}; width: ${width}vw; height: ${height}vh; top: ${top}vh; left: 0`"
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
      :style="`background: ${background}; width: ${width}vw; height: ${height}vh;  bottom: ${bottom}vh; left: 0`"
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
      default: 10,
    },
    width: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}
.circleTop {
  border-radius: 40% 60% 0 0;
  overflow: hidden;
  animation: morphTop 6s linear infinite;
  z-index: -1;
  position: absolute;
}

.staticTop {
  overflow: hidden;
  z-index: -1;
  position: absolute;
}

.circleBottom {
  border-radius: 0 0 60% 50%;
  overflow: hidden;
  animation: morphBottom 6s linear infinite;
  z-index: -1;
  position: absolute;
}

@keyframes morphTop {
  0%,
  100% {
    border-radius: 40% 60% 0 0;
  }
  34% {
    border-radius: 70% 30% 0 0;
  }
  67% {
    border-radius: 100% 60% 0 0;
  }
}

@keyframes morphBottom {
  0%,
  100% {
    border-radius: 0 0 60% 50%;
  }
  34% {
    border-radius: 0 0 70% 70%;
  }
  67% {
    border-radius: 0 0 60% 60%;
  }
}
</style>
