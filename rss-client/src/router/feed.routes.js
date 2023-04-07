import { Layout, FeedList2 } from '@/views/feeds'

export default {
    path: '/feed',
    component: Layout,
    children: [
        { path: '', component: FeedList2 },
        // { path: 'item', component: FeedListItem },
        // { path: 'add', component: AddNewFeed}
    ]
}