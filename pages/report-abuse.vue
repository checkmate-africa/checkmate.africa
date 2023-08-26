<template>
  <div>
    <main
      class="container min-h-[100vh] py-20 max-sm:py-16 flex flex-col items-center max-sm:justify-center gap-8 bg-[#F8F8F8]"
    >
      <div class="flex flex-col gap-4">
        <h1 class="text-3xl text-center text-primary font-josefin font-bold">
          Report Abuse
        </h1>
        <p class="text-center font-semibold">
          We strive to keep our community safe for everyone
        </p>
      </div>

      <form
        class="py-12 px-10 w-[38rem] mx-auto flex flex-col gap-8 max-md:w-full max-sm:px-0 max-sm:bg-[#F8F8F8] max-sm:shadow-none max-sm:py-6"
        @submit.prevent="submit"
      >
        <div
          v-for="(field, index) in fields"
          :key="index"
          class="flex flex-col gap-2"
        >
          <label :for="field.name" class="text-primary font-semibold text-sm">
            {{ field.label }}
          </label>

          <textarea
            v-if="field.type === 'textarea'"
            :id="field.name"
            required
            :name="field.name"
            :placeholder="field.placeholder"
            class="placeholder:text-darkgrey border focus:border-secondary border-[#ECECEC] p-4 rounded-[20px] h-14 resize-none min-h-[10rem] outline-none transition-all"
            @input="updateField($event, field)"
          />

          <input
            v-else
            :id="field.name"
            required
            :name="field.name"
            :placeholder="field.placeholder"
            class="placeholder:text-darkgrey border focus:border-secondary border-[#ECECEC] p-4 rounded-[50px] h-14 outline-none transition-all"
            @input="updateField($event, field)"
          />
        </div>

        <Button full-width variant="secondary">Proceed</Button>
      </form>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { fields, updateField } = useSignupForm()

const submit = () => {
  console.log(fields)
}
</script>
