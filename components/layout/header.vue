<template>
  <header
    :class="
      clsx('h-24 z-10 relative', {
        'bg-transparent': transparent,
        'bg-primary': !transparent,
      })
    "
  >
    <div
      class="container h-full flex items-center justify-start gap-12 flex-wrap"
    >
      <Logo class="z-20" />

      <nav
        :class="
          clsx('order-3 max-md:w-full', {
            'max-md:hidden': !navOpen,
            'max-md:absolute max-md:top-0 max-md:h-[100vh] max-md:bg-black max-md:left-0':
              navOpen,
          })
        "
      >
        <ul
          class="flex items-center gap-12 font-light max-md:flex-col max-md:px-8 max-md:w-full max-md:mt-24 max-md:pt-12"
        >
          <li v-for="(link, index) in nav" :key="index">
            <a
              :href="link.url"
              class="text-base text-grey max-md:font-extralight max-md:font-josefin max-md:uppercase"
              >{{ link.title }}</a
            >
          </li>
        </ul>
      </nav>

      <Button
        variant="ghost"
        class="flex flex-col gap-1 ml-auto md:hidden z-20 py-2"
        @click="toggleNav"
      >
        <span
          :class="
            clsx('h-[1.5px] bg-white transition-all', {
              'w-8': !navOpen,
              'relative  rotate-45 w-6 bottom-[calc(-0.75px-0.125rem)]':
                navOpen,
            })
          "
        />
        <span
          :class="
            clsx('h-[1.5px] bg-white transition-all', {
              'w-8': !navOpen,
              'relative -rotate-45 w-6 top-[calc(-0.75px-0.125rem)]': navOpen,
            })
          "
        />
      </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { clsx } from 'clsx'

defineProps<{
  transparent?: boolean
}>()

const nav = [
  { title: 'About', url: '/about' },
  { title: 'Team', url: '/team' },
  { title: 'Events', url: '/events' },
  { title: 'Community Guidelines', url: '/guidelines' },
]

const navOpen = ref(false)
const toggleNav = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  navOpen.value = !navOpen.value
  document.body.style.overflow = navOpen.value ? 'hidden' : 'auto'
}
</script>
