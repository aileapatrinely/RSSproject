<script setup>
import { onMounted } from 'vue';
import { useFeedStore } from '../../stores';
import { useRoute } from 'vue-router'

const route = useRoute()
const feedStore = useFeedStore()
const index = route.params.index
const arrayIndex = route.params.arrayIndex
let article;


onMounted(async() => {
    const item = await feedStore.getData(arrayIndex, index)
    article = item
    return article
})
</script>

<template>
  <div>
      <div>
          <div>
          <div>
              <h3 style="color:black">{{ item.title }}</h3>
          </div>
          <div>
              <h5 style="color:darkgray">{{ item.creator }}</h5>
          </div>
          <div>
              <p style="color:black">{{ item.contentSnippet }}</p>
          </div>
          </div>
      </div>
  </div>
</template>