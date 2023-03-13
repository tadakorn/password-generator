<template>
  <div class="bg-white rounded-lg p-6 shadow-xl my-5">
    <div class="flex">
      <div class="flex-1">
        <input
          type="text"
          class="w-full px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-500"
          placeholder="Enter your text here"
        />
      </div>
      <div class="flex-none">
        <button>
          <img src="../public/img/copy.png" />
        </button>
        <button>
          <img src="../public/img/copy.png" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomPassword: 0,
    };
  },
};
</script>
