<script lang="ts" setup>
import { getById } from "~/composable/work-data";

const route = useRoute();
const project = getById(route.params.title as string);
</script>

<template>
  <Container class="space-y-12" :style="{ '--background': '#f5f4fc' }">
    <WorkHeader class="text-center">
      <h1
        class="font-semibold text-3xl text-stone-600 hidden sm:block"
        v-text="project?.title"
      ></h1>
    </WorkHeader>

    <Carousel
      class="relative mx-auto w-full max-w-5xl"
      :opts="{ align: 'start' }"
    >
      <CarouselContent>
        <CarouselItem v-for="image in project?.images">
          <img class="w-full" :src="image" alt="project image" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <div class="text-foreground text-lg">
      <p v-html="project?.desc"></p>
    </div>
  </Container>

  <FooterSection />
</template>

<style>
:root {
  --background: 247.5 57.14% 97.25%;
  --foreground: 0 0% 27.84%;
}
</style>
