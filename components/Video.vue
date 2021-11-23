<template>
  <w-transition-bounce>
    <div class="transition-box" v-if="animate">
      <div
        :style="`margin: ${$waveui.breakpoint.width / 500}em ${
          $waveui.breakpoint.width / 150
        }em`"
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
              <h2
                class="headline mb4 ml4 grow"
                :style="`font-size: ${$waveui.breakpoint.width / 20}px;`"
              >
                Betritt den <br />
                goldenen Raum
              </h2>
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
            @click="showVideoLock = !showVideoLock"
            v-else
          >
            <w-flex style="height: 100%" justify-center align-center>
              <w-icon
                v-if="!showVideoLock"
                color="secondary"
                :style="`font-size: ${$waveui.breakpoint.width / 7.5}px`"
              >
                mdi mdi-arrow-right-drop-circle-outline
              </w-icon>
              <w-icon
                v-else
                color="secondary"
                :style="`font-size: ${$waveui.breakpoint.width / 7.5}px`"
                spin
              >
                mdi mdi-motion-pause-outline
              </w-icon>
            </w-flex>
          </div>
        </div>
      </div>
    </div>
  </w-transition-bounce>
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
  border: 1px solid gray;
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
