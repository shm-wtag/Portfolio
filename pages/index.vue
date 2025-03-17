<script lang="ts" setup>
const showFullMenu = ref(false);

const openFullMenu = () => {
  showFullMenu.value = true;
};

const closeFullMenu = () => {
  showFullMenu.value = false;
};

useHead({
  htmlAttrs: {
    class: "sm:snap-y sm:snap-mandatory scroll-smooth",
  },
});
</script>

<template>
  <NavBullet></NavBullet>
  <div id="hero" class="bg-primary relative sm:snap-start span-container">
    <Icon
      name="svg:outline"
      class="hidden sm:block absolute h-[1350px] w-[320px]"
    />
    <FullMenuBar v-if="showFullMenu" @close="closeFullMenu" />
    <MenuBar v-else @click="openFullMenu" />

    <HeroSection />
  </div>

  <DesignSection class="sm:snap-start span-container" />

  <YearsSection class="sm:snap-start span-container" />

  <BuildSection class="sm:snap-start span-container" />

  <MessageSection class="sm:snap-start span-container" />

  <FooterSection class="sm:snap-start span-container" />
</template>
