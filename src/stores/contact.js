import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    contacts: JSON.parse(localStorage.getItem("contacts")) || [],
    newContact: {
      id: null,
      name: "",
      email: "",
      phone: "",
    },
    isEditing: false,
    searchQuery: "",
  }),
  actions: {
    addOne(contact) {
      this.contacts.push(contact);
    },

    editOne(id) {
      this.isEditing = true;
      this.newContact = {
        ...this.contacts.find((contact) => contact.id === id),
      };
    },

    updateOne(id) {
      this.contacts.splice(
        this.contacts.findIndex((contact) => contact.id === id),
        1,
        { ...this.newContact }
      );
    },

    deleteOne(id) {
      this.contacts.splice(
        this.contacts.findIndex((item) => item.id == id),
        1
      );
    },
  },
  getters: {
    contactCount: (state) => state.contacts.length,
  },
});
