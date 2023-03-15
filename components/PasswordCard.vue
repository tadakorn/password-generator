<template>
  <div class="bg-white rounded-lg p-6 shadow-xl my-5">
    <div class="flex">
      <div class="flex-1">
        <input
          type="text"
          class="px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
          placeholder="Enter your text here"
          :value="passwordStore.randomPassword"
        />
      </div>
      <div class="flex items-center gap-2">
        <span class="cursor-pointer copy-icon" @click="passwordStore.copyToClipboard()">
          <font-awesome-icon size="xl" icon="fa-regular fa-clone" />
        </span>
        <span class="curser-pointer">
          <font-awesome-icon size="xl" icon="fa-solid fa-arrows-rotate" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ClipboardJS, clipboard } from "clipboard";
import { usePasswordStore } from "../store/password";

export default {
  setup() {
    const passwordStore = usePasswordStore();
    return { passwordStore };
  },
  methods: {
    copyToClipboard(text) {
      // Use clipboard.js to copy text to clipboard
      const clipboard = new ClipboardJS(".copy-icon", {
        text: () => text,
      });

      clipboard.on("success", () => {
        this.copied = true;
        clipboard.destroy();
      });

      clipboard.on("error", () => {
        this.copied = false;
        clipboard.destroy();
      });

      clipboard.onClick({ currentTarget: ".copy-icon" });
    },
  },
};
</script>
