import {
    createRouter,
    createWebHashHistory,
} from './grouter/index'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
