const descriptionMeta =
  'Die Welt zu einem schöneren und nachhaltigeren Ort machen – dafür unterstützen sich Menschen gegenseitig hier im goldenen Raum.';
const imageMeta = `${
  process.env.baseUrl || 'http://localhost:3000/'
}meta/preview.png`;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Goldener Raum',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Goldener Raum' },
      { hid: 'og:title', name: 'og:title', content: 'Goldener Raum' },
      {
        hid: 'description',
        name: 'description',
        content: descriptionMeta,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: descriptionMeta,
      },
      {
        hid: 'image',
        property: 'image',
        content: imageMeta,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: imageMeta,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: imageMeta,
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hide: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    baseUrl: process.env.baseUrl || 'http://localhost:3000/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      '@wave-ui/nuxt',
      {
        colors: {
          primary: '#565656',
          secondary: '#33408e',
          success: '#538F25',
          info: '#33408e',
          error: '#DB2339',
          warning: '#f4bd51',
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [['@nuxtjs/firebase']],

  // Firebase config
  firebase: {
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    },
    services: {
      firestore: true,
    },
    firestore: {
      memoryOnly: false,
      chunkName:
        process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]',
      enablePersistence: true,
      emulatorPort: 8080,
      emulatorHost: 'localhost',
      settings: {
        // Firestore Settings - currently only works in SPA mode
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
};
