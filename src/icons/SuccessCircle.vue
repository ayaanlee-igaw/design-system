<template>
  <i :style="styles">
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" :fill="props.color"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0248 13.6105L8.70718 11.2929L7.29297 12.7071L11.0248 16.4389L17.3887 10.0749L15.9745 8.66074L11.0248 13.6105Z" fill="white"/>
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
  color: '#299B17',
  fontSize: '24px'
});

const styles = computed(() => ({ fontSize: props.fontSize }))
</script>

<style scoped>
</style>