<script setup lang="ts">
const props = defineProps<{
  label: string;
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="flex flex-col border rounded-md py-2 px-4 w-full">
    <label class="text-[#111] opacity-45">{{ props.label }}</label>
    <input
      class="placeholder:text-[#111] outline-none"
      type="text"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="updateValue"
    />
  </div>
</template>
