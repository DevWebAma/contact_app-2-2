<script setup>
import { useContactStore } from "@/stores/contact";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import ContactListItem from "./ContactListItem.vue";

const router = useRouter();
const contactStore = useContactStore();
const contacts = contactStore.contacts;
const contactCount = computed(() => contactStore.contactCount);
const filterContacts = computed(() => contactStore.filterContacts);

const localSearchQuery = ref(contactStore.searchQuery);

const send = () => {
  router.push("/add-contact");
};
watch(
  [contacts, localSearchQuery],
  ([newValue, newSearchQuery]) => {
    localStorage.setItem("contacts", JSON.stringify(newValue));
    contactStore.searchQuery = newSearchQuery;
  },
  { deep: true }
);
</script>
<template>
  <section class="w-full lg:w-2/3 bg-white rounded-lg shadow p-6">
    <!-- Contact list header -->
    <h2 class="text-xl mb-4 flex justify-between">
      <span class="font-semibold">Contacts</span>
      <span class="text-sm">{{ contactCount }} item(s)</span>
    </h2>
    <div class="flex items-center mb-4">
      <input
        type="text"
        placeholder="Search contacts..."
        class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="localSearchQuery"
      />
    </div>
    <ul id="contacts-list" class="divide-y divide-gray-200">
      <!-- Example Contact Item -->
      <ContactListItem
        v-for="contact in filterContacts"
        :key="contact.id"
        :contact="contact"
        :onEdit="send"
      />
    </ul>
  </section>
</template>
<style scoped></style>
