// vuex存储全局状态数量
export const state = () => ({

    // 是否处于手机模式
    isPhone: false,
    // 顶部菜单栏的激活项
    menuIndex: 0,

})

export const mutations = {
    changeIsPhone(state, isPhone) {
        state.isPhone = isPhone
    },
    changeMenuIndex(state, menuIndex) {
        state.menuIndex = menuIndex
    }
}