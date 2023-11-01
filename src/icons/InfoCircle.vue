<template>
  <i :style="styles">
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" :fill="props.color"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H11V9H13V7ZM13 11H11L11 17H13L13 11Z" fill="white"/>
    </svg>
  </i>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue';
interface InfoCircleProps {
  color?: string;
  fontSize?: string;
}

const props = withDefaults(defineProps<InfoCircleProps>(), {
  color: '#676A7E',
  fontSize: '24px'
});

const styles = computed(() => ({ fontSize: props.fontSize }))
</script>

<style scoped>
</style>