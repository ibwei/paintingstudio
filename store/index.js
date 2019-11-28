// vuex存储全局状态数量
export const state = () => ({

    // 是否处于手机模式
    isPhone: false

})

export const mutations = {
    changeIsPhone(state, isPhone) {
        state.isPhone = isPhone
    }
}