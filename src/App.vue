<template>
  <Root />
  <Renderer />
  <Toast />
  <Popover />
</template>

<script lang="ts" setup>
import { Root, Toast, Popover, useUserState } from "@wearesage/vue";
import Renderer from "./components/Renderer.vue";

// Initialize user state tracking (which initializes auth + socket)
useUserState();
</script>

<style lang="scss">
@import "@wearesage/vue/css";
@import "@wearesage/vue/styles/appkit-custom.css";
</style>
