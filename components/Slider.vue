<template>
  <VueperSlides
    :slide-ratio="
      !$waveui.breakpoint.xs && !$waveui.breakpoint.sm ? 1 / 2.2 : 1 / 1
    "
    :arrows="false"
    :bullets="false"
    ref="vueSlider"
    class="grow"
  >
    <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      <template #content style="position: relative">
        <div class="contentOverlay contentOverlayBackground" />
        <div class="contentOverlay">
          <button class="iconLeft" @click="$refs.vueSlider.previous()">
            <w-icon :style="getArrowSize">mdi mdi-menu-left</w-icon>
          </button>
          <button class="iconRight" @click="$refs.vueSlider.next()">
            <w-icon :style="getArrowSize">mdi mdi-menu-right</w-icon>
          </button>

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
            'Tracy Abenaa, Demokratische Stimme der Jugend: "Ich gestalte Freiräume, in denen junge Menschen ihre Schöpfer*innenkraft entdecken können."',
          image: require('@/assets/slider/goldener-raum-tracy.png'),
        },
        {
          title:
            'Jan, Extinction Rebellion / Entfaltungsnetz: "Für gesellschaftlichen Wandel brauchen wir individuelle Transformation - gemeinschaftlich!"',
          image: require('@/assets/slider/goldener-raum-jan.png'),
        },
        {
          title:
            'Chiara und Leo, Haus am Wald / Karuna Sozialgenossenschaft: "Wir schaffen einen Ort für Alleinerziehende und Familien in Gemeinschaft."',
          image: require('@/assets/slider/goldener-raum-kiara-leo.png'),
        },
      ],
    };
  },
  computed: {
    getFontSize() {
      const minFontSize = 25;
      const calculatedFontSize = this.$waveui.breakpoint.width / 50;
      const calculatedFontSizeSM = this.$waveui.breakpoint.width / 30;
      const calculatedPadding = this.$waveui.breakpoint.width / 70;
      if (calculatedFontSize >= minFontSize && !this.$waveui.breakpoint.xs) {
        return `font-size: ${calculatedFontSize}px; padding: ${calculatedPadding}px 8rem 0 8rem;`;
      } else if (!this.$waveui.breakpoint.xs) {
        return `font-size: ${minFontSize}px; padding: ${calculatedPadding}px 4rem 0 4rem;`;
      }
      return `font-size: ${calculatedFontSizeSM}px; padding: ${calculatedPadding}px 4rem 0 4rem;`;
    },
    getArrowSize() {
      const minFontSize = 60;
      const calculatedFontSize = this.$waveui.breakpoint.width / 10;
      if (calculatedFontSize >= minFontSize) {
        return `font-size: ${calculatedFontSize}px;`;
      }
      return `font-size: ${minFontSize}px;`;
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
.iconLeft {
  color: white;
  position: absolute;
  left: 0;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}
.iconRight {
  color: white;
  position: absolute;
  right: 0;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}
.contentOverlayBackground {
  background: black;
  opacity: 0.4;
}
.vueperslides__arrow {
  opacity: 1 !important;
}
</style>
