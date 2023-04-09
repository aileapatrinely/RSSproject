<script setup lang="ts">
import { computed, onMounted } from 'vue';
import fs from 'fs'
import path from 'path'
const props = defineProps<{
    item: {
        title,
        creator,
        contentSnippet,
        link,
        pubDate,
        content
    }
}>();

const title = computed(() => props.item.title);
const creator = computed(() => props.item.creator);
const description = computed(() => props.item.contentSnippet);
const link = computed(() => props.item.link);
const pubDate = computed(() => props.item.pubDate);
const doc = props.item.content.split('src="')
const doc2 = doc[1].split('" />')
const imageUrl = doc2[0]
const imagePath = path.join(__dirname, 'public', 'image.png')
const imageSrc = await downloadImage()

async function downloadImage(){
    const response = await fetch(imageUrl)
    const buffer = await response.arrayBuffer()
    fs.writeFileSync(imagePath, Buffer.from(buffer))
}



const img = new Image()
img.src = imageUrl
document.body.appendChild(img)
</script>

<template>
    <div>
        <div>
            <div>
            <div>
                <h3 style="color:black">
                {{ title }}
                </h3>
                <div v-if="props.item.content.contains('img')">
                    <body>
                        <img src="{{ imageSrc }}">
                    </body>
                </div>
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


