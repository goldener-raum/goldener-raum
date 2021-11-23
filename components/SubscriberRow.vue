<template>
  <div>
    <w-flex v-if="!subscriber.useNickname" class="justify-center">
      <p>{{ subscriber.surname }}</p>
      <p class="ml2">{{ subscriber.lastname }}</p>
    </w-flex>
    <w-flex v-else class="justify-center">
      <p>{{ subscriber.nickname }}</p>
    </w-flex>
  </div>
</template>

<script>
export default {
  props: {
    subscriber: Object,
  },
  computed: {
    elapsedTime() {
      if (
        this.subscriber &&
        this.subscriber.createdAt &&
        this.subscriber.createdAt.toDate
      ) {
        const endTime = new Date();
        const startTime = new Date(this.subscriber.createdAt.toDate());
        const timeDiff = endTime.getTime() - startTime.getTime();
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(weeks / 4);
        const years = Math.floor(months / 12);

        if (years > 0) {
          return `vor ${years} ${years === 1 ? 'Jahr' : 'Jahren'}`;
        } else if (months > 0) {
          return `vor ${months} ${months === 1 ? 'Monat' : 'Monaten'}`;
        } else if (weeks > 0) {
          return `vor ${weeks} ${weeks === 1 ? 'Woche' : 'Wochen'}`;
        } else if (days > 0) {
          return `vor ${days} ${days === 1 ? 'Tag' : 'Tagen'}`;
        } else if (hours > 0) {
          return `vor ${hours} ${hours === 1 ? 'Stunde' : 'Stunden'}`;
        } else if (minutes > 0) {
          return `vor ${minutes} ${minutes === 1 ? 'Minute' : 'Minuten'}`;
        } else if (seconds > 0) {
          return `vor ${seconds} ${seconds === 1 ? 'Sekunde' : 'Sekunden'}`;
        }
      }
      return 'jetzt gerade';
    },
  },
};
</script>

<style scoped></style>
