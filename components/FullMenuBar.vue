<script lang="ts" setup>
import { animate, type AnimationSequence, stagger } from "motion";
import { onClickOutside } from "@vueuse/core";

const showMenu = ref(false);
const emtis = defineEmits(["close"]);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const menu = useTemplateRef<HTMLElement>("menu");
onClickOutside(menu, () => {
  showMenu.value = false;
});

async function onEnter(el: Element, onComplete: () => void) {
  const sequens: AnimationSequence = [
    [el, { scale: 1, opacity: [0, 1] }, { duration: 0.1, ease: "linear" }],
    [
      el.querySelectorAll(".a-item"),
      { y: [50, 0], opacity: [0, 1] },
      { delay: stagger(0.06), ease: "linear" },
    ],
  ];
  await animate(sequens);

  onComplete();
}

const onLeave = async (el: Element, onComplete: () => void) => {
  await animate(el, { opacity: [1, 0], scale: [1, 0] }, { duration: 0.3 });

  onComplete();
};

const onBeforeEnter = (el: Element) => {
  el.classList.add("scale-75");
};
</script>

<template>
  <div ref="menu" class="relative">
    <MenuBar variant="full" :menu-open="showMenu" @click="toggleMenu" />

    <Transition
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div
        v-if="showMenu"
        class="h-screen w-screen bg-white fixed py-32 px-16 space-y-2 z-[9] transition-all duration-150 sm:pt-20 sm:h-[500px] sm:w-[400px] sm:absolute sm:right-24 sm:top-6 sm:py-8 sm:rounded sm:shadow"
      >
        <Button class="a-item" variant="custom">Home</Button>
        <Button class="a-item" variant="custom">My Shelf</Button>
        <Button class="a-item" variant="custom">My Resume</Button>

        <h1
          class="a-item uppercase pt-24 text-zinc-300 text-2xl sm:pt-3 sm:text-lg"
        >
          Say Hello
        </h1>

        <Button class="a-item" variant="custom">hello@maruf.safique</Button>
        <Button class="a-item" variant="custom">t.me@maruf.safique</Button>

        <div class="flex gap-6 w-full pt-24 sm:pt-8">
          <Button class="a-item" variant="custom">TW</Button>
          <Button class="a-item" variant="custom">GH</Button>
          <Button class="a-item" variant="custom">LN</Button>
          <Button class="a-item" variant="custom">YT</Button>
        </div>

        <a
          v-if="false"
          class="absolute bottom-2 text-blue-500 underline lowercase"
          href="https://olaolu.dev/"
          target="_blank"
          >Portfolio</a
        >
      </div>
    </Transition>
  </div>
</template>
