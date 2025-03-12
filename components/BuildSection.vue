<template>
  <div class="pt-20 sm:h-screen sm:pt-80">
    <div class="bg-white mx-auto w-4/5 sm:flex">
      <div class="p-16 space-y-4">
        <h1 class="text-3xl text-primary font-semibold sm:text-4xl">
          I build & <br />
          design stuff
        </h1>
        <p class="text-sm font-light sm:text-base">
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

      <!-- orientation="vertical" -->
      <Separator class="bg-primary" />

      <div class="p-16 space-y-4">
        <h1 class="text-3xl text-primary font-semibold sm:text-4xl">
          I write, <br />
          sometimes
        </h1>
        <p class="text-sm font-light sm:text-base">
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
  </div>
</template>
