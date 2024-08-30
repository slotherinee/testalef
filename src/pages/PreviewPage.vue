<script setup lang="ts">
import { useFamilyStore } from "../store/store";
import { storeToRefs } from "pinia";

const store = useFamilyStore();
const { name, age, children } = storeToRefs(store);
</script>

<template>
  <main class="container mx-auto flex-1">
    <div class="flex flex-col gap-y-14 mt-8 ml-[30%]">
      <div v-if="name" class="flex flex-col gap-y-5">
        <h3 class="font-medium text-base text-[#111]">Персональные данные</h3>
        <h3 class="font-bold text-base text-[#111]">
          {{ name }}, {{ age }} лет
        </h3>
      </div>
      <div v-if="name">
        <div class="flex flex-col gap-y-5">
          <h3 class="font-medium text-base text-[#111]">Дети</h3>
          <div class="flex flex-col gap-y-2" v-if="children.length > 0">
            <div
              v-for="child in children"
              :key="child.name"
              class="bg-[#F1F1F1] rounded-md py-2.5 px-5 text-black font-bold w-fit"
            >
              {{ child.name }}, {{ child.age }} лет
            </div>
          </div>
          <p v-else>Нет детей</p>
        </div>
      </div>
      <div v-else class="text-[#111] font-medium">
        Нет данных о пользователе
      </div>
    </div>
  </main>
</template>
