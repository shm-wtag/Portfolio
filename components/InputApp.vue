<script lang="ts" setup>
interface Props {
  label: string;
  placeholder: string;
  textarea?: boolean;
}

withDefaults(defineProps<Props>(), {
  textarea: false,
});
</script>

<template>
  <div>
    <label
      for="name"
      class="text-xs font-light focus-within:text-blue-600 transition-all duration-150 capitalize"
    >
      <span v-text="label" />

      <textarea
        v-if="textarea"
        id="name"
        :placeholder="placeholder"
        class="w-full py-1 text-sm outline-none border-b border-gray-600 bg-transparent focus:border-blue-600 font-light transition-all duration-150 text-gray-800"
      />
      <input
        v-else
        id="name"
        :placeholder="placeholder"
        class="w-full py-1 text-sm outline-none border-b border-gray-600 bg-transparent focus:border-blue-600 font-light transition-all duration-150 text-gray-800"
      />
    </label>
  </div>
</template>
