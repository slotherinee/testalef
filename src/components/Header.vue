<script setup lang="ts">
import Logo from "./ui/Logo.vue";
</script>

<template>
  <header class="h-[76px] px-4 py-2 relative flex items-center justify-center">
    <RouterLink to="/"><Logo /></RouterLink>
    <div class="mx-auto mb-2">
      <ul class="flex gap-x-6 text-[#111111] opacity-45">
        <li class="cursor-pointer hover:underline">
          <RouterLink to="/">Форма</RouterLink>
        </li>
        <li class="cursor-pointer hover:underline">
          <RouterLink to="/preview">Превью</RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
