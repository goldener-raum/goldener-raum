<template>
  <w-flex>
    <w-icon class="mr3 mt1" sm color="primary"> mdi mdi-star </w-icon>
    <p class="mr1">{{ subscriber.surname }}</p>
    <p class="mr4">{{ subscriber.lastname }}</p>

    <div class="grow" />
    <p class="mr4 mt1 caption">{{ elapsedTime }}</p>
    <!-- <p class="mr1">{{ subscriber.email }}</p> -->
  </w-flex>
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
          return `vor ${years} ${years === 1 ? 'Jahr' : 'Jahre'}`;
        } else if (months > 0) {
          return `vor ${months} ${months === 1 ? 'Monat' : 'Monate'}`;
        } else if (weeks > 0) {
          return `vor ${weeks} ${weeks === 1 ? 'Woche' : 'Wochen'}`;
        } else if (days > 0) {
          return `vor ${days} ${days === 1 ? 'Tag' : 'Tage'}`;
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
