<script setup>
import { reactive, watch } from "vue";
import { useContactStore } from "@/stores/contact";
import { useRouter } from "vue-router";

const router = useRouter();
const contactStore = useContactStore();

const newContactLocal = reactive({ ...contactStore.newContact });

const update = () => {
  contactStore.updateOne({ ...newContactLocal });
  contactStore.resetNewContact();
  router.push("/");
};

const add = () => {
  newContactLocal.id = Date.now();
  contactStore.addOne({ ...newContactLocal });
  contactStore.resetNewContact();
  newContactLocal.name = "";
  newContactLocal.email = "";
  newContactLocal.phone = "";

  // Rediriger après l'ajout du contact
  router.push("/");
};

const saveContactOrEdit = (id) => {
  if (contactStore.isEditing) {
    update();
  } else {
    add();
  }
};

watch(
  () => contactStore.newContact,
  (newValue) => {
    Object.assign(newContactLocal, newValue);
  },
  { immediate: true }
);
</script>

<template>
  <section class="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold mb-4">
      {{ contactStore.isEditing ? "Edit Contact" : "Add" }}
    </h2>
    <form
      id="contact-form"
      class="space-y-4"
      @submit.prevent="
        {
          saveContactOrEdit();
        }
      "
    >
      <div>
        <label for="name" class="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          autocomplete="name"
          placeholder="John Doe"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="newContactLocal.name"
        />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          placeholder="johndoe@example.com"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="newContactLocal.email"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autocomplete="tel"
          placeholder="+123 456 789"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-model="newContactLocal.phone"
        />
      </div>
      <!-- Un seul bouton de soumission -->
      <button
        type="submit"
        class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
      >
        {{ contactStore.isEditing ? "Edit Contact" : "Save Contact" }}
      </button>
    </form>
  </section>
</template>

<style scoped></style>
