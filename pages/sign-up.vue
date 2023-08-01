<template>
  <div>
    <main
      class="container min-h-[100vh] py-20 max-sm:py-16 flex flex-col items-center max-sm:justify-center gap-8 bg-[#F8F8F8]"
    >
      <h1 class="text-3xl text-center text-primary font-josefin font-bold">
        Join Checkmate
      </h1>

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

          <div
            v-if="field.options"
            class="w-full border border-solid border-[#ECECEC] bg-white overflow-hidden px-4 rounded-[50px]"
          >
            <select
              :id="field.name"
              required
              :name="field.name"
              :class="
                clsx('outline-none py-4 w-full', {
                  'text-darkgrey': !field.value,
                })
              "
              @input="updateField($event, field)"
            >
              <option disabled selected :value="null">
                {{ field.placeholder }}
              </option>
              <option
                v-for="(option, i) in field.options"
                :key="i"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <input
            v-else
            :id="field.name"
            :name="field.name"
            :placeholder="field.placeholder"
            class="placeholder:text-darkgrey border border-[#ECECEC] p-4 rounded-[50px]"
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
import { clsx } from 'clsx'
const { fields, updateField } = useSignupForm()

const submit = () => {
  console.log(fields)
}
</script>
