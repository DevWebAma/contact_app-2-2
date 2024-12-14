// import {reactive, computed, watch} from "vue";
import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export const useContactStore = defineStore("contact", () => {
  const contacts = reactive(JSON.parse(localStorage.getItem("contacts")) || []);

  watch(contacts, (newValue, oldValue) => {
    localStorage.setItem("contacts", JSON.stringify(newValue));
  });

  return { contacts };
});
