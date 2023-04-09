<script setup lang="ts">
import { useFeedStore } from '../../stores';
import FeedItem from './FeedItem.vue';
import { onMounted, ref } from 'vue';
const feedStore = useFeedStore();
const feed = []
let sortedFeed: any = []
const isSorted = ref(false)
const isReady = ref(false);
let index = 0;
let arrayIndex = 0;
onMounted(async() => {
  const feeds = await feedStore.getMyFeed()
  feeds.map((array)=>{
    array.map((item)=>{
      item.index = index
      item.array = arrayIndex
      feed.push(item)
      index ++
      return feed
    })
    arrayIndex ++
    return feed
  })

  isReady.value = true
})
async function sortByTitle(){
  const feeds = await feedStore.sortByTitle(feed)
  sortedFeed = feeds
  isSorted.value = true;
  return sortedFeed
}
async function sortByDescription(){
  const feeds = await feedStore.sortByDescription(feed)
  sortedFeed = feeds
  isSorted.value = true;
  return sortedFeed
}
async function sortByPubDate(){
  const feeds = await feedStore.sortByPubDate(feed)
  sortedFeed = feeds
  isSorted.value = true;
  return sortedFeed
}

</script>

<template>
  <div>
    <div>
      <button @click="sortByTitle()">Sort by title</button>
      <button @click="sortByDescription()">Sort by description</button>
      <button @click="sortByPubDate()">Sort by published date</button>
    </div>
    <template v-if="isReady === true && isSorted === false">
      <FeedItem v-for="item in feed" :key="item" :item="item"/>
    </template>
    <template v-if="isSorted === true">
      <FeedItem v-for="item in sortedFeed" :key="item" :item="item"/>
    </template>
  </div>
</template>