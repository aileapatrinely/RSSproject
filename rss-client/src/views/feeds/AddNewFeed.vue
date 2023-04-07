<script setup>
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'
import { useFeedStore, useAlertStore } from '@/stores'
import { router } from '@/router'
const schema = Yup.object().shape({
  url: Yup.string().required('Url is required'),
})
async function onSubmit(values) {
  const feedStore = useFeedStore
  const alertStore = useAlertStore()
  try {
    await feedStore.createFeed(values)
    await router.push('/feed')
    alertStore.success('New feed added successfully.')
  } catch (error) {
    alertStore.error(error)
  }
}
</script>

<template>
  <div class="card m-3">
    <h4 class="card-header" style="color:black">Add Feed</h4>
    <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
          <label style="color:black">URL</label>
          <Field
            name="url"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Add Feed
          </button>
          <router-link to="feed" class="btn btn-link">Cancel</router-link>
        </div>
      </Form>
    </div>
  </div>
</template>