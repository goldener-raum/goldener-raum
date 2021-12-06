<template>
  <w-form
    @success="saveNewSubscriber()"
    v-model="valid"
    :style="
      $waveui.breakpoint.sm || $waveui.breakpoint.xs
        ? 'width: 100%; padding: 1rem 2rem 3rem 2rem'
        : 'width: 25rem; margin: 5rem auto 10rem'
    "
  >
    <div v-if="!newSub.useNickname">
      <w-input
        :validators="[validators.required]"
        required
        class="mb6"
        color="black"
        label="Vorname"
        v-model="newSub.surname"
      />
      <w-input
        :validators="[validators.required]"
        required
        class="mb6"
        color="black"
        label="Nachname"
        v-model="newSub.lastname"
      />
    </div>
    <w-input
      v-else
      :validators="[validators.required]"
      required
      class="mb6"
      color="black"
      label="Pseudonym"
      v-model="newSub.nickname"
    />

    <w-checkbox class="mb6" color="black" v-model="newSub.useNickname">
      Meinen Namen nicht öffentlich anzeigen
    </w-checkbox>

    <w-checkbox class="mb6" color="black" v-model="newSub.newsletterConsent">
      Gerne möchte ich weitere Infos erhalten *
    </w-checkbox>
    <w-input
      v-if="newSub.newsletterConsent"
      :validators="[validators.required, validators.validateEmail]"
      class="mb6"
      color="black"
      label="E-Mail"
      v-model="newSub.email"
    />

    <p class="body lh1 mt4">
      * Ich bin damit einverstanden, dass die Vertrauensgesellschaft e.V. mich
      mit Neuigkeiten per E-Mail kontaktiert.
      <a class="body text-center lh1" href="/datenschutz">
        Hinweise zum Datenschutz finden Sie hier!
      </a>
    </p>

    <w-flex class="mt8" justify-space-around>
      <w-button
        v-show="false"
        xl
        bg-color="error"
        type="reset"
        class="pa6 my6"
        :ref="'resetSubForm'"
      >
        Abbrechen
      </w-button>
      <w-button xl type="submit" bg-color="secondary" color="white" class="py6">
        <p class="pl6 pr5">Eintragen</p>
      </w-button>
    </w-flex>
  </w-form>
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
        await subscribersRef.add(this.newSubscriber);
        this.initializeNewSub();
        this.$waveui.notify('Erfolgreich eingetragen!.', 'success', 3000);
      } catch (e) {
        this.$waveui.notify('Fehler beim eintragen:' + e, 'error', 3000);
        return;
      }
    },
  },
  computed: {
    newSubscriber() {
      const newSubscriber = {
        createdAt: this.$fireModule.firestore.FieldValue.serverTimestamp(),
      };
      if (this.newSub.useNickname) {
        newSubscriber.useNickname = this.newSub.useNickname;
        newSubscriber.nickname = this.newSub.nickname;
      } else {
        newSubscriber.surname = this.newSub.surname;
        newSubscriber.lastname = this.newSub.lastname;
      }
      if (this.newSub.newsletterConsent) {
        newSubscriber.email = this.newSub.email;
        newSubscriber.newsletterConsent = this.newSub.newsletterConsent;
        newSubscriber.timestamp =
          this.$fireModule.firestore.FieldValue.serverTimestamp();
      }
      return newSubscriber;
    },
  },
};
</script>

<style scoped>
.w-input {
  font-size: 0.95rem;
}
</style>
