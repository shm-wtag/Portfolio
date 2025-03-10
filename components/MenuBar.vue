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
      default: "text-lime-300",
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
  <div class="px-8 py-8 flex justify-between absolute w-full z-10">
    <h1 class="text-2xl uppercase" :class="cn(menuVairants({ variant }))">
      Maruf
    </h1>
    <Icon
      class="text-4xl hover:cursor-pointer"
      :class="cn(menuVairants({ variant }))"
      name="mdi:close"
      @click="onHamburgerClick"
    />
  </div>
</template>
