<script lang="ts" setup>
import { translateYStagger } from "~/composable/translate";

const year = new Date().getFullYear();

translateYStagger(".footer", 0.08);
</script>

<template>
  <footer
    id="footer"
    class="bg-accent text-accent-foreground sm:h-screen footer"
  >
    <Container variant="section" class="py-20 sm:pt-52">
      <div class="pb-20 space-y-10 sm:flex sm:mb-44">
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
