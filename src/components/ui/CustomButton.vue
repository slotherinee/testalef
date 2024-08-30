<script setup lang="ts">
const props = defineProps<{
  text: string;
  classes: string;
  onClick: () => void;
}>();
</script>

<template>
  <button :class="props.classes" @click="props.onClick">
    <slot>{{ props.text }}</slot>
  </button>
</template>
