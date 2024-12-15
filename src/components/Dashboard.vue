<script setup>
import { useContactStore } from "@/stores/contact";
import { computed } from "vue";
// import { watch } from "vue";
import { useRouter } from "vue-router";
import ContactListHeader from "./ContactListHeader.vue";
import ContactListItem from "./ContactListItem.vue";
const router = useRouter();

const contactStore = useContactStore();
const contacts = computed(() => contactStore.contacts);
const contactCount = computed(() => contactStore.contactCount);
const props = defineProps({
  contacts: {
    type: Array,
    Required: true,
  },
});
const send = () => {
  router.push("/add-contact");
};
// watch(contacts, (newValue) => {
//   localStorage.setItem("contacts", JSON.stringify(newValue));
// });
</script>
<template>
  <section class="w-full lg:w-2/3 bg-white rounded-lg shadow p-6">
    <!-- Contact list header -->
    <ContactListHeader :count="contactCount" />
    <ul id="contacts-list" class="divide-y divide-gray-200">
      <!-- Example Contact Item -->
      <ContactListItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        :onEdit="send"
      />
    </ul>
  </section>
</template>
<style scoped></style>
