import { Layout, FeedList, FeedDetails } from '@/views/feeds'

export default {
    path: '/feed',
    component: Layout,
    children: [
        { path: '', component: FeedList },
        { path: '/article/:arrayIndex/:index', component: FeedDetails}
    ]
}