<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>

<template>
  <div v-if="user">
    <h1 style="color:black">Hi {{ user.username }}!</h1>
    <p style="color:black">You're logged in to your RSS Feed!!</p>
    <p><router-link to="/users" class="btn btn-link">Go to my account</router-link></p>
    <p><router-link to="/feed" class="btn btn-link">Go to my feed</router-link></p>
  </div>
</template>
