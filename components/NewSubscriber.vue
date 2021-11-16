<template>
  <w-card class="ma8 grow">
    <w-form @success="saveNewSubscriber()">
      <w-input
        :validators="[validators.required]"
        class="mb4"
        label="Vorname"
        v-model="newSub.surname"
      />
      <w-input
        :validators="[validators.required]"
        class="mb4"
        label="Nachname"
        v-model="newSub.lastname"
      />
      <w-input
        :validators="[validators.required, validators.validateEmail]"
        class="mb4"
        label="E-Mail"
        v-model="newSub.email"
      />
      <w-flex>
        <w-button
          :disabled="!newSub.surname || !newSub.lastname || !newSub.email"
          type="submit"
          class="grow"
          >In die Liste eintragen</w-button
        >
      </w-flex>
    </w-form>
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
      validators: {
        required: (value) => !!value || 'This field is required',
        validateEmail: (email) => {
          const mailformat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          const isValid = email.match(mailformat);
          return isValid || 'Bitte eine gültige Email angeben!';
        },
      },
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
