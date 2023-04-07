<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    item: {
        title,
        creator,
        contentSnippet,
        link,
        pubDate
    }
}>();

const title = computed(() => props.item.title);
const creator = computed(() => props.item.creator);
const description = computed(() => props.item.contentSnippet);
const link = computed(() => props.item.link);
const pubDate = computed(() => props.item.pubDate);
</script>

<template>
    <div>
        <div>
            <div>
            <div>
                <h3 style="color:black">
                {{ title }}
                </h3>
            </div>
            <div>
                <h5 style="color:darkgray">
                {{ creator }}
                </h5>
                <h6 style="color:darkgray">
                {{ pubDate.substring(0,17) }}
                </h6>
            </div>
            <div>
                <p style="color:black">
                {{ description.substring(0,100) + '...' }}
                </p>
                <a href="{{ link }}" target="_blank">
                {{ link }}
                </a>
            </div>
            </div>
        </div>
    </div>
</template>


