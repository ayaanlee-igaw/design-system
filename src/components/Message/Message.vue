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
    <el-button :plain="true" @click="open6">success</el-button>
    <el-button :plain="true" @click="open7">warning</el-button>
    <el-button :plain="true" @click="open8">error</el-button>
  </div>

  <div>
    <el-button plain @click="openCenter">Centered text</el-button>
    <el-button :plain="true" @click="open">Show message</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

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
  ElMessage('this is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}

const open5 = () => {
  ElMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open6 = () => {
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open7 = () => {
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open8 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
</script>

<style scoped>
</style>