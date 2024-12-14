<script setup></script>
<template>
  <!-- Header -->
  <header class="bg-blue-600 text-white py-4 shadow-md">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Contact Manager</h1>
      <router-link
        to="/add-contact"
        class="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
      >
        Add Contact
      </router-link>
    </div>
  </header>
</template>
