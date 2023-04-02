<template>
      <div>
        <div>
            <div>
                <image>{{ this.imageUrl }}</image>
            </div>
            <div>
              <span>
                {{ this.title }}
              </span>
            </div>
            <div>
              <span>
                {{ this.description }}
              </span>
            </div>
            <div>
              <span>
                {{ this.pubDate }}
              </span>
            </div>
            <div>
              <FilterDropdown/>
            </div>
        </div>
      </div>
   </template>
   
   <script lang="ts">
   import { Component, Prop } from 'vue-property-decorator';
   import FilterDropdown from './FilterDropdown.vue';

   
   @Component({
    components: {
      FilterDropdown,
    },
   })
   export default class FeedItem {
    @Prop({ required: true }) private feed;
   
    private get title() {
      return this.feed.title;
    }
   
   
    private get description() {
      return this.feed.description;
    }
   
    private get image() {
      return this.feed.imageUrl;
    }
   
    private get pubDate() {
      return this.feed.pubDate;
    }
   }
   </script>
   
   
   
   