<template>
  <h2>Message</h2>

  <div>
    <el-button :plain="true" @click="open2">success</el-button>
    <el-button :plain="true" @click="open3">warning</el-button>
    <el-button :plain="true" @click="open1">message</el-button>
    <el-button :plain="true" @click="open4">error</el-button>
  </div>

  <div>
    <el-button :plain="true" @click="open5">message</el-button>
  </div>

  <div>
    <el-button plain @click="openCenter">Centered text</el-button>
    <el-button :plain="true" @click="open">Show message</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import InfoCircle from '@/icons/InfoCircle.vue';
import SuccessCircle from "@/icons/SuccessCircle.vue";
import WarningCircle from "@/icons/WarningCircle.vue";
import DangerCircle from "@/icons/DangerCircle.vue";

const open = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success',
  })
}

const openCenter = () => {
  ElMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}

const open1 = () => {
  ElMessage({
    message: 'this is a message.',
    icon: InfoCircle
  })
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    icon: SuccessCircle
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    icon: WarningCircle
  })
}
const open4 = () => {
  ElMessage.error({
    message: 'Oops, this is a error message.',
    icon: DangerCircle
  })
}

const open5 = () => {
  ElMessage({
    showClose: true,
    message: 'This is a message.',
    icon: InfoCircle
  })
}
</script>

<style scoped>
</style>