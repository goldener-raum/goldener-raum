<template>
  <w-card class="ma8 grow">
    <w-form @success="saveNewSubscriber()" v-model="valid">
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
      <w-flex class="basis-zero">
        <w-button
          :disabled="!(newSub.surname || newSub.lastname || newSub.email)"
          bg-color="error"
          type="reset"
          class="grow mr3"
          :ref="'resetSubForm'"
          >Abbrechen</w-button
        >
        <w-button
          :disabled="!newSub.surname || !newSub.lastname || !newSub.email"
          type="submit"
          class="grow ml3"
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
        required: (value) => !!value || 'Dieses Feld muss ausgefüllt werden.',
        validateEmail: (email) => {
          const mailformat =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          const isValid = email.match(mailformat);
          return isValid || 'Bitte eine gültige Email angeben!';
        },
      },
      valid: null,
    };
  },
  methods: {
    initializeNewSub() {
      this.$refs.resetSubForm.$el.focus();
      this.$refs.resetSubForm.$el.blur();
      setTimeout(() => {
        this.$refs.resetSubForm.$el.click();
      }, 1);
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
        this.initializeNewSub();
        this.$waveui.notify({
          message: 'Erfolgreich eingetragen!.',
          type: 'success',
          timeout: 3000,
        });
      } catch (e) {
        this.$waveui.notify({
          message: 'Fehler beim eintragen:' + e,
          type: 'error',
          timeout: 3000,
        });
        return;
      }
    },
  },
};
</script>

<style scoped></style>
