<template>
  <h2>Popover</h2>

  <div>
    <el-popover
        placement="top-start"
        title="Title"
        :width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button class="m-2">Hover to activate</el-button>
      </template>
    </el-popover>

    <el-popover
        placement="bottom"
        title="Title"
        :width="200"
        trigger="click"
        content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button class="m-2">Click to activate</el-button>
      </template>
    </el-popover>

    <el-popover
        ref="popover"
        placement="right"
        title="Title"
        :width="200"
        trigger="focus"
        content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button class="m-2">Focus to activate</el-button>
      </template>
    </el-popover>

    <el-popover
        ref="popover"
        title="Title"
        :width="200"
        trigger="contextmenu"
        content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button class="m-2">contextmenu to activate</el-button>
      </template>
    </el-popover>

    <el-popover
        :visible="visible"
        placement="bottom"
        title="Title"
        :width="200"
        content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button class="m-2" @click="visible = !visible"
        >Manual to activate</el-button
        >
      </template>
    </el-popover>
  </div>

  <div>
    <el-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <el-button style="margin-right: 16px">Click to activate</el-button>
      </template>
      <el-table :data="gridData">
        <el-table-column width="150" property="date" label="date" />
        <el-table-column width="100" property="name" label="name" />
        <el-table-column width="300" property="address" label="address" />
      </el-table>
    </el-popover>

    <el-popover
        :width="300"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
    >
      <template #reference>
        <el-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
      </template>
      <template #default>
        <div
            class="demo-rich-conent"
            style="display: flex; gap: 16px; flex-direction: column"
        >
          <el-avatar
              :size="60"
              src="https://avatars.githubusercontent.com/u/72015883?v=4"
              style="margin-bottom: 8px"
          />
          <div>
            <p
                class="demo-rich-content__name"
                style="margin: 0; font-weight: 500"
            >
              Element Plus
            </p>
            <p
                class="demo-rich-content__mention"
                style="margin: 0; font-size: 14px; color: var(--el-color-info)"
            >
              @element-plus
            </p>
          </div>

          <p class="demo-rich-content__desc" style="margin: 0">
            Element Plus, a Vue 3 based component library for developers,
            designers and product managers
          </p>
        </div>
      </template>
    </el-popover>
  </div>

  <div>
    <el-popover :visible="visible" placement="top" :width="240">
      <p>Are you sure to delete this?</p>
      <div>
        <el-button size="small" text @click="visible = false">cancel</el-button>
        <el-button size="small" type="primary" @click="visible = false">confirm</el-button>
      </div>
      <template #reference>
        <el-button @click="visible = true">Delete</el-button>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
</script>

<style scoped>

</style>