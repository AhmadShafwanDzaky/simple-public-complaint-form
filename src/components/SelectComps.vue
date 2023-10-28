<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  label: { type: String },
  placeholder: { type: String },
  option: { type: Array<String> },
  modelValue: { type: String, Number }
})

const internalValue = ref(props.modelValue)

const emits = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  internalValue.value = event.target.value
  emits('update:modelValue', internalValue.value)
}
</script>

<template>
  <div class="select">
    <label class="select-label" for="form-stacked-text">{{ props.label }}</label>
    <select class="select-field" :value="modelValue" @input="updateValue">
      <option value="" hidden>{{ props.placeholder }}</option>
      <option v-for="(option, index) in props.option" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style>
.select {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.select-label {
  color: #0a0a0a;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  letter-spacing: -0.12px;
}

.select-field {
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border: 1px solid #c2c2c2;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
}

option:checked {
  border-radius: 8px !important;
  padding: 12px 16px;
  font-weight: 700;
}

option:hover{
  background-color: #fdb199 !important;
  color: white;
}
</style>
