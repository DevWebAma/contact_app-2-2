import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export const useContactStore = defineStore("contact", () => {
  const contacts = reactive(JSON.parse(localStorage.getItem("contacts")) || []);

  const addOne = (contact) => {
    contacts.push(contact);
  };
  watch(contacts, (newValue) => {
    localStorage.setItem("contacts", JSON.stringify(newValue));
  });

  return { contacts, addOne };
});
