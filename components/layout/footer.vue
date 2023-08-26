<template>
  <footer class="bg-primary">
    <div
      class="container py-[5.5rem] max-md:flex max-md:flex-col max-md:gap-28"
    >
      <div class="flex justify-between max-md:flex-col max-md:gap-10">
        <Logo />

        <div class="grid w-fit grid-cols-3 gap-5 items-center">
          <div
            v-for="(social, index) in socials"
            :key="index"
            class="w-10 h-10 rounded-full p-3 bg-[rgba(30,30,30,0.2)]"
          >
            <NuxtLink
              :href="social.url"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img :src="social.icon" class="w-full h-full max-w-full" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-3 max-md:order-3">
        <p class="text-sm font-thin text-darkgrey">© 2023 Checkmate, Africa</p>
      </div>

      <ul
        class="flex items-center justify-end max-md:flex-col max-md:items-start max-md:justify-start gap-12 font-light mt-16 max-md:mt-0"
      >
        <li v-for="(link, index) in nav" :key="index">
          <NuxtLink
            :href="link.url"
            :target="link.external ? '_blank' : undefined"
            rel="noreferrer noopener"
            class="text-base text-white font-light"
            >{{ link.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const nav = [
  { title: 'Partnerships', url: '#', external: false },
  { title: 'Sponsorships', url: '#', external: false },
  { title: 'Report Abuse', url: '/report-abuse', external: false },
]

const socials = [
  {
    title: 'twitter',
    url: 'https://twitter.com/checkmateafrica',
    icon: '/svgs/twitter.svg',
  },
  {
    title: 'linked in',
    url: 'https://www.linkedin.com/company/checkmate-africa',
    icon: '/svgs/linkedin.svg',
  },
  {
    title: 'github',
    url: 'https://github.com/checkmate-africa',
    icon: '/svgs/github.svg',
  },
]
</script>
