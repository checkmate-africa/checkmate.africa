<template>
  <button
    :class="
      clsx(
        'w-fit flex items-center justify-center text-base max-sm:text-sm font-bold',
        {
          'w-full': fullWidth,
          'bg-secondary text-black': variant === 'secondary',
          'bg-white text-black': variant === 'primary',
          'bg-transparent border-secondary border-2 border-solid':
            variant === 'tetiary',
          'h-14 min-w-[15rem] px-8 max-sm:min-w-[10rem] max-sm:h-[3.2rem] rounded-[50px]':
            variant !== 'ghost',
          'bg-tranparent border-none px-0 h-fit outline-none':
            variant === 'ghost',
        },
      )
    "
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { clsx } from 'clsx'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tetiary' | 'ghost'
  fullWidth?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
})
</script>
