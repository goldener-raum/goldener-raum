<template>
  <div class="pa2" style="background: white">
    <!-- twingle -->
    <iframe
      src="https://spenden.twingle.de/goldener-raum/goldener-raum/tw619cb801d109e/widget"
      style="
        width: 100%;
        border: none;
        overflow: hidden;
        height: 450px;
        position: relative;
        z-index: 2;
      "
    />
    <script src="https://spenden.twingle.de/embed/generic"></script>
    <!-- twingle -->
    <w-divider class="mx6">ODER</w-divider>
    <w-flex class="justify-space-around" v-if="!showBankDetails">
      <w-button
        @click="showBankDetails = true"
        bg-color="secondary"
        color="white"
        class="pa6 my6"
        lg
      >
        Bankverbindung anzeigen
      </w-button>
    </w-flex>
    <div class="pa8" v-else>
      <h2 class="mb6">Bankverbindung für deine Unterstützung:</h2>
      <LabeledText :label="'Zahlungsempfänger'" :content="'Goldener Raum'" />
      <LabeledText :label="'IBAN'" :content="'DE48 4306 0967 7918 8877 00'" />
      <LabeledText :label="'BIC'" :content="'GENODEM1GLS'" />
      <LabeledText
        :label="'Verwendungszweck'"
        :content="'Goldener Raum (2183SN8)'"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBankDetails: false,
    };
  },
};
</script>

<style scoped></style>
