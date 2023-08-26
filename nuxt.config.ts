export default defineNuxtConfig({
  app: {
    head: {
      title: 'Checkmate Africa',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      meta: [
        {
          name: 'description',
          content:
            'Helping creatives across Africa unlock boundless potential.',
        },
        {
          name: 'keywords',
          content: 'Community, Tech, Creatives',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'theme-color',
          content: '#202A3C',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/kadet/image/upload/q_100/v1693072456/checkmate/Group_55_mhibob.svg',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://checkmateafrica.org/',
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo'],
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
    autoImportPath: 'public/svgs',
    defaultImport: 'component',
    global: false,
  },
})
