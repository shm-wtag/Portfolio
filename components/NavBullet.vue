<script lang="ts" setup>
const selectedSection = ref("data-hero");

onMounted(() => {
  document.addEventListener("scrollsnapchanging", (event) => {
    //const previousPending = document.querySelector(".pending");
    //if (previousPending) {
    //  previousPending.classList.remove("pending");
    //}

    selectedSection.value = `data-${event.snapTargetBlock.id}`;
  });
});
</script>

<template>
  <div
    :[selectedSection]="true"
    class="hidden fixed top-[50%] translate-y-[-50%] right-32 z-50 sm:block"
  >
    <ul class="list-none space-y-4 flex flex-col justify-center items-center">
      <li>
        <a
          v-bind:[selectedSection]="true"
          class="block bg-primary size-3 border-2 border-primary rotate-45 transition-all duration-500 hover:cursor-pointer data-[hero=true]:bg-transparent data-[hero=true]:rotate-0 data-[years=true]:bg-accent-foreground data-[years=true]:border-accent-foreground"
        />
      </li>
      <li>
        <a
          v-bind:[selectedSection]="true"
          class="block bg-primary size-3 border-2 border-primary rotate-45 transition-all duration-500 data-[design=true]:bg-transparent data-[design=true]:rotate-0 data-[years=true]:bg-accent-foreground data-[years=true]:border-accent-foreground"
        />
      </li>
      <li>
        <a
          v-bind:[selectedSection]="true"
          class="block bg-primary size-3 border-2 border-primary rotate-45 transition-all duration-500 data-[years=true]:bg-transparent data-[years=true]:rotate-0 data-[years=true]:border-accent-foreground"
        />
      </li>
      <li>
        <a
          v-bind:[selectedSection]="true"
          class="block bg-primary size-3 border-2 border-primary rotate-45 transition-all duration-500 data-[build=true]:bg-transparent data-[build=true]:rotate-0 data-[years=true]:bg-accent-foreground data-[years=true]:border-accent-foreground"
        />
      </li>
      <li>
        <a
          v-bind:[selectedSection]="true"
          class="block bg-primary size-3 border-2 border-primary rotate-45 transition-all duration-500 data-[message=true]:bg-transparent data-[message=true]:rotate-0 data-[years=true]:bg-accent-foreground data-[years=true]:border-accent-foreground"
        />
      </li>
      <li>
        <a
          v-bind:[selectedSection]="true"
          class="block bg-primary size-3 border-2 border-primary rotate-45 transition-all duration-500 data-[footer=true]:bg-transparent data-[footer=true]:rotate-0 data-[years=true]:bg-accent-foreground data-[years=true]:border-accent-foreground"
        />
      </li>
    </ul>
  </div>
</template>
