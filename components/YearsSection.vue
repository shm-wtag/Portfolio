<script lang="ts" setup>
import { translateY } from "~/composable/translate";

translateY(".years-desc h1", [150, 0]);
translateY(".fst", [100, 0]);
translateY(".snd", [80, 0]);
translateY(".trd", [60, 0]);
translateY(".fth", [60, 0]);
translateY(".fth", [40, 0]);
</script>

<template>
  <div id="years" class="bg-primary py-20 flex sm:h-screen">
    <div class="w-4/5 mx-auto sm:w-3/4 sm:pt-44">
      <div
        class="space-y-4 text-gray-200 font-light text-sm sm:text-base sm:w-1/2 years-desc"
      >
        <h1 class="text-4xl text-secondary font-semibold sm:text-5xl sm:pb-4">
          Over the years,
        </h1>
        <p class="fst">
          I've built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences.
        </p>

        <p class="snd">
          Currently, I work at Shopify as a Senior Frontend Engineer crafting
          thoughtful and inclusive experiences that adhere to web standards for
          over 3 million merchants across the world.
        </p>

        <p class="trd">
          Before now, I was Principal Frontend Engineer at hellotax, where I
          worked on a suite of tools and services tailored towards automated VAT
          compliance for multi-channel sellers in Europe.
        </p>

        <p class="fth">
          Prior to hellotax, I was Senior frontend engineering consultant with
          Pixel2HTML, building JavaScript applications and interfaces for orgs
          and individuals.
        </p>

        <p class="fth">
          I once also led the frontend team at Conectar, an e-learning startup
          through building multiple React applications into a single robust
          learning platform.
        </p>
      </div>
      <div class="w-1/2"></div>
    </div>
  </div>
</template>
