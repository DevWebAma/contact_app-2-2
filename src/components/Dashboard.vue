<script setup>
import { useContactStore } from "@/stores/contact";
// import { watch } from "vue";
import ContactListHeader from "./ContactListHeader.vue";
import ContactListItem from "./ContactListItem.vue";

const contactStore = useContactStore();
const contacts = contactStore.contacts;
const props = defineProps({
  contacts: {
    type: Array,
    Required: true,
  },
});

// watch(contacts, (newValue) => {
//   localStorage.setItem("contacts", JSON.stringify(newValue));
// });
</script>
<template>
  <section class="w-full lg:w-2/3 bg-white rounded-lg shadow p-6">
    <!-- Contact list header -->
    <ContactListHeader />
    <ul id="contacts-list" class="divide-y divide-gray-200">
      <!-- Example Contact Item -->
      <ContactListItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
      />
    </ul>
  </section>
</template>
<style scoped></style>
