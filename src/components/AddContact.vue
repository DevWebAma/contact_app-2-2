<script setup>
import { useContactStore } from "@/stores/contact";
import { reactive } from "vue";
import ContactButtonEdit from "./ContactButtonEdit.vue";
import ContactButtonSave from "./ContactButtonSave.vue";

const contactStore = useContactStore();
const contacts = contactStore.contacts;

const newContact = reactive({
  id: "",
  name: "",
  email: "",
  phone: "",
});

const add = () => {
  newContact.id = Date.now();
  contacts.push({ ...newContact });
  newContact.id = null;
  newContact.name = "";
  newContact.email = "";
  newContact.phone = "";
};
</script>
<template>
  <section class="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold mb-4">Add / Edit Contact</h2>
    <form id="contact-form" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="newContact.name"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="newContact.email"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="+123 456 789"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="newContact.phone"
        />
      </div>
      <ContactButtonSave />
      <ContactButtonEdit />
    </form>
  </section>
</template>
<style scoped></style>
