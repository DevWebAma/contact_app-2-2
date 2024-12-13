<script setup>
import ContactFormInput from "./ContactFormInput.vue";
import ContactList from "./ContactList.vue";
</script>
<template>
  <!-- Main Content -->
  <main class="container mx-auto px-4 mt-6 flex-grow">
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- Contact List Section -->
      <ContactList />
      <!-- Contact Form Section -->
      <ContactFormInput />
    </div>
  </main>
</template>
<style scoped></style>
