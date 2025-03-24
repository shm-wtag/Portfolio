<template>
  <Container variant="section" class="sm:h-hero sm:flex">
    <div class="sm:w-2/5 sm:pt-32">
      <h1 class="text-5xl font-semibold text-secondary sm:text-7xl sm:pb-4">
        Software <br />
        Engineer <span class="text-white">.</span>
      </h1>

      <p class="mt-5 text-white font-light mb-8 sm:text-lg">
        I like to craft solid and scalabe products with great user experience.
      </p>

      <div
        class="text-white grid grid-cols-2 gap-8 font-light text-xs sm:text-base sm:pt-12"
      >
        <div>
          <p class="text-accent-foreground">
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </p>
        </div>
        <div>
          <p class="text-accent-foreground">
            Proven experience building successful products for clients across
            several countries.
          </p>
        </div>
      </div>
    </div>
    <div
      class="hidden w-1/3 sm:flex absolute top-0 right-0 bottom-0 bg-accent-foreground items-center"
    >
      <div
        class="size-96 border border-white -ml-52 shadow-2xl flex items-center justify-center"
      >
        <Icon name="svg:boy-outline" class="size-80 text-black"></Icon>
      </div>
    </div>
  </Container>
</template>
