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
        },
        sortListBySelectedOption(feedList, selectedOption) {
            if(feedList === undefined) {
                return [];
            }

            const sortBySelectedName = selectedOption.name;

            if (sortBySelectedName === 'Published Date') {
                return feedList.sort(sortByDateDesc);
              }
             
              if (sortBySelectedName === 'Title') {
                return feedList.sort(sortByTitleAsc);
              }
             
              if (sortBySelectedName === 'Description') {
                return feedList.sort(sortByDescriptionAsc);
              }
             
              return feedList;
        },
        sortByDateDesc(itemA, itemB) {
            const dateA = dayjs(itemA.pubDate);
            const dateB = dayjs(itemB.pubDate);


            if (dateA.isBefore(dateB)) {
                return 1;
            }
            if (dateA.isAfter(dateB)) {
                return -1;
            }
            // names must be equal
            return 0;
        },
        sortByTitleAsc(itemA, itemB) {
            // ignore upper and lowercase
            const titleA = itemA.title.toLowerCase();
            const titleB = itemB.title.toLowerCase();


            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            // names must be equal
            return 0;
        },
        sortByDescriptionAsc(itemA, itemB) {
            // ignore upper and lowercase
            const descriptionA = itemA.description.toLowerCase();
            const descriptionB = itemB.description.toLowerCase();


            if (descriptionA < descriptionB) {
                return -1;
            }
            if (descriptionA > descriptionB) {
                return 1;
            }
            // names must be equal
            return 0;
        },
    }
})