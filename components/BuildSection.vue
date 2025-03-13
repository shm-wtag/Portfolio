<template>
  <div id="build" class="pt-20 sm:h-screen lg:pt-80">
    <div class="bg-white mx-auto w-4/5 lg:w-3/4 lg:flex lg:justify-between">
      <div class="p-10 space-y-4 lg:p-20 lg:w-1/2 lg:space-y-8">
        <h1 class="text-3xl text-primary font-semibold lg:text-4xl">
          I build & <br />
          design stuff
        </h1>
        <p class="text-sm font-light lg:text-base">
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
        <h1 class="text-3xl text-primary font-semibold lg:text-4xl">
          I write, <br />
          sometimes
        </h1>
        <p class="text-sm font-light lg:text-base">
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
