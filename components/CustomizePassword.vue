<template>
  <div class="bg-white rounded-lg p-6 shadow-xl my-5">
    <div class="text-3xl mb-5 font-semibold border-b border-inherit p-2">
      <p>Customize your password</p>
    </div>
    <div class="flex flex-col sm:flex-row p-2 gap-4">
      <div class="sm:w-1/2">
        <p>Password Length</p>
        <div class="flex my-2 items-center">
          <input
            type="number"
            class="border border-inherit p-3 rounded-md shadow-lg bg-white w-20"
            v-model="passwordStore.passwordLength"
            @input="passwordStore.generatePassword()"
          />
          <input
            type="range"
            min="1"
            max="50"
            class="appearance-none rounded-full accent-red-500 bg-gray-300 outline-none focus:outline-none ml-4 h-2 w-full"
            v-model="passwordStore.passwordLength"
            @input="passwordStore.generatePassword()"
          />
        </div>
      </div>
      <div class="flex gap-4 sm:w-1/2 justify-between sm:justify-evenly">
        <div class="flex flex-col gap-2">
          <div
            class="flex items-center"
            v-for="(option, index) in passwordOptions"
          >
            <input
              :id="`radio_${index}`"
              type="radio"
              class="form-radio w-6 h-6 text-indigo-600 transition duration-150 ease-in-out accent-red-500"
              v-model="selectedOption"
              :value="option.value"
            />
            <label :for="`radio_${index}`" class="ml-2 text-gray-700">{{
              option.label
            }}</label>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div
            class="flex items-center"
            v-for="(attr, index) in passwordAttributes"
          >
            <input
              type="checkbox"
              :id="`checkbox_${index}`"
              class="form-checkbox w-6 h-6 text-blue-600 accent-red-500"
              v-model="attr.checked"
            />
            <label
              :for="`checkbox_${index}`"
              class="ml-2 block text-gray-700"
              >{{ attr.label }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center py-6">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Copy Password
    </button>
  </div>
</template>

<script>
import { usePasswordStore } from "../store/password";
export default {
  setup() {
    const passwordStore = usePasswordStore();
    return { passwordStore };
  },
  data() {
    return {
      selectedOption: "all_characters",
      passwordOptions: [
        { label: "Easy to say", value: "easy_to_say" },
        { label: "Easy to read", value: "easy_to_read" },
        { label: "All characters", value: "all_characters" },
      ],
      passwordAttributes: [
        { label: "Uppercase", checked: true },
        { label: "Lowercase", checked: false },
        { label: "Numbers", checked: true },
        { label: "Symbols", checked: true },
      ],
    };
  },
};
</script>
