<script lang="ts" setup>
interface Props {
  dataOpen?: boolean;
}

const props = withDefaults(defineProps<Props>(), { dataOpen: false });
</script>

<template>
  <Button
    class="bg-transparent hover:bg-transparent relative size-9 outline-none shadow-none p-0 m-0 flex-col items-end group *:transition-all *:duration-150 *:bg-secondary sm:*:bg-primary"
  >
    <span
      :data-open="dataOpen"
      class="block w-full h-[2px] rounded mb-[4px] data-[open=true]:rotate-45 data-[open=true]:absolute top-4 right-0"
    />
    <span
      :data-open="dataOpen"
      class="block w-3/4 h-[2px] rounded data-[open=true]:w-full data-[open=true]:-rotate-45 data-[open=true]:absolute top-4 left-0"
    />
  </Button>
</template>
