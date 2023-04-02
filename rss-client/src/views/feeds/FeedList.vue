<template>
    <div>
        <template v-if="this.feed.length > 0">
          <div>
            <div>
                  <div>
                    <h2>
                      'My Feed'
                    </h2>
                  </div>
            </div>
          </div>
              <div>
                Title
              </div>
              <div>
                Description
              </div>
              <div>
                Published Date
              </div>
            </div>
          <FeedItem
            v-for="feed in this.feeds"
            :key="this.feed.title"
            :feed="feed"
          />
   </template>
</template>
   
   <script lang="ts">
   import { Component, Prop } from 'vue-property-decorator';
   import FeedItem from './FeedItem.vue';
   
   
   @Component({
    components: {
      FeedItem,
    },
   })
   export default class FeedList {
   
    @Prop({ required: true }) private readonly feeds!: [];
   }
   </script>