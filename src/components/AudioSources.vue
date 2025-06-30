<template>
  <nav>
    <MenuHeader @close="$emit('close')" title="choose your audio source" />
    <IconButton icon="spotify" @click="$emit('select-source', AudioSource.SPOTIFY)" label="Spotify" />
    <IconButton icon="audius" @click="$emit('select-source', AudioSource.AUDIUS)" label="Audius" />
    <IconButton icon="radio-paradise" @click="$emit('select-source', AudioSource.RADIO_PARADISE)" label="Radio Paradise" />
    <IconButton icon="kexp" @click="$emit('select-source', AudioSource.KEXP)" label="KEXP" />
    <IconButton icon="microphone" @click="$emit('select-source', AudioSource.MICROPHONE)" label="Microphone" />
    <IconButton icon="upload" @click="$emit('select-source', AudioSource.FILE)" label="File" />
  </nav>
</template>

<script setup lang="ts">
import { IconButton } from "@wearesage/vue";
import { AudioSource } from "@wearesage/shared";
import MenuHeader from "./MenuHeader.vue";

defineEmits(["select-source", "close"]);
</script>

<style lang="scss" scoped>
nav {
  @include fixed-menu;
}
</style>
