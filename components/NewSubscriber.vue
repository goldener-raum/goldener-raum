<template>
  <w-card class="ma8 grow">
    <w-input class="mb4" label="Vorname" v-model="newSub.surname" />
    <w-input class="mb4" label="Nachname" v-model="newSub.lastname" />
    <w-input class="mb4" label="E-Mail" v-model="newSub.email" />
    <w-flex>
      <w-button
        :disabled="!newSub.surname || !newSub.lastname || !newSub.email"
        class="grow"
        @click="saveNewSubscriber()"
        >In die Liste eintragen</w-button
      >
    </w-flex>
  </w-card>
</template>

<script>
export default {
  mounted() {
    this.initializeNewSub();
  },
  data() {
    return {
      newSub: {},
    };
  },
  methods: {
    initializeNewSub() {
      this.newSub = {
        surname: '',
        lastname: '',
        email: '',
      };
    },
    async saveNewSubscriber() {
      const subscribersRef = this.$fire.firestore.collection('subscribers');
      try {
        await subscribersRef.add({
          createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp(),
          surname: this.newSub.surname,
          lastname: this.newSub.lastname,
          email: this.newSub.email,
        });
      } catch (e) {
        alert(e);
        return;
      }
    },
  },
};
</script>

<style scoped></style>
