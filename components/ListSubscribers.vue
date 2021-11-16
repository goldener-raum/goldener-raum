<template>
  <w-card class="ma8 grow" style="height: 11rem; overflow-y: auto">
    <w-flex
      v-if="subscribers[0]"
      v-for="(subscriber, sIndex) in subscribers"
      :key="sIndex"
    >
      <w-icon class="mr4" sm color="primary"> mdi mdi-star </w-icon>
      <p class="mr1">{{ subscriber.surname }}</p>
      <p class="mr4">{{ subscriber.lastname }}</p>
      <p class="mr4 mt1 caption">
        vor {{ getElapsedTime(subscriber.createdAt.toDate()) }}
      </p>
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
      const subscribersRef = await this.$fire.firestore
        .collection('subscribers')
        .orderBy('createdAt', 'desc')
        .limit(20);
      subscribersRef.onSnapshot((querySnapshot) => {
        this.subscribers = querySnapshot.docs.map((doc) => doc.data());
      });
    },
    getElapsedTime(createdAt) {
      const endTime = new Date();
      const startTime = new Date(createdAt);
      const timeDiff = endTime.getTime() - startTime.getTime();
      const seconds = Math.floor(timeDiff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(weeks / 4);
      const years = Math.floor(months / 12);

      if (years > 0) {
        return `${years} ${years === 1 ? 'Jahr' : 'Jahre'}`;
      } else if (months > 0) {
        return `${months} ${months === 1 ? 'Monat' : 'Monate'}`;
      } else if (weeks > 0) {
        return `${weeks} ${weeks === 1 ? 'Woche' : 'Wochen'}`;
      } else if (days > 0) {
        return `${days} ${days === 1 ? 'Tag' : 'Tage'}`;
      } else if (hours > 0) {
        return `${hours} ${hours === 1 ? 'Stunde' : 'Stunden'}`;
      } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? 'Minute' : 'Minuten'}`;
      } else if (seconds > 0) {
        return `${seconds} ${seconds === 1 ? 'Sekunde' : 'Sekunden'}`;
      }
    },
  },
};
</script>

<style scoped></style>
