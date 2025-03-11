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

  <DesignSection class="px-16 py-32" />

  <YearsSection class="px-16 py-32" />

  <BuildSection class="py-20 mt-20" />

  <MessageSection class="px-16 py-32" />

  <FooterSection class="px-16 py-16" />
</template>
