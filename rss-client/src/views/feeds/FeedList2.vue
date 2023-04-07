<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>

<template>
  <div v-if="user">
    <h1 style="color:black">Hi {{ user.username }}!</h1>
    <p style="color:black">This will eventually be the feed</p>
    <p><router-link to="/add">Add a new feed</router-link></p>
  </div>
</template>