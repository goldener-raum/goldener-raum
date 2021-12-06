<template>
  <w-transition-scale-fade>
    <div class="transition-box" v-if="animate" style="animation-duration: 0.5s">
      <div
        :style="
          $waveui.breakpoint.md ||
          $waveui.breakpoint.sm ||
          $waveui.breakpoint.xs
            ? `margin: ${$waveui.breakpoint.width / 500}em ${
                $waveui.breakpoint.width / 500
              }em`
            : `margin: ${$waveui.breakpoint.width / 500}em ${
                $waveui.breakpoint.width / 150
              }em`
        "
      >
        <div
          style="cursor: pointer"
          class="placeholderWrapper"
          @click="showVideo = true"
          v-if="!showVideo"
        >
          <div class="overlay"></div>
          <w-image
            style="position: absolute"
            :ratio="1080 / 1920"
            :src="`/video/video-placeholder.png`"
          ></w-image>
          <w-flex
            style="
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0;
              z-index: 10;
            "
            justify-center
            align-center
          >
            <w-icon
              color="white"
              :style="`font-size: ${$waveui.breakpoint.width / 8.5}px;`"
            >
              mdi mdi-play
            </w-icon>
            <h1
              class="headline grow white"
              :style="`font-size: ${
                $waveui.breakpoint.width / 20
              }px;position: absolute; bottom: 10%; line-height: 1.1`"
            >
              Willkommen im
              <br />
              Goldenen Raum
            </h1>
          </w-flex>
        </div>
        <div class="placeholderWrapper" v-else>
          <div class="placeholderVideo">
            <video
              ref="videoRef"
              src="video/goldener-raum.mp4"
              id="video-container"
              width="100%"
              autoplay
              controls
            />
          </div>
        </div>
      </div>
    </div>
  </w-transition-scale-fade>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.animate = true;
    }, 1);
  },
  data() {
    return {
      showVideo: false,
      animate: false,
    };
  },
};
</script>

<style scoped>
.placeholder {
  margin: 2rem 8rem;
}
.placeholderWrapper {
  position: relative;
  padding-bottom: 56.25%;
}
.placeholderVideo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.overlay {
  z-index: 5;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.5;
}
</style>
