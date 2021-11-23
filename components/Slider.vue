<template>
  <VueperSlides
    :slide-ratio="
      !$waveui.breakpoint.xs && !$waveui.breakpoint.sm ? 1 / 2.2 : 1 / 1
    "
    class="grow"
  >
    <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      <template #content style="position: relative">
        <div class="contentOverlay contentOverlayBackground" />
        <div class="contentOverlay">
          <h2 class="text-center white" :style="getFontSize">
            {{ slide.title }}
          </h2>
        </div>
      </template>
    </VueperSlide>
  </VueperSlides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title:
            '"Wir sind X und Y. Aktuell arbeiten wir daran, Z zu erreichen."',
          image: require('@/assets/slider/goldener-raum-01.png'),
        },
        {
          title:
            '"Wir sind X und Y. Aktuell arbeiten wir daran, Z zu erreichen."',
          image: require('@/assets/slider/goldener-raum-02.png'),
        },
        {
          title:
            '"Wir sind X und Y. Aktuell arbeiten wir daran, Z zu erreichen."',
          image: require('@/assets/slider/goldener-raum-03.png'),
        },
      ],
    };
  },
  computed: {
    getFontSize() {
      const calculatedFontSize = this.$waveui.breakpoint.width / 50;
      const calculatedPadding = this.$waveui.breakpoint.width / 30;
      if (calculatedFontSize >= 25 && !this.$waveui.breakpoint.xs) {
        return `font-size: ${calculatedFontSize}px; padding: ${calculatedPadding}px 2rem 0 2rem;`;
      } else if (!this.$waveui.breakpoint.xs) {
        return `font-size: 25px; padding: ${calculatedPadding}px 2rem 0 2rem;`;
      }
      return `font-size: 18px; padding: ${calculatedPadding}px 2rem 0 2rem;`;
    },
  },
};
</script>

<style scoped>
.contentOverlay {
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
}

.contentOverlayBackground {
  background: black;
  opacity: 0.4;
}
</style>
