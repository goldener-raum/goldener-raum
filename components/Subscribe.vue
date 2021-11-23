<template>
  <section>
    <div class="width: 100%">
      <div
        style="margin-top: 10rem; margin-bottom: 7.5rem"
        :class="
          $waveui.breakpoint.sm || $waveui.breakpoint.xs
            ? 'sectionMarginMobile'
            : 'sectionMarginDesktop'
        "
      >
        <h2 class="headline pb8" :style="getFontSize">Das goldene Buch</h2>

        <w-flex basis-zero>
          <div class="grow">
            <p class="py4">
              Wir danken dir von Herzen für deine Unterstützung! Wenn du
              möchtest, dann trage deinen Namen hier in das goldene Buch ein, um
              deine Unterstützung öffentlich zu zeigen. (Gerne auch mit einem
              Pseudonym.)
            </p>
          </div>
          <div
            v-if="
              !$waveui.breakpoint.xs &&
              !$waveui.breakpoint.sm &&
              !$waveui.breakpoint.md
            "
            class="grow"
          />
        </w-flex>
      </div>
    </div>
    <AnotherBlobSection style="margin-bottom: 10rem">
      <div class="grow">
        <NewSubscriber />

        <w-image
          :transition="'slide-fade-up'"
          :src="`${$config.baseUrl}/landingpage/goldener-raum-04.png`"
          :ratio="400 / 1000"
        />
      </div>
      <div
        :class="
          $waveui.breakpoint.sm || $waveui.breakpoint.xs
            ? 'sectionMarginMobile'
            : 'sectionMarginDesktop'
        "
      >
        <h2 class="headline pt12 pb4" :style="getFontSize">
          Die Menschen im Raum
        </h2>
        <p class="py4 grow">
          Hier findest du die Namen aller Menschen, die Teil des goldenen Raumes
          sind.
        </p>
      </div>
    </AnotherBlobSection>
    <ListSubscribers />
    <w-image
      :transition="'slide-fade-up'"
      :src="`${$config.baseUrl}/landingpage/goldener-raum-05.png`"
      :ratio="400 / 1000"
    />
    <h2
      class="headline text-center"
      :class="
        $waveui.breakpoint.sm || $waveui.breakpoint.xs
          ? 'sectionMarginMobile'
          : 'sectionMarginDesktop'
      "
      :style="getFontSize + 'margin: 5rem 0;'"
    >
      Vielen Dank!
    </h2>
  </section>
</template>

<script>
export default {
  computed: {
    getFontSize() {
      if (this.$waveui.breakpoint.width / 30 >= 25) {
        return `font-size: ${this.$waveui.breakpoint.width / 30}px;`;
      }
      return `font-size: 25px;`;
    },
  },
};
</script>

<style scoped></style>
