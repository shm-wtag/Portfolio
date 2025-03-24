<script lang="ts" setup>
import { translateYStagger } from "~/composable/translate";

translateYStagger(".years-desc");
</script>

<template>
  <div id="years" class="bg-primary py-20 flex sm:h-screen">
    <Container class="sm:pt-44">
      <div
        class="space-y-4 text-gray-200 font-light text-sm sm:text-base sm:w-1/2 years-desc"
      >
        <h1
          class="text-4xl text-secondary font-semibold sm:text-5xl sm:pb-4 a-item"
        >
          Over the years,
        </h1>
        <p class="a-item">
          I've built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences.
        </p>

        <p class="a-item">
          Currently, I work at Shopify as a Senior Frontend Engineer crafting
          thoughtful and inclusive experiences that adhere to web standards for
          over 3 million merchants across the world.
        </p>

        <p class="a-item">
          Before now, I was Principal Frontend Engineer at hellotax, where I
          worked on a suite of tools and services tailored towards automated VAT
          compliance for multi-channel sellers in Europe.
        </p>

        <p class="a-item">
          Prior to hellotax, I was Senior frontend engineering consultant with
          Pixel2HTML, building JavaScript applications and interfaces for orgs
          and individuals.
        </p>

        <p class="a-item">
          I once also led the frontend team at Conectar, an e-learning startup
          through building multiple React applications into a single robust
          learning platform.
        </p>
      </div>
      <div class="w-1/2"></div>
    </Container>
  </div>
</template>
