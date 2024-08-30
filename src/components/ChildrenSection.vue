<script setup lang="ts">
import { ref } from "vue";
import InputSection from "./ui/InputSection.vue";
import CustomButton from "./ui/CustomButton.vue";
import { useFamilyStore } from "../store/store";
import { storeToRefs } from "pinia";
import { defineEmits } from "vue";

const store = useFamilyStore();
const { children } = storeToRefs(store);
const emit = defineEmits(["updateChildrenData"]);

const localChildren = ref([...children.value]);

const addChild = () => {
  if (localChildren.value.length < 5) {
    localChildren.value.push({ name: "", age: "" });
  }
};

const removeChild = (index: number) => {
  localChildren.value.splice(index, 1);
};

const updateChildrenData = () => {
  for (const child of localChildren.value) {
    if (!child.name || !child.age) {
      alert("Please fill in all the fields for each child.");
      return;
    }
  }
  store.children.value = localChildren.value;
  emit("updateChildrenData", localChildren.value);
};
</script>

<template>
  <section class="max-w-[620px] w-full">
    <div class="flex flex-col gap-y-5">
      <div class="flex justify-between items-center">
        <h3 class="font-medium text-[#111]">Дети (макс. 5)</h3>
        <CustomButton
          v-if="localChildren.length < 5"
          text="Добавить ребенка"
          classes="inline-flex items-center gap-x-1 rounded-full text-[#01A7FD] border-2 border-[#01A7FD] px-5 py-2.5"
          :onClick="addChild"
        >
          <span class="font-medium text-3xl leading-3">+</span> Добавить ребенка
        </CustomButton>
      </div>
      <div class="flex flex-col gap-y-2.5">
        <div
          v-for="(child, index) in localChildren"
          :key="index"
          class="flex justify-between gap-x-4"
        >
          <InputSection
            label="Имя"
            placeholder="Введите имя ребенка"
            v-model="child.name"
          />
          <InputSection
            label="Возраст"
            placeholder="Укажите возраст ребенка"
            v-model="child.age"
          />
          <CustomButton
            text="Удалить"
            classes="text-[#01A7FD]"
            :onClick="() => removeChild(index)"
          />
        </div>
      </div>
      <div class="mt-2.5">
        <CustomButton
          text="Сохранить"
          classes="rounded-full py-2.5 px-5 bg-[#01A7FD] text-white"
          :onClick="updateChildrenData"
        />
      </div>
    </div>
  </section>
</template>
