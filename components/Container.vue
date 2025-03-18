<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";

interface Props {
  variant?: Variants["variant"];
  size?: Variants["size"];
  position?: Variants["position"];
  class?: HTMLAttributes["class"];
}

const variants = cva("w-3/4 mx-auto mb-20", {
  variants: {
    variant: {
      default: "space-y-10 xl:w-2/3 2xl:w-3/5",
      section: "w-4/5 pt-32 pb-16 sm:w-3/4",
    },
    size: {
      sm: "sm:w-3/5",
      default: "",
      lg: "",
      xl: "",
    },
    position: {
      default: "",
      relative: "relative",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      position: "default",
    },
  },
});

type Variants = VariantProps<typeof variants>;

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(variants({ variant, size, position }), props.class)">
    <slot />
  </div>
</template>
