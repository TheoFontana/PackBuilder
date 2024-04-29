// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules:["nuxt-vuefire", "@nuxt/ui"],
  ui: {
    icons: ['devicon']
  },
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true

    },
    config: {
      apiKey: "AIzaSyBDEiyRrwiV2_BLcoUkWBN_HaHogmA4C_g",
      authDomain: "pack-builder-421613.firebaseapp.com",
      projectId: "pack-builder-421613",
      storageBucket: "pack-builder-421613.appspot.com",
      messagingSenderId: "588844309464",
      appId: "1:588844309464:web:580e48cf3e992a340930ad"
    },
  },
})