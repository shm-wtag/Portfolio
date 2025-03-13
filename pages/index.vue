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
  <div id="hero" class="bg-primary relative sm:snap-start">
    <FullMenuBar v-if="showFullMenu" @close="closeFullMenu" />
    <MenuBar v-else @click="openFullMenu" />

    <HeroSection />
  </div>

  <DesignSection class="sm:snap-start" />

  <YearsSection class="sm:snap-start" />

  <BuildSection class="sm:snap-start" />

  <MessageSection class="sm:snap-start" />

  <FooterSection class="sm:snap-start" />
</template>
