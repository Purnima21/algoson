

const routes = [
    {
        path: '/',
        component: resolve => require(['../views/Home.vue'], resolve),
        children: [
            {
                path: '',
                component: resolve => require(['../components/Users.vue'], resolve),
            },
            {
                path: '/posts/:id',
                component: resolve => require(['../components/Posts.vue'], resolve),
            },
            {
                path: '/each-post/:id',
                component: resolve => require(['../components/EachPost.vue'], resolve),
            },
        ]
    },
]

export default routes
