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
        <div class="placeholderWrapper">
          <div
            class="placeholderVideo"
            v-if="!showVideo && !showVideoLock"
            @mouseover="showVideo = true"
            @mouseleave="showVideo = false"
            @click="showVideo = true"
            :style="`padding: ${$waveui.breakpoint.width / 400}em ${
              $waveui.breakpoint.width / 300
            }em`"
          >
            <w-flex column>
              <h1
                class="headline mb4 ml4 grow"
                :style="`font-size: ${$waveui.breakpoint.width / 16}px;`"
              >
                Betritt den <br />
                Goldenen Raum
              </h1>
              <w-icon
                color="primary"
                :style="`font-size: ${$waveui.breakpoint.width / 7.5}px;`"
              >
                mdi mdi-arrow-right-drop-circle-outline
              </w-icon>
            </w-flex>
          </div>
          <div
            class="placeholderVideo"
            @mouseleave="showVideo = false"
            @click="showVideoLock = true"
            v-else
          >
            <w-flex style="height: 100%" justify-center align-center>
              <w-icon
                v-if="!showVideoLock"
                color="primary"
                :style="`font-size: ${$waveui.breakpoint.width / 7.5}px`"
              >
                mdi mdi-arrow-right-drop-circle-outline
              </w-icon>
              <video
                v-else
                ref="videoRef"
                src="trailer.mp4"
                id="video-container"
                width="100%"
                autoplay
                controls
              />
            </w-flex>
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
      showVideoLock: false,
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
  background: white;
  cursor: pointer;
}
</style>
