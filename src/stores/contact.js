// import {reactive, computed, watch} from "vue";
import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    contacts: [],
    inputContact: "",
    searchQuery: "",
  }),
  actions: {
    loadContacts() {
      this.contacts = [
        {
          id: Date.now(),
          name: "john Doe",
          email: "johndoe@example.com",
          phone: +123456786,
        },
      ];
      this.syncLocalStorage = () => {
        localStorage.setItem("contacts", JSON.stringify(this.contacts));
      };
    },
  },

  // localStorage.setItem("contacts", JSON.stringify(contacts));

  // return {};
});
