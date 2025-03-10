<template>
  <div class="space-y-2">
    <h1 class="font-semibold text-3xl text-blue-600">Send me a message!</h1>
    <p class="text-sm">
      Got a question or proposal, or just want to say hello? Go ahead.
    </p>

    <form action="" class="pt-4 space-y-4">
      <!-- <label -->
      <!-- for="name" -->
      <!-- class="text-sm font-light uppercase focus-within:text-blue-600 transition-all duration-150" -->
      <!-- > -->
      <!-- <span> Your name </span> -->

      <!-- <input -->
      <!-- id="name" -->
      <!-- placeholder="Enter you name" -->
      <!-- class="w-full py-1 outline-none border-b border-gray-600 bg-transparent focus:border-blue-600 font-light transition-all duration-150 text-gray-800" -->
      <!-- /> -->
      <!-- </label> -->

      <InputApp label="Your name" placeholder="Enter your name" />

      <InputApp label="Email address" placeholder="Enter your email address" />
      <InputApp
        :textarea="true"
        label="Email message"
        placeholder="Enter your email address"
      />
    </form>
  </div>
</template>
