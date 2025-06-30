<template>
  <Root />
  <Renderer />
  <Toast />
  <Popover />
</template>

<script lang="ts" setup>
import { Root, Toast, Popover, useUserState } from "@wearesage/vue";
import Renderer from "./components/Renderer.vue";

useUserState();
</script>

<style lang="scss">
@import "@wearesage/vue/css";
@import "@wearesage/vue/styles/appkit-custom.css";
</style>
