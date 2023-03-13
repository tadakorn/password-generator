<template>
  <div class="bg-white rounded-lg p-6 shadow-xl my-5">
    <div class="text-3xl mb-5 font-semibold border-b border-inherit p-2">
      <p>Customize your password</p>
    </div>
    <div class="flex">
      <div class="flex-auto">
        Password Length
        <div class="my-2">
          <input
            type="number"
            class="border border-inherit p-3 rounded-md shadow-lg bg-white w-20"
          /><span class="ml-4">
            <input
              type="range"
              class="slider appearance-none h-2 rounded-full bg-gray-300 outline-none focus:outline-none"
            />
          </span>
        </div>
      </div>
      <div class="flex-1">
        <div
          class="flex items-center"
          v-for="(option, index) in passwordOptions"
        >
          <input
            :id="`radio_${index}`"
            type="radio"
            class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            v-model="selectedOption"
            :value="option.value"
          />
          <label :for="`radio_${index}`" class="ml-2 text-gray-700">{{
            option.label
          }}</label>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex" v-for="(attr, index) in passwordAttributes">
          <input
            type="checkbox"
            :id="`checkbox_${index}`"
            class="form-checkbox h-5 w-5 text-blue-600"
            v-model="attr.checked"
          />
          <label :for="`checkbox_${index}`" class="ml-2 block text-gray-700 ">{{
            attr.label
          }}</label>
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
export default {
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
