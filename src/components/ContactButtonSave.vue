<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function saveContact() {
  router.push("/");
}
</script>
<template>
  <button
    type="submit"
    @click="saveContact"
    class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
  >
    Save Contact
  </button>
</template>
<style scoped></style>
