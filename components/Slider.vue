<template>
  <VueperSlides class="grow">
    <VueperSlide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      <template #content>
        <h2 class="text-right mt3 mr6">{{ slide.title }}</h2>
        <h4 class="text-right mt3 mr6">{{ slide.content }}</h4>
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
          title: 'Goldener Raum Bild 1',
          content: 'Beschreibung',
          image: require('@/assets/slider/goldener-raum-01.png'),
        },
        {
          title: 'Goldener Raum Bild 2',
          content: 'Beschreibung',
          image: require('@/assets/slider/goldener-raum-02.png'),
        },
        {
          title: 'Goldener Raum Bild 3',
          content: 'Beschreibung',
          image: require('@/assets/slider/goldener-raum-03.png'),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
