<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-purple-900">
    <div class="grid grid-cols-2 gap-16">
      <div class="space-y-2">
        <h3 class="uppercase text-gray-400">Say hello</h3>
        <Button variant="custom">hello@maruf.safique</Button>
        <Button variant="custom">t.me@maruf.safique</Button>
      </div>
      <div class="space-y-2">
        <Button variant="custom" class="">My Work</Button>
        <Button variant="custom">My Shelf</Button>
        <Button variant="custom">My Resume</Button>
      </div>
    </div>

    <div>
      <Separator class="w-full bg-lime-500 mt-8 mb-2" />

      <div class="gap-6 items-center w-full flex justify-between">
        <div>
          <p class="w-44 text-lime-500">&#169; Maruf Shafique {{ year }}</p>
        </div>
        <div class="flex space-x-4">
          <Button variant="custom">TW</Button>
          <Button variant="custom">GH</Button>
          <Button variant="custom">LN</Button>
          <Button variant="custom">YT</Button>
        </div>
      </div>
    </div>
  </footer>
</template>
