<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-accent text-accent-foreground">
    <div class="mb-20 space-y-10 sm:grid sm:grid-cols-2 sm:gap-16">
      <div class="space-y-2 flex flex-col items-start">
        <h3 class="uppercase text-gray-400 text-sm">Say hello</h3>
        <Button variant="link">hello@maruf.safique</Button>
        <Button variant="link">t.me@maruf.safique</Button>
      </div>
      <div class="space-y-2 flex flex-col items-start">
        <Button variant="link">My Work</Button>
        <Button variant="link">My Shelf</Button>
        <Button variant="link">My Resume</Button>
      </div>
    </div>

    <div>
      <Separator class="w-full bg-lime-500 mt-8 mb-2" />

      <div class="gap-6 items-center w-full flex justify-between">
        <div>
          <p class="w-44 text-lime-500">&#169; Maruf Shafique {{ year }}</p>
        </div>
        <div class="space-x-4 hidden sm:flex">
          <Button variant="link">TW</Button>
          <Button variant="link">GH</Button>
          <Button variant="link">LN</Button>
          <Button variant="link">YT</Button>
        </div>
      </div>
    </div>
  </footer>
</template>
