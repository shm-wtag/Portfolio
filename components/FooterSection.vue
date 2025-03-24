<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import { translateYStagger } from "~/composable/translate";

const year = new Date().getFullYear();

translateYStagger(".footer", 0.08);

const footerVariant = cva("bg-accent text-accent-foreground footer", {
  variants: {
    variant: {
      default: "sm:h-screen sm:pt-52",
      half: "sm:h-1/3",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const helloVariant = cva("space-y-10 sm:flex", {
  variants: {
    variant: {
      default: "sm:mb-44",
      half: "sm:mb-12",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type Variant = VariantProps<typeof footerVariant>;

interface Props {
  variant?: Variant["variant"];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
  <footer id="footer" :class="cn(footerVariant({ variant }), props.class)">
    <Container variant="section" class="py-16 mb-0">
      <div :class="cn(helloVariant({ variant }))">
        <div
          class="space-y-2 flex flex-col items-start w-64 mr-96 sm:space-y-4"
        >
          <h3 class="uppercase text-gray-400 text-sm sm:text-base a-item">
            Say hello
          </h3>
          <Button variant="link" class="a-item">hello@maruf.safique</Button>
          <Button variant="link" class="a-item">t.me@maruf.safique</Button>
        </div>

        <div class="space-y-2 flex flex-col items-start sm:space-y-4">
          <Button
            variant="link"
            class="a-item after:content-[''] after:w-[20%] after:min-w-[1em] after:h-full hover:after:bg-blue-400"
            >My Work</Button
          >
          <Button class="a-item" variant="link">My Shelf</Button>
          <Button class="a-item" variant="link">My Resume</Button>
        </div>
      </div>

      <div>
        <Separator
          class="w-full bg-accent-foreground mt-8 mb-2 sm:mb-4 a-item"
        />

        <div class="gap-6 items-center w-full flex justify-between">
          <div>
            <p class="w-44 a-item">&#169; Maruf Shafique {{ year }}</p>
          </div>
          <div class="hidden space-x-6 sm:flex">
            <Button class="a-item" variant="link">TW</Button>
            <Button class="a-item" variant="link">GH</Button>
            <Button class="a-item" variant="link">LN</Button>
            <Button class="a-item" variant="link">YT</Button>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>
