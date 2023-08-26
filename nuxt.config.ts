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
            'Community of creatives across Africa helping each other unlock boundless potential with accountability partners, focus rooms, open-source projects and more',
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
            'https://res.cloudinary.com/kadet/image/upload/q_100/f_png/v1693073543/checkmate/Group_55_1_jpeufq.svg',
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
