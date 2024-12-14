import AddContact from "@/components/AddContact.vue";
import Dashboard from "@/components/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/add-contact",
    name: "AddContact",
    component: AddContact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
