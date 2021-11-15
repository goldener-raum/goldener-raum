<template>
  <w-card class="ma8 grow">
    <w-flex
      v-if="subscribers[0]"
      v-for="(subscriber, sIndex) in subscribers"
      :key="sIndex"
    >
      <w-icon class="mr4" sm color="primary"> mdi mdi-star </w-icon>
      <p class="mr1">{{ subscriber.surname }}</p>
      <p class="mr4">{{ subscriber.lastname }}</p>
      <div class="grow" />
      <p class="mr1">{{ subscriber.email }}</p>
    </w-flex>
  </w-card>
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
      const subscribersRef = await this.$fire.firestore.collection(
        'subscribers'
      );
      subscribersRef.onSnapshot((querySnapshot) => {
        this.subscribers = querySnapshot.docs.map((doc) => doc.data());
      });
    },
  },
};
</script>

<style scoped></style>
