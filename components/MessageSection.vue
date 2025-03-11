<template>
  <div class="space-y-2">
    <h1 class="font-semibold text-3xl text-primary">Send me a message!</h1>
    <p class="text-sm">
      Got a question or proposal, or just want to say hello? Go ahead.
    </p>

    <form action="" class="pt-4 space-y-4">
      <InputApp label="Your name" placeholder="Enter your name" />

      <InputApp label="Email address" placeholder="Enter your email address" />
      <InputApp
        :textarea="true"
        label="Email message"
        placeholder="Enter your email address"
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
