<script setup>
import { useContactStore } from "@/stores/contact";
import { useRouter } from "vue-router";
const router = useRouter();
const contactStore = useContactStore();

const add = () => {
  contactStore.isEditing = false;
  router.push("/add-contact");
};
</script>
<template>
  <!-- Header -->
  <header class="bg-blue-600 text-white py-4 shadow-md">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Contact Manager</h1>

      <button
        @click="add()"
        class="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
      >
        Add Contact
      </button>
    </div>
  </header>
</template>
