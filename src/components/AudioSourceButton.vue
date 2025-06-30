<template>
  <IconButton @click="$emit('click')" :class="{ [sources?.source || 'src']: true }" :icon="sources.sourceIcon" :label="label" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IconButton, useSources, useSettings } from "@wearesage/vue";

defineEmits(["click"]);

const settings = useSettings();
const sources = useSources();
const showLabels = computed(() => settings.showMenuLabels);
const label = computed(() => (showLabels.value ? sources.prettySource ?? "Audio Source" : null));
</script>

<style lang="scss" scoped>
@each $source, $color in $source-colors {
  .#{$source} {
    border-width: 2px;
    border-color: $color !important;
    color: $color;

    &:hover {
      color: $color;
    }
  }
}
</style>
