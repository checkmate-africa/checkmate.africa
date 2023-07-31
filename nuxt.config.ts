export default defineNuxtConfig({
  app: {
    head: {
      title: 'Checkmate Africa - Delivery partner for your business',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      meta: [
        {
          name: 'description',
          content: 'Find accountability partners and stay productive.',
        },
        {
          name: 'keywords',
          content:
            'Delivery, Package Delivery, Logistics, Fast Delivery, Reliable Delivery',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://pickr.ng',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@nuxt/image'],
  css: ['@/style/reset.css', '@/style/globals.css'],
  components: [
    {
      path: '@/components/common',
      pathPrefix: false,
    },
    {
      path: '@/components/layout',
      pathPrefix: false,
    },
  ],

  svgo: {
    autoImportPath: '@/assets/svgs/',
    defaultImport: 'component',
    global: false,
  },
  image: {
    format: ['webp', 'png', 'svg'],
    dir: 'assets',
  },
})
