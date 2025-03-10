<script lang="ts" setup>
const emtis = defineEmits(["close"]);
</script>

<template>
  <div class="relative">
    <MenuBar variant="full" @click="$emit('close')" />

    <div
      class="h-screen bg-white absolute top-0 bottom-0 left-0 right-0 py-32 px-16 space-y-2"
    >
      <Button variant="custom" class="">My Work</Button>
      <Button variant="custom">My Shelf</Button>
      <Button variant="custom">My Resume</Button>

      <h1 class="uppercase pt-24 text-zinc-300 text-2xl">Say Hello</h1>

      <Button variant="custom">hello@maruf.safique</Button>
      <Button variant="custom">t.me@maruf.safique</Button>

      <div class="flex gap-6 w-full pt-24">
        <Button variant="custom">TW</Button>
        <Button variant="custom">GH</Button>
        <Button variant="custom">LN</Button>
        <Button variant="custom">YT</Button>
      </div>

      <a
        class="absolute bottom-2 text-blue-500 underline lowercase"
        href="https://olaolu.dev/"
        target="_blank"
        >Portfolio</a
      >
    </div>
  </div>
</template>
