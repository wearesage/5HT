<template>
  <View>
    <Transition name="pill">
      <AccountPill v-if="showMenu || showSources" />
    </Transition>

    <Transition name="fade">
      <Menu v-if="showMenu && !forceHide" @open-sources="openSources" />
    </Transition>

    <Transition name="fade">
      <AudioSources v-if="showSources" @close="closeSources" @select-source="selectSource" />
    </Transition>
  </View>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useMagicKeys } from "@vueuse/core";
import { AccountPill, View, useSources, useViewport, useSketches, parseQueryString } from "@wearesage/vue";
import { Menu, AudioSources } from "../components";
import { useRouter } from "@wearesage/vue";
import { AudioSource } from "@wearesage/shared";

const router = useRouter();
const viewport = useViewport();
const sources = useSources();
const sketches = useSketches();
const showSources = ref(!!!sources.source);
const showMenu = ref(!showSources.value);
const forceHide = ref(false);
const { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } = useMagicKeys();
const showMenuTimeout = ref<any>(null);
const forceHideTimeout = ref<any>(null);
const MOUSE_TIMEOUT = 2000;

onMounted(async () => {
  const queryParams = parseQueryString();

  if (queryParams.spotify === "connected") {
    sources.selectSource(AudioSource.SPOTIFY);
    router.cleanQuery("spotify");
    closeSources();
    applyForceHide();
  }
});

watch(
  () => viewport.mouse,
  () => {
    if (forceHide.value || showSources.value) return;
    clearTimeout(showMenuTimeout.value);
    showMenu.value = true;
    showMenuTimeout.value = setTimeout(() => {
      showMenu.value = false;
    }, MOUSE_TIMEOUT);
  }
);

watch(
  () => sketches.sketch,
  () => applyForceHide()
);

watch(ArrowLeft, val => {
  if (val) sketches.selectPreviousSketch("keyboard");
});

watch(ArrowUp, val => {
  if (val) sketches.selectPreviousSketch("keyboard");
});

watch(ArrowRight, val => {
  if (val) sketches.selectNextSketch("keyboard");
});

watch(ArrowDown, val => {
  if (val) sketches.selectNextSketch("keyboard");
});

function applyForceHide() {
  clearTimeout(showMenuTimeout.value);
  clearTimeout(forceHideTimeout.value);
  forceHide.value = true;
  showMenu.value = false;
  forceHideTimeout.value = setTimeout(() => {
    forceHide.value = false;
  }, MOUSE_TIMEOUT / 2);
}

function openSources() {
  showMenu.value = false;
  showSources.value = true;
}

function closeSources() {
  showSources.value = false;
  showMenu.value = true;
}

function selectSource(source: AudioSource) {
  sources.selectSource(source);
  showSources.value = false;
  showMenu.value = false;
}
</script>

<route lang="json">
{
  "name": "Visualizer",
  "meta": {
    "description": "the main visualizer",
    "requiresAuth": true
  }
}
</route>
