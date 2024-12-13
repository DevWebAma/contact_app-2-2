<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contact Manager</title>
      <!-- <script src="https://cdn.tailwindcss.com"></script> -->
    </head>
    <body
      class="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans"
    >
      <!-- Header -->
      <AppHeader />

      <!-- Main Content -->
      <AppMain />

      <!-- Footer -->
      <AppFooter />
    </body>
  </html>
</template>

<style scoped></style>
