<script lang="ts" setup>
const emtis = defineEmits(["close"]);
</script>

<template>
  <div class="relative">
    <MenuBar variant="full" @click="$emit('close')" />

    <div
      class="h-screen w-screen bg-white fixed py-32 px-16 space-y-2 z-10 transition-all duration-150 sm:h-[500px] sm:w-[400px] sm:absolute sm:right-24 sm:top-8 sm:py-8 sm:rounded sm:shadow"
    >
      <Button variant="custom" class="">Home</Button>
      <Button variant="custom">My Shelf</Button>
      <Button variant="custom">My Resume</Button>

      <h1 class="uppercase pt-24 text-zinc-300 text-2xl sm:pt-3 sm:text-lg">
        Say Hello
      </h1>

      <Button variant="custom">hello@maruf.safique</Button>
      <Button variant="custom">t.me@maruf.safique</Button>

      <div class="flex gap-6 w-full pt-24 sm:pt-8">
        <Button variant="custom">TW</Button>
        <Button variant="custom">GH</Button>
        <Button variant="custom">LN</Button>
        <Button variant="custom">YT</Button>
      </div>

      <a
        v-if="false"
        class="absolute bottom-2 text-blue-500 underline lowercase"
        href="https://olaolu.dev/"
        target="_blank"
        >Portfolio</a
      >
    </div>
  </div>
</template>
