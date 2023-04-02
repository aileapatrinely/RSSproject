import axios from 'axios';

export default class FeedRepository {
    static prefix = 'feeds';

    static createFeed(url) {
        return this.axios.post(`${this.prefix}/create`, url);
    }

    static getSubscribedList() {
        return this.axios.get(`${this.prefix}/subscribed`);
    }

    static getFeeds() {
        return this.axios.get(`${this.prefix}/feeds`);
    }
}