<script setup>
import { useContactStore } from "@/stores/contact";
const contactStore = useContactStore();
const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <li class="md:flex items-center justify-between py-4">
    <div class="pb-4 md:pb-0">
      <h3 class="text-lg font-semibold">{{ contact.name }}</h3>
      <p class="text-gray-500">{{ contact.email }}</p>
      <p class="text-gray-500">{{ contact.phone }}</p>
    </div>
    <div class="flex gap-2">
      <button
        class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
        @click.prevent="contactStore.editOne(contact.id)"
      >
        Edit
      </button>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
        @click.prevent="contactStore.deleteOne(contact.id)"
      >
        Delete
      </button>
    </div>
  </li>
</template>
<style scoped></style>
