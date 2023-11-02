<template>
  <Alert :type="AlertType.success">
    <template v-slot:default>
      <div>slot binding</div>
    </template>
  </Alert>
  <Alert :type="AlertType.warning" title="Warning" buttonLabel="Button" :handleButton="handleButton" description="title, button, center" center />
  <Alert :type="AlertType.warning" buttonLabel="Button" :handleButton="handleButton" description="button and center" center />
  <Alert :type="AlertType.info" title="Info" description="title and center" center/>
  <Alert :type="AlertType.danger" description="danger" center />
  <Alert :type="AlertType.danger" title="danger" center />
</template>

<script setup lang="ts">
import Alert from "@/components/Alert/Alert.vue";
import { AlertType } from "@/components/Alert/alertType";

function handleButton () {
  console.log('button')
}
</script>

<style scoped>
</style>