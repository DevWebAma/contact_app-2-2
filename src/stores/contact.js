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

    updateOne(updatedContact) {
      const index = this.contacts.findIndex(
        (contact) => contact.id === updatedContact.id
      );
      if (index !== -1) {
        this.contacts.splice(index, 1, updatedContact);
      }
    },

    resetNewContact() {
      this.newContact = { id: null, name: "", email: "", phone: "" };
      this.isEditing = false;
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
    filterContacts: (state) =>
      state.contacts.filter((contact) =>
        contact.name.toLowerCase().startsWith(state.searchQuery.toLowerCase())
      ),
  },
});
