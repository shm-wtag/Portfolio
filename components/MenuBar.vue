<script lang="ts" setup>
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const emits = defineEmits(["click"]);
const onHamburgerClick = () => {
  emits("click");
};

const menuVairants = cva("", {
  variants: {
    variant: {
      default: "text-secondary",
      full: "text-blue-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
type ButtonVariants = VariantProps<typeof menuVairants>;

interface Props {
  variant?: ButtonVariants["variant"];
}

const porps = defineProps<Props>();
</script>

<template>
  <div
    class="px-8 py-8 flex justify-between absolute w-full z-10 sm:px-32 sm:py-12"
  >
    <h1
      class="text-2xl uppercase sm:text-3xl sm:font-bold"
      :class="cn(menuVairants({ variant }))"
    >
      Maruf
    </h1>

    <ToggleButton @click="onHamburgerClick"> </ToggleButton>
  </div>
</template>
