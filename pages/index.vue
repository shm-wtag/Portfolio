<script lang="ts" setup>
const showFullMenu = ref(false);

const openFullMenu = () => {
  showFullMenu.value = true;
};

const closeFullMenu = () => {
  showFullMenu.value = false;
};
</script>

<template>
  <div class="bg-primary">
    <FullMenuBar v-if="showFullMenu" @close="closeFullMenu" />
    <MenuBar v-else @click="openFullMenu" />

    <HeroSection class="px-16" />
  </div>

  <DesignSection />

  <YearsSection />

  <BuildSection />

  <MessageSection />

  <FooterSection />
</template>
