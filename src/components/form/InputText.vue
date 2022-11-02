<script setup lang="ts">
import { ref } from "vue";

interface Props {
  label: string;
  placeholder: string;
  disabled?: boolean;
  icon?: string;
  type?: string;
  validate?: string;
}

defineProps<Props>();

const emit = defineEmits(["update:valid", "update:value"]);
const textInput = ref("");
const error = ref("");
const inputIsValid = ref(false);

const textMinMaxValidate = (min: number, max: number) => {
  if (textInput.value.length < min) {
    error.value = `Type at least ${min} characters`;
    inputIsValid.value = false;
  } else if (textInput.value.length > max) {
    error.value = `Type less than ${max} characters`;
    inputIsValid.value = false;
  } else {
    error.value = "";
    inputIsValid.value = true;
  }
  emit("update:valid", inputIsValid.value);
  emit("update:value", textInput.value);
};

const textEmailValidate = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(textInput.value)) {
    error.value = "Type valid email";
    inputIsValid.value = false;
  } else {
    error.value = "";
    inputIsValid.value = true;
  }
  emit("update:valid", inputIsValid.value);
  emit("update:value", textInput.value);
};

const integerValidate = () => {
  const integerRegex = /^[0-9]+$/;
  if (!integerRegex.test(textInput.value)) {
    error.value = "Type valid number";
    inputIsValid.value = false;
  } else {
    error.value = "";
    inputIsValid.value = true;
  }
  emit("update:valid", inputIsValid.value);
  emit("update:value", textInput.value);
};

</script>

<template>
  <div class="input-box">
    <label for="text-input">{{ label }}</label>
    <input
        id="textInput"
        :type="type"
        name="text"
        class="text-input"
        :placeholder="$props.placeholder"
        @focusout="$props.validate === 'text' ? textMinMaxValidate(3, 20)
         : $props.validate === 'email' ? textEmailValidate()
         : $props.validate === 'integer' ? integerValidate()
         : ''"
        :class="[
        error ? 'input-error' : '',
        $props.disabled ? 'input-disabled' : '',
      ]"
    />
    <p v-if="error" class="error-text">
      {{ error }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.input-box {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 300px;
}
.text-input {
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ccc;
  padding: 0.5rem;
  margin-top: 0.5rem;
  &:focus {
    box-shadow: 0 5px 20px -5px rgba(66, 68, 90, 0.49);
    outline: none;
  }
  &:hover,
  &:focus {
    color: #0a0a0a;
  }
}
.input-error {
  border: 1px solid red;
  color: #0a0a0a;
}
.error-text {
  color: red;
}

</style>
