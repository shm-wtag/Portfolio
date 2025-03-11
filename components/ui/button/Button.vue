<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type ButtonVariants, buttonVariants } from ".";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <div
      v-if="props.variant === 'reveal'"
      class="transition-all w-0 group-hover:w-full h-full bg-primary absolute top-0 left-0 ease-out -z-1 duration-300"
    ></div>
    <span v-if="props.variant === 'reveal'" class="z-10 flex items-center">
      <slot />
    </span>
    <slot v-else />
  </Primitive>
</template>
