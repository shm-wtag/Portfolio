<script setup lang="ts">
import { projects } from "~/composable/work-data";
</script>

<template>
  <Container>
    <WorkHeader class="mb-12">
      <h1 class="font-semibold text-3xl text-stone-600 hidden sm:block">
        <span class="text-stone-500">/</span>
        Work
        <span class="text-stone-500 text-5xl">.</span>
      </h1>

      <p class="mt-3 text-gray-600">Selected work I've taken on in the past</p>
    </WorkHeader>

    <div
      class="space-y-4 gap-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-12"
    >
      <nuxt-link
        v-for="item in projects"
        class="bg-white block rounded-md cursor-pointer duration-150 shadow-sm hover:-translate-y-1 hover:shadow-lg"
        :key="item.title"
        :to="`/work/${item.id}`"
      >
        <div class="flex justify-center p-10 bg-gray-200 rounded-t-md">
          <img class="w-[150px] h-[50px]" :src="item.image" alt="logo" />
        </div>
        <div class="p-8 space-y-3 shadow">
          <h2 v-text="item.title" class="text-2xl mb-2" />
          <a
            v-text="item.link"
            class="text-blue-500"
            :href="item.link"
            target="_blank"
          />
        </div>
      </nuxt-link>
    </div>
  </Container>

  <FooterSection variant="half" />
</template>
