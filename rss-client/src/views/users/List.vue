<script setup lang="ts">
import { useFeedStore } from '../../stores';
import { onMounted, ref } from 'vue';

const feedStore = useFeedStore();
const feeds = []
const isReady = ref(false);
onMounted(async() => {
  const feedUrls = await feedStore.getAll()
  feedUrls.map((feedUrl)=> {
  feeds.push(feedUrl)
  return feeds
})
  console.log(feedUrls)
  isReady.value = true;
  return feedUrls
})
</script>

<template>
  <div>
    <h2 style="color:black">My Feeds</h2>
    <router-link to="/users/add" class="btn btn-sm btn-success mb-2">Add Feed</router-link>
    <template v-if="isReady === true">
      <h5
        v-for="feed in feeds"
        :key="feed"
        style="color:darkgray"
      >{{ feed }}</h5>
    </template>
  </div>
</template>