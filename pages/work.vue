<script setup lang="ts">
import { projects } from "~/composable/work-data";
</script>

<template>
  <div class="w-3/4 mx-auto space-y-10 mb-20 xl:w-2/3 2xl:w-3/5">
    <div class="text-center mt-[10%]">
      <h1 class="font-semibold text-3xl text-stone-600 hidden sm:block">
        <span class="text-stone-500">/</span>
        Work
        <span class="text-stone-500 text-5xl">.</span>
      </h1>

      <p class="mt-3 text-gray-600">Selected work I've taken on in the past</p>
    </div>

    <div
      class="space-y-5 gap-5 md:space-y-0 md:grid grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="item in projects"
        class="bg-white rounded-md cursor-pointer duration-150 shadow-sm hover:-translate-y-1 hover:shadow-lg"
        :key="item.title"
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
      </div>
    </div>
  </div>

  <FooterSection />
</template>
