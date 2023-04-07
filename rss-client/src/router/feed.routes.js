import { Layout, FeedList } from '@/views/feeds'

export default {
    path: '/feed',
    component: Layout,
    children: [
        { path: '', component: FeedList },
        // { path: 'add', component: AddNewFeed}
    ]
}