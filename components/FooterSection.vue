<script lang="ts" setup>
import { translateY } from "~/composable/translate";

const year = new Date().getFullYear();

translateY(".hello", [300, 0], [0, 1], 1.2);
translateY(".copy", [80, 0]);
</script>

<template>
  <footer id="footer" class="bg-accent text-accent-foreground sm:h-screen">
    <div class="py-20 mx-auto w-4/5 sm:w-3/4 sm:pt-52">
      <div class="pb-20 space-y-10 sm:flex sm:mb-44 hello">
        <div
          class="space-y-2 flex flex-col items-start w-64 mr-96 sm:space-y-4"
        >
          <h3 class="uppercase text-gray-400 text-sm sm:text-base">
            Say hello
          </h3>
          <Button variant="link">hello@maruf.safique</Button>
          <Button variant="link">t.me@maruf.safique</Button>
        </div>
        <div class="space-y-2 flex flex-col items-start sm:space-y-4">
          <Button
            variant="link"
            class="after:content-[''] after:w-[20%] after:min-w-[1em] after:h-full hover:after:bg-blue-400"
            >My Work</Button
          >
          <Button variant="link">My Shelf</Button>
          <Button variant="link">My Resume</Button>
        </div>
      </div>

      <div class="copy">
        <Separator class="w-full bg-accent-foreground mt-8 mb-2 sm:mb-4" />

        <div class="gap-6 items-center w-full flex justify-between">
          <div>
            <p class="w-44">&#169; Maruf Shafique {{ year }}</p>
          </div>
          <div class="hidden space-x-6 sm:flex">
            <Button variant="link">TW</Button>
            <Button variant="link">GH</Button>
            <Button variant="link">LN</Button>
            <Button variant="link">YT</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
