<template>
  <View>
    <AudiusSearch />
    <Transition name="fade">
      <Column v-if="audius.results?.length === 0" width="100%" cascade>
        <AudiusFeatured />
        <AudiusTrending type="playlists" title="Trending Playlists" @select="viewPlaylist" />
        <AudiusTrending type="tracks" title="Trending Tracks" />
      </Column>
    </Transition>
  </View>
</template>

<script setup lang="ts">
import { View, AudiusSearch, Column, AudiusFeatured, AudiusTrending, useAudius, useRouter } from "@wearesage/vue";

const audius = useAudius();
const router = useRouter();

function viewPlaylist({ id }: { id: string }) {
  router.push(`/audius/playlists/${id}`);
}

audius.fetchTrending();
</script>

<route lang="json">
{
  "name": "Audius Home",
  "meta": {
    "description": "audius library dashboard",
    "requiresAuth": true
  }
}
</route>

<style lang="scss" scoped>
main {
  @include size(100vw, 100vh);
  @include hide-scroll-bar;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
