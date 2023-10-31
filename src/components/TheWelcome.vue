<template>
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <Button />
    <Input />
    <Select />
    <Radio />
    <Tooltip />
    <CheckBox />
    <Tag />
    <Badge />
    <Switch />
    <Dropdown />
  </div>
</template>

<script setup lang="ts">
  import Button from "@/components/Button/Button.vue";
  import Input from "@/components/Input/Input.vue";
  import Select from "@/components/Select/Select.vue";
  import Radio from "@/components/Radio/Radio.vue";
  import CheckBox from "@/components/CheckBox/CheckBox.vue";
  import Tag from "@/components/Tag/Tag.vue";
  import Badge from "@/components/Badge/Badge.vue";
  import Switch from "@/components/Switch/Switch.vue";
  import Tooltip from "@/components/Tooltip/Tooltip.vue";
  import Dropdown from "@/components/Dropdown/Dropdown.vue";
</script>