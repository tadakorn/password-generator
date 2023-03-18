<template>
  <div class="md:text-5xl text-2xl text-center mb-5 font-semibold pt-10">
    <p>This is Test</p>
    <p>Instantly generate a secure,</p>
    <p>random password with the</p>
    <p>LastPass online tool</p>
  </div>
  <div class="text-center">
    <p>
      Go beyond online generators with <a href="#"> LastPass Premium </a>. No
      matter what device or app you’re
    </p>
    <p>
      using, all your passwords are automatically generated, saved and synced –
      wherever you go.
    </p>
  </div>
  <PasswordCard />
  <CustomizePassword />
</template>

<script>
import { usePasswordStore } from "../store/password";
export default {
  setup() {
    const passwordStore = usePasswordStore();
    return { passwordStore };
  },
  mounted() {
    this.passwordStore.generatePassword();
  },
};
</script>
