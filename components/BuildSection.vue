<script lang="ts" setup>
import { translateYStagger } from "~/composable/translate";

translateYStagger(".build-write");
</script>

<template>
  <div id="build">
    <Container class="pt-20 sm:h-screen lg:pt-80">
      <div class="bg-white lg:flex lg:justify-between build-write">
        <div class="p-10 space-y-4 lg:p-20 lg:w-1/2 lg:space-y-8">
          <h1 class="text-3xl text-primary font-semibold lg:text-4xl a-item">
            I build & <br />
            design stuff
          </h1>
          <p class="text-sm font-light lg:text-base a-item">
            Open source projects, <br />
            web apps and experimentals.
          </p>
          <Button variant="reveal" size="revealxl">
            See my work
            <Icon
              name="svg:logn-arrow-righ"
              class="text-xs items-center ml-3 group-hover:text-white"
            />
          </Button>
        </div>

        <Separator class="bg-primary lg:hidden" />
        <Separator
          class="bg-primary lg:h-[400px] hidden lg:flex"
          orientation="vertical"
        />

        <div class="p-10 space-y-4 lg:p-20 lg:w-1/2 lg:space-y-8">
          <h1 class="text-3xl text-primary font-semibold lg:text-4xl a-item">
            I write, <br />
            sometimes
          </h1>
          <p class="text-sm font-light lg:text-base a-item">
            About design, <br />
            frontend dev, learning and life.
          </p>
          <Button variant="reveal" size="revealxl">
            Read my article
            <Icon
              name="svg:logn-arrow-righ"
              class="text-xs items-center ml-3 group-hover:text-white"
            />
          </Button>
        </div>
      </div>
    </Container>
  </div>
</template>
