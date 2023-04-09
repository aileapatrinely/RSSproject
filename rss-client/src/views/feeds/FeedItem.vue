<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps<{
    item: {
        index,
        title,
        creator,
        contentSnippet,
        link,
        pubDate,
        content,
        array,
    }
}>();


const title = computed(() => props.item.title);
const creator = computed(() => props.item.creator);
const description = computed(() => props.item.contentSnippet);
const link = computed(() => props.item.link);
const pubDate = computed(() => props.item.pubDate);
const index = computed(() => props.item.index)
const arrayIndex = computed(() => props.item.array)

// const doc = props.item.content.split('src="')
// const doc2 = doc[1].split('" />')
// const imageUrl = doc2[0]

function redirect(arrayIndex, index) {
    router.push({path:`/article/${arrayIndex}/${index}`});
}

</script>

<template>
    <div>
        <div>
            <div>
            <div>
                <h3 style="color:black">
                {{ title }}
                </h3>
                <!-- <div v-if="props.item.content.contains('img')"> -->
                    <img style="height: 75%; width: 75%;" src="/Users/ailea/Development/backstitchrss/rss-project/rss-client/src/assets/gollum.jpeg">
                    <!-- <img src="{{ imageUrl }}"> -->
                <!-- </div> -->
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
                <div>
                    <button @click="redirect(arrayIndex, index)">Read More</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>


