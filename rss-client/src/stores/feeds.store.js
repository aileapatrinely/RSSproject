import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers'
import { router } from '@/router'
import { useAlertStore } from '@/stores'

const baseUrl = `${import.meta.env.VITE_API_URL}/feeds`;

export const FeedsStore = defineStore({
    id: 'auth',
    state: () => ({
        feeds: null,
    }),
    actions: {
        async createFeed(url) {
            try {
                const feeds = await fetchWrapper.post(`${this.baseUrl}/create`, url)

                // update pinia state
                this.feeds = feeds
                router.push(this.returnUrl, '/subscribed')
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error)
            }
        },
        async getSubscribedFeeds() {
            try {
                const feeds = await fetchWrapper.get(`${this.baseUrl}/subscribed`)

                this.feeds = feeds
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error)
            }
        },
        async getMyFeed() {
            try {
                const feed = await fetchWrapper.get(`${this.baseUrl}/feeds`)

                this.feeds = feed
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error)
            }
        }
    }
})