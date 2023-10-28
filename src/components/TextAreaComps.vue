<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  label: { type: String },
  placeholder: { type: String },
  type: { type: String },
  modelValue: { type: String, Number }
})

const internalValue = ref(props.modelValue);

const emits = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
  internalValue.value = event.target.value;
  emits('update:modelValue', internalValue.value);
};
</script>

<template>
  <div class="text-area">
    <label class="text-area-label" for="form-stacked-text">{{ props.label }}</label>
    <textarea
      class="text-area-field"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<style>
.text-area {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.text-area-label {
  color: #0a0a0a;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  letter-spacing: -0.12px;
}

.text-area-field {
  display: flex;
  height: 30vh;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border: 1px solid #c2c2c2;
  background: #fff;
  border-radius: 8px;
}
</style>
