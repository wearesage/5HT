<template>
  <View>
    <Column v-if="playlist" width="100vw" cascade>
      <Record :src="playlist.artwork?.['1000x1000']" size="120vh" />
      <AudiusPlaylistBody :playlist="playlist" />
    </Column>
  </View>
</template>

<script setup lang="ts">
import { View, Column, Record, AudiusPlaylistBody, useRouteParamId, useGetAudiusPlaylistById } from "@wearesage/vue";

const id = useRouteParamId();
const playlist = useGetAudiusPlaylistById(id);
</script>

<style lang="scss" scoped>
.record {
  transform: translateY(-15vh) !important;
}

main {
  height: 100vh;
  overflow-y: auto;
}
</style>

<route lang="json">
{
  "name": "Audius Playlist Detail",
  "meta": {
    "description": "view an Audius playlist",
    "requiresAuth": true
  }
}
</route>
