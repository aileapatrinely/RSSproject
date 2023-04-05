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
            </div>
        </div>
    </template>

    <script setup lang="ts">
    import FilterDropdown from './FilterDropdown.vue';
    import { computed, ref, PropType } from 'vue';

    const props = defineProps({
        feed: {
            type: Object as PropType<Object>,
            required: true,
        }
    })

    const title = computed(() => props.feed.title);

    const description = computed(() => props.feed.description);

    const imageUrl = computed(() => props.feed.imageUrl);

    const pubDate = computed(() => props.feed.pubDate);

</script>
