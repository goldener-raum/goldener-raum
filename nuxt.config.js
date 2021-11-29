export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'goldener-raum',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    baseUrl: process.env.baseUrl || 'http://localhost:3000',
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
          secondary: '#0bd491',
          success: '#0bd491',
          info: '#00B0E0',
          error: '#D4320B',
          warning: '#EBC20C',
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
