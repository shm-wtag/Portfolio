<script lang="ts" setup>
import { translateYStagger } from "@/composable/translate";

translateYStagger(".message");
</script>

<template>
  <Container id="message" size="sm">
    <div class="space-y-2 py-20 sm:h-screen sm:pt-64 message">
      <div class="text-center">
        <h1 class="font-semibold text-3xl text-primary sm:text-4xl a-item">
          Send me a message!
        </h1>
        <p class="text-sm text-accent pt-2 sm:text-lg a-item">
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
  </Container>
</template>
