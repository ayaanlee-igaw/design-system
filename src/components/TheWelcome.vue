<template>
  <div style="width: 80vw">
    <div>
      <h2>Button</h2>
      <div>
        <el-button>Default</el-button>
        <el-button class="el-button--medium">Default</el-button>
        <el-button class="el-button--small">Default</el-button>
        <el-button class="el-button--mini">Default</el-button>
      </div>

      <div>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>

      <div>
        <el-button plain>Default</el-button>
        <el-button plain type="primary">Primary</el-button>
        <el-button plain type="success">Success</el-button>
        <el-button plain type="info">Info</el-button>
        <el-button plain type="warning">Warning</el-button>
        <el-button plain type="danger">Danger</el-button>
      </div>

      <div>
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </div>

      <div>
        <el-button plain round>Round</el-button>
        <el-button type="primary" plain round>Primary</el-button>
        <el-button type="success" plain round>Success</el-button>
        <el-button type="info" plain round>Info</el-button>
        <el-button type="warning" plain round>Warning</el-button>
        <el-button type="danger" plain round>Danger</el-button>
      </div>

      <div>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
      </div>

      <div>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="info" plain disabled>Info</el-button>
        <el-button type="warning" plain disabled>Warning</el-button>
        <el-button type="danger" plain disabled>Danger</el-button>
      </div>

      <div>
        <el-button type="primary" plain round disabled>Primary</el-button>
        <el-button type="success" plain round disabled>Success</el-button>
        <el-button type="info" plain round disabled>Info</el-button>
        <el-button type="warning" plain round disabled>Warning</el-button>
        <el-button type="danger" plain round disabled>Danger</el-button>
      </div>

      <div>
        <el-button circle>D</el-button>
        <el-button circle type="primary">P</el-button>
        <el-button circle type="success">S</el-button>
        <el-button circle type="info">I</el-button>
        <el-button circle type="warning">W</el-button>
        <el-button circle type="danger">D</el-button>
      </div>

      <div>
        <el-button class="is-square">D</el-button>
        <el-button class="is-square" type="primary">P</el-button>
        <el-button class="is-square" type="success">S</el-button>
        <el-button class="is-square" type="info">I</el-button>
        <el-button class="is-square" type="warning">W</el-button>
        <el-button class="is-square" type="danger">D</el-button>
      </div>

<!--      <div>-->
<!--        <el-button link>Link Button</el-button>-->
<!--      </div>-->
    </div>

    <div>
      <h2>Input</h2>
      <div>
        <el-input placeholder="Input" />
        <el-input class="el-input--medium" placeholder="Input" />
        <el-input class="el-input--small" placeholder="Input" />
        <el-input class="el-input--mini" placeholder="Input" />
        <el-input placeholder="Input" disabled/>
      </div>

      <div>
        <el-input v-model="input1" placeholder="Please input">
          <template #prepend>Http://</template>
        </el-input>
        <el-input v-model="input2" placeholder="Please input">
          <template #append>.com</template>
        </el-input>
        <el-input
            v-model="input3"
            placeholder="Please input"
            class="input-with-select">
          <template #prepend>
            <el-select v-model="select" placeholder="Select" style="width: 115px">
              <el-option label="Restaurant" value="1" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
        <el-input
            v-model="input3"
            placeholder="Please input"
            class="input-with-select">
          <template #prepend>
            <el-button :icon="Search" />
          </template>
          <template #append>
            <el-select v-model="select" placeholder="Select" style="width: 115px">
              <el-option label="Restaurant" value="1" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
        </el-input>
      </div>

      <div class="demo-input-size">
        <el-input
            v-model="input2"
            placeholder="Please Input"
            :suffix-icon="Search"
        />
        <el-input
            v-model="input3"
            placeholder="Please Input"
            :suffix-icon="Search"
        />
      </div>
      <div class="demo-input-size">
        <el-input
            v-model="input1"
            placeholder="Please Input"
            :prefix-icon="Search"
        />
        <el-input v-model="input1" placeholder="Please Input" maxlength="10" show-word-limit clearable/>
      </div>

      <div>
        <el-input
            v-model="textarea1"
            autosize
            type="textarea"
            placeholder="Please input"
        />
        <el-input
            v-model="textarea2"
            type="textarea"
            placeholder="Please input"
            disabled
        />
      </div>

      <div>
        <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
        <el-input-number
            v-model="num"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
        />
        <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" disabled/>
        <el-input-number
            v-model="num"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
            disabled
        />
      </div>

    </div>

    <div>
      <h2>Select</h2>
      <el-select v-model="value" class="el-select--large" placeholder="Select" disabled>
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select v-model="value" class="el-select--medium" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select v-model="value" class="el-select--small" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select v-model="value" class="el-select--mini" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
const textarea1 = ref('')
const textarea2 = ref('')

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>