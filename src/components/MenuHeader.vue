<template>
  <Row align="center" justify="center" :collapse="true" cascade gap=".5">
    <h2 ref="text"></h2>
    <slot />
    <CloseButton @click="close" />
  </Row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Row, CloseButton, useTypedText } from "@wearesage/vue";
import { useRoute, useRouter } from "@wearesage/vue";

const props = defineProps<{ title: string }>();
const text = ref();
const $emit = defineEmits(["close"]);
const route = useRoute();
const router = useRouter();
useTypedText(text, props.title);

function close() {
  $emit("close");
  if (route.value.path !== "/visualizer") router.push("/visualizer");
}
</script>

<style lang="scss" scoped>
.row {
  overflow: visible;
  @include mobile {
    @include flex-column(end, end);
    flex-direction: column-reverse;
  }
}
h2 {
  font-size: 2.5rem;
  font-family: "Major Mono Display";
  font-weight: normal;
  text-transform: uppercase;
}
</style>
