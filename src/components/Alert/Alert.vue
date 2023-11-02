<template>
  <div :class="['alert-wrap', type, { 'center': isCenter }, { 'is-description-button': isShowDescriptionButton }]">
    <div class="alert">
      <div class="alert-icon-wrap">
        <AlertIcon :fontSize="fontSize"></AlertIcon>
      </div>
      <div class="alert-contents-wrap">
        <div class="alert-contents">
          <p v-if="title" class="alert-contents-title">{{ title }}</p>
          <slot>
            <span v-if="description">
              {{ description }}
            </span>
          </slot>
        </div>
        <el-button
          v-if="isShowTitleButton"
          :class="['el-button--mini', `el-button--${type}`]"
          @click="handleButton"
          plain>
          {{ buttonLabel }}
        </el-button>
      </div>
    </div>
    <el-button
        v-if="isShowDescriptionButton"
        :class="['el-button--mini', `el-button--${type}`]"
        @click="handleButton"
        plain>
      {{ buttonLabel }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { AlertProps, AlertType } from "@/components/Alert/alertType";
import InfoCircle from "@/icons/InfoCircle.vue";
import SuccessCircle from "@/icons/SuccessCircle.vue";
import DangerCircle from "@/icons/DangerCircle.vue";
import WarningCircle from "@/icons/WarningCircle.vue";

const fontSize = 'var(--comp-alert-sizing-icon-prefix-2line)';

const { type, title, description, buttonLabel, handleButton, center } = withDefaults(defineProps<AlertProps>(), {
  center: false,
});

const AlertIcon = computed(() => {
  switch (type) {
    case AlertType.success:
      return SuccessCircle;
    case AlertType.warning:
      return WarningCircle;
    case AlertType.info:
      return InfoCircle;
    case AlertType.danger:
    default:
      return DangerCircle;
  }
})

const isShowTitleButton = computed(() => buttonLabel && title)
const isShowDescriptionButton = computed(() => buttonLabel && !title)
// title 혹은 button을 사용하면, center 속성을 이용할 수 없습니다.
const existEveryText = computed(() => title && description)
const isCenter = computed(() => !existEveryText.value && !buttonLabel && center)
</script>

<style scoped>
@import "alertStyle.scss";
</style>