<script setup>
import ContactListHeader from "./ContactListHeader.vue";
import ContactListItem from "./ContactListItem.vue";
</script>
<template>
  <section class="w-full lg:w-2/3 bg-white rounded-lg shadow p-6">
    <!-- Contact list header -->
    <ContactListHeader />
    <ul id="contacts-list" class="divide-y divide-gray-200">
      <!-- Example Contact Item -->
      <ContactListItem />
    </ul>
  </section>
</template>
<style scoped></style>
