<script lang="ts" setup>
import { translateY } from "~/composable/translate";

translateY(".design-engineer h1", [50, 0]);
translateY(".design-engineer p", [20, 0]);
</script>

<template>
  <Container
    id="design"
    variant="section"
    position="relative"
    class="py-20 sm:h-screen sm:pt-72"
  >
    <Icon
      name="svg:design-bg"
      class="hidden absolute top-[500px] left-[250px] h-[350px] w-[200px] sm:block"
    />
    <Icon
      name="svg:engineering-bg"
      class="hidden absolute top-[180px] right-[130px] h-[330px] w-[360px] sm:block"
    />
    <div
      class="font-light text-sm sm:text-base sm:flex sm:gap-32 sm:justify-between design-engineer"
    >
      <div class="sm:w-2/5">
        <h1
          class="text-4xl text-primary font-semibold mb-4 sm:text-5xl sm:mb-6"
        >
          Design
        </h1>
        <p>
          I'm probably not the typical designer positioned behind an Illustrator
          artboard adjusting pixels, but I design. Immersed in stylesheets
          tweaking font sizes and contemplating layouts is where you'll find me
          (~_^). I'm committed to creating fluent user experiences while staying
          fashionable.
        </p>
      </div>
      <div class="mt-12 sm:w-2/5 sm:mt-44">
        <h1
          class="text-4xl text-primary font-semibold mb-4 sm:text-5xl sm:mb-6"
        >
          Engineering
        </h1>
        <p>
          In building JavaScript applications, I'm equipped with just the right
          tools, and can absolutely function independently of them to deliver
          fast, resilient solutions optimized for scale — performance and
          scalabilty are priorities on my radar.
        </p>
      </div>
    </div>
  </Container>
</template>
