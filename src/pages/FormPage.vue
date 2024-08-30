<script setup lang="ts">
import { ref } from "vue";
import PersonalData from "../components/PersonalData.vue";
import ChildrenSection from "../components/ChildrenSection.vue";
import { useFamilyStore } from "../store/store";

const store = useFamilyStore();
const personalData = ref({ name: store.name, age: store.age });
const childrenData = ref([...store.children]);

const updatePersonalData = (data: { name: string; age: string }) => {
  personalData.value = data;
};

const updateChildrenData = (data: { name: string; age: string }[]) => {
  childrenData.value = data;
  saveData();
};

const saveData = () => {
  store.saveFamilyData({
    name: personalData.value.name,
    age: personalData.value.age,
    children: childrenData.value,
  });
};
</script>

<template>
  <main class="container mx-auto flex-1 px-4">
    <div class="flex flex-col gap-y-11 items-center">
      <PersonalData
        :initialName="personalData.name"
        :initialAge="personalData.age"
        @updatePersonalData="updatePersonalData"
      />
      <ChildrenSection @updateChildrenData="updateChildrenData" />
    </div>
  </main>
</template>
