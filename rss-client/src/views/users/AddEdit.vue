<script setup>
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'
import { useRoute } from 'vue-router'
import { useFeedStore, useAlertStore } from '@/stores'
import { router } from '@/router'
const feedStore = useFeedStore()
const alertStore = useAlertStore()
const schema = Yup.object().shape({
  url: Yup.string().required('Url is required'),
})
async function onSubmit(values) {
  try {
    await feedStore.createFeed(values)
    message = 'Subscribed to feed'
    alertStore.success(message)
  } catch (error) {
    alertStore.error(error)
  }
  await router.push('/users')
}
</script>

<template>
  <div class="card m-3">
    <h4 class="card-header" style="color:black">Subscribe to Feed</h4>
    <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
          <label style="color:black">Url</label>
          <Field
            name="url"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Subscribe
          </button>
          <router-link to="users" class="btn btn-link">Cancel</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>