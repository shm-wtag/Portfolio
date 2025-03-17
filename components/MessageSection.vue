<script lang="ts" setup>
import { translateY } from "@/composable/translate";

translateY(".message h1", [100, 0]);
translateY(".message p", [80, 0]);
</script>

<template>
  <div
    id="message"
    class="space-y-2 mx-auto w-4/5 py-20 sm:w-3/5 sm:h-screen sm:pt-64"
  >
    <div class="text-center message">
      <h1 class="font-semibold text-3xl text-primary sm:text-4xl">
        Send me a message!
      </h1>
      <p class="text-sm text-accent pt-2 sm:text-lg">
        Got a question or proposal, or just want <br />
        to say hello? Go ahead.
      </p>
    </div>

    <form action="" class="pt-8 space-y-4">
      <div class="gap-8 sm:flex">
        <InputApp
          class="w-full pb-4"
          label="Your name"
          placeholder="Enter your name"
        />

        <InputApp
          class="w-full"
          label="Email address"
          placeholder="Enter your email address"
        />
      </div>

      <InputApp
        class="pb-8"
        :textarea="true"
        label="Email message"
        placeholder="Enter your email address"
        :rows="4"
      />

      <Button variant="reveal" size="reveallg">
        Shoot
        <Icon
          name="svg:logn-arrow-righ"
          class="text-xs items-center ml-3 group-hover:text-white"
        />
      </Button>
    </form>
  </div>
</template>
