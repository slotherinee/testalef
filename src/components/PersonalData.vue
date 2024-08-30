<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import InputSection from "./ui/InputSection.vue";

const props = defineProps<{
  initialName: string;
  initialAge: string;
}>();

const localName = ref(props.initialName || "");
const localAge = ref(props.initialAge || "");
const emit = defineEmits(["updatePersonalData"]);

// Watch for changes in localName and localAge and emit the updated values
watch([localName, localAge], () => {
  emit("updatePersonalData", { name: localName.value, age: localAge.value });
});

// Emit initial values on mount
onMounted(() => {
  emit("updatePersonalData", { name: localName.value, age: localAge.value });
});
</script>

<template>
  <section class="max-w-[620px] w-full">
    <div class="flex flex-col gap-y-5 mt-8">
      <h3 class="font-medium text-base text-[#111]">Персональные данные</h3>
      <div class="flex flex-col gap-y-4">
        <InputSection
          label="Имя"
          placeholder="Введите ваше имя"
          v-model="localName"
        />
        <InputSection
          label="Возраст"
          placeholder="Укажите ваш возраст"
          v-model="localAge"
        />
      </div>
    </div>
  </section>
</template>
