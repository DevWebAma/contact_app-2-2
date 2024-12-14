import { defineStore } from "pinia";
import { reactive } from "vue";

export const useContactStore = defineStore("contact", {
  state: () => ({
    contacts: reactive(JSON.parse(localStorage.getItem("contacts")) || []),
    newContact: {
      id: null,
      name: "",
      email: "",
      phone: "",
    },
    isEditing: "",
    searchQuery: "",
  }),
  actions: {
    addOne(contact) {
      this.contacts.push(contact);
    },

    editOne(id) {
      this.newContact =
        this.contacts.find((contact) => contact.id === id) || {};
    },

    deleteOne(id) {
      this.contacts.splice(
        this.contacts.findIndex((item) => item.id == id),
        1
      );
    },
  },
  // Utilisation de watch dans un composant pour surveiller les changements de `contacts` et les sauvegarder dans localStorage
});
