import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers'
import { useAlertStore } from '@/stores'

const baseUrl = `${import.meta.env.VITE_API_URL}/feeds`

export const useFeedStore = defineStore({
    id: 'feeds',
    state: () => ({
        feeds: [],
        feed:{}
    }),
    actions: {
        async createFeed(url) {
            try {
                const feeds = await fetchWrapper.post(`${baseUrl}/create`, url)

                // update pinia state
                this.feeds = feeds
                // router.push(this.returnUrl, '/subscribed')
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error)
            }
        },
        async getAll() {
            this.feeds = { loading: true }
            try {
                const feeds = await fetchWrapper.get(`${baseUrl}/subscribed`)
                return feeds;
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error)
            }
        },
        async getMyFeed() {
            try {
                const feed = await fetchWrapper.get(`${baseUrl}`)
                return feed;
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error)
            }
        },
        async sortByTitle(feedList) {
            const sortedList = []
            const sortedFeed = await feedList.sort((itemA, itemB)=>itemA.title < itemB.title ? -1 : (itemA.title > itemB.title) ? 1 : 0);
                sortedFeed.map((feed)=>{
                    sortedList.push(feed)
                    return sortedList
                })
                return sortedList
        },
        async sortByDescription(feedList) {
            const sortedList = []
            const sortedFeed = await feedList.sort((itemA, itemB)=>itemA.contentSnippet < itemB.contentSnippet ? -1 : (itemA.contentSnippet > itemB.contentSnippet) ? 1 : 0);
                sortedFeed.map((feed)=>{
                    sortedList.push(feed)
                    return sortedList
                })
                return sortedList
        },
        async sortByPubDate(feedList) {
            const sortedList = []
            const sortedFeed = await feedList.sort((itemA, itemB) =>itemA.isoDate < (itemB.isoDate) ? 1 : (itemA.isoDate > itemB.isoDate) ? -1: 0)

            sortedFeed.map((feed)=>{
                sortedList.push(feed)
                return sortedList
            })
            console.log(sortedList)
            return sortedList
        },
    }
})