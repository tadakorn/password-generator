import { defineStore } from "pinia";

export const usePasswordStore = defineStore("password", {
  state: () => ({
    randomPassword: "",
    passwordLength: 16,
  }),
  actions: {
    generatePassword() {
      const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

      let password = "";
      for (let i = 0; i < this.passwordLength; i++) {
        const index = Math.floor(Math.random() * charset.length);
        password += charset[index];
      }

      this.randomPassword = password;
    },
  },
});
