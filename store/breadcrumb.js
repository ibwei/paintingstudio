export const state = () => ({
    route: [{
            path: '/',
            pathName: '首页'
        },
        {
            path: '/',
            pathName: '首页2'
        },
        {
            path: '/',
            pathName: '首页3'
        }
    ]
})

export const mutations = {
    addRoute(state, text) {
        state.route.push({
            path: text.path,
            pathName: text.pathName
        })
    },
    removeRoute(state, todo) {
        state.route = state.route.fiter((params) => { return params.pathName !== todo })
    }
}