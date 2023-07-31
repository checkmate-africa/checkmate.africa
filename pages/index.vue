<template>
  <div>
    <main class="relative overflow-hidden">
      <section
        class="h-[31rem] bg-primary flex flex-col justify-end bg-cover bg-no-repeat bg-[url('assets/imgs/hero-bg.png')]"
      >
        <Header role="banner" transparent />

        <div class="container flex justify-between h-[calc(31rem-6rem)]">
          <div
            class="flex w-full max-w-[70rem] justify-between items-center mt-[-2rem] max-md:flex-col max-md:justify-center max-md:items-start max-md:gap-8"
          >
            <h1
              class="font-josefin text-[2.7rem] max-md:text-[2rem] leading-[140%] text-white font-semibold"
            >
              Unlock your
              <span class="text-secondary">productivity</span> <br />
              potential today!
            </h1>

            <Button>Join Community</Button>
          </div>
        </div>
      </section>

      <section
        class="container py-[6.75rem] flex flex-col gap-[7rem] max-sm:gap-[4rem] max-sm:py-[4rem]"
      >
        <div class="flex flex-col gap-[2.75rem]">
          <span
            class="w-[10rem] max-md:w-[9rem] h-[1.87rem] bg-tetiary rounded-[50px] grid place-content-center text-black text-sm font-bold"
          >
            Activities
          </span>

          <div
            class="flex items-center max-md:flex-col max-md:items-start max-md:gap-6"
          >
            <div
              class="border-r-2 max-md:border-none max-md:pr-0 border-solid border-r-[#f4f4f4] shrink-0 pr-24"
            >
              <h2
                class="text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.7rem] leading-[140%] font-josefin font-bold"
              >
                What goes on <br />
                around here.
              </h2>
            </div>

            <div class="grow pl-24 pr-10 max-md:pl-0 max-md:pr-24 max-sm:pr-10">
              <p
                class="text-black text-lg font-semibold max-md:opacity-70 max-md:leading-[200%]"
              >
                It is a long established fact that a reader will be distracted
                by the readable content. It is a long established fact that a
                reader will be distracted by the readable content.
              </p>
            </div>
          </div>
        </div>

        <div
          class="grid grid-cols-3 gap-[3.37rem] max-lg:gap-[1rem] max-md:flex max-md:justify-center max-md:flex-wrap max-md:gap-x-[2%] max-md:gap-y-[1rem]"
        >
          <article
            v-for="(activity, index) in activities"
            :key="index"
            class="flex flex-col w-full min-h-[36rem] max-sm:min-h-[32rem] bg-primary rounded-[20px] overflow-hidden max-md:w-[49%] max-sm:w-full"
          >
            <figure>
              <NuxtImg
                class="w-full h-[19.4rem] max-sm:h-[17rem] object-cover"
                :src="activity.banner"
              />
            </figure>

            <div
              class="flex grow flex-col gap-4 p-[2.5rem] max-sm:p-[2rem] max-sm:justify-center"
            >
              <h3 class="text-white font-josefin text-2xl max-sm:text-xl">
                {{ activity.title }}
              </h3>
              <p
                class="text-darkgrey text-lg leading-[180%] max-sm:text-base max-sm:leading-[180%] max-sm:font-light"
              >
                {{ activity.description }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        class="container pt-[4.75rem] max-sm:pt-[4rem] pb-[11.5rem] max-sm:pb-[8rem] px-56 flex flex-col gap-9 items-center"
      >
        <blockquote
          class="text-center font-josefin text-[2.5rem] max-w-[62rem] leading-[180%] max-lg:text-[2rem] max-sm:text-xl"
        >
          “As we lose ourselves in the service of others, we find a more
          fulfilling purpose in our own lives”
        </blockquote>

        <Button variant="tetiary"> Volunteer </Button>
      </section>

      <section class="container mb-[11.5rem] max-sm:mb-[4rem]">
        <div
          class="bg-primary py-[7.2rem] max-md:py-[6rem] max-sm:py-[4rem] pl-[4.4rem] pr-[8.8rem] max-lg:px-14 max-sm:px-[2rem] rounded-[20px] flex max-md:flex-col justify-between items-center max-md:items-start max-md:gap-10"
        >
          <div class="flex flex-col gap-6">
            <p class="text-xl font-semibold text-secondary max-sm:text-lg">
              Get Involved
            </p>
            <h2
              class="text-[2.5rem] leading-[150%] font-josefin text-white max-w-[33rem] max-md:max-w-none max-lg:text-[2rem] max-lg:max-w-[25rem] max-sm:text-[1.7rem]"
            >
              Empowering techies to do more and be productive
            </h2>
          </div>
          <Button variant="secondary"> Join Now </Button>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const activities = [
  {
    banner: '/imgs/activity-accountability.png',
    title: 'Accountability Partners',
    description:
      'It is a long established fact that a reader will be distracted by the readable content.',
  },

  {
    banner: '/imgs/activity-focus-rooms.png',
    title: 'Focus Rooms',
    description:
      'It is a long established fact that a reader will be distracted by the readable content.',
  },

  {
    banner: '/imgs/activity-projects.png',
    title: 'Opensource Projects',
    description:
      'It is a long established fact that a reader will be distracted by the readable content.',
  },
]
</script>
