<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});
</script>
<template>
  <h2 class="text-xl mb-4 flex justify-between">
    <span class="font-semibold">Contacts</span>
    <span class="text-sm">{{ count }} item(s)</span>
  </h2>
  <div class="flex items-center mb-4">
    <input
      type="text"
      placeholder="Search contacts..."
      class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>
<style scoped></style>
