<template>
  <View>
    <nav>
      <MenuHeader title="settings" />
      <Column align="end" cascade>
        <Toggle label="Disable Flashing" v-model="settings.disableFlashing" />
        <Toggle label="Neon Mode" v-model="settings.neonMode" />
        <Toggle label="Show Menu Labels" v-model="settings.showMenuLabels" />
        <Toggle label="Always Show Track" v-model="settings.alwaysShowTrack" />
        <Toggle label="Shuffle Designs" v-model="settings.shuffleDesigns" />
        <Toggle label="Infinity Play" v-model="settings.infinityPlay" />
        <Toggle label="Prefer Lossless Audio" v-model="settings.preferLossless" />
        <RangeInput label="Visualizer Speed" v-model="settings.visualizerSpeed" :min="0" :max="2" :step="0.001" />
      </Column>
    </nav>
  </View>
</template>

<script setup lang="ts">
import { Column, Toggle, RangeInput, useSettings } from "@wearesage/vue";
import { MenuHeader } from "../components";

const settings = useSettings();
</script>

<style lang="scss" scoped>
nav {
  @include fixed-menu;
}
</style>

<route lang="json">
{
  "name": "Settings",
  "meta": {
    "description": "configure the visualizer",
    "requiresAuth": true
  }
}
</route>
