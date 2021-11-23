<template>
  <w-flex
    wrap
    style="width: 35em; margin: 5rem auto"
    :style="
      $waveui.breakpoint.sm || $waveui.breakpoint.xs
        ? 'width: 100%; margin: 5rem auto'
        : 'width: 35em; margin: 5rem auto'
    "
  >
    <div
      v-if="subscribers[0]"
      v-for="(subscriber, sIndex) in subscribers"
      :key="sIndex"
      :style="
        $waveui.breakpoint.sm || $waveui.breakpoint.xs
          ? 'min-width: 100%;'
          : 'min-width: 50%;'
      "
    >
      <SubscriberRow :subscriber="subscriber" />
    </div>
  </w-flex>
</template>

<script>
export default {
  mounted() {
    this.unsubscribe = this.subscribeSubscribers();
  },
  // TODO: unsubscribe
  // destroyed() {
  //   if (this.unsubscribe) this.unsubscribe()
  // },
  data() {
    return {
      subscribers: [],
      unsubscribe: null,
    };
  },
  methods: {
    async getCollection(collection) {
      const subscribersRef = await this.$fire.firestore
        .collection(collection)
        .get();
      try {
        this.subscribers = subscribersRef.docs.map((doc) => doc.data());
        this.initializeNewSub();
      } catch (e) {
        alert(e);
        return;
      }
    },

    async subscribeSubscribers() {
      const subscribersRef = await this.$fire.firestore
        .collection('subscribers')
        .orderBy('createdAt', 'desc');
      // .limit(20);
      subscribersRef.onSnapshot((querySnapshot) => {
        this.subscribers = querySnapshot.docs.map((doc) => doc.data());
      });
    },
  },
};
</script>

<style scoped></style>
