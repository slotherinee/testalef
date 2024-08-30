<script setup lang="ts">
import Header from "./components/Header.vue";
import FormPage from "./pages/FormPage.vue";
import PreviewPage from "./pages/PreviewPage.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container mx-auto">
    <Header />
  </div>
  <hr />
  <RouterView />
  <Footer />
</template>
