// vuex存储全局状态数量
export const state = () => ({
  // 是否处于手机模式
  isPhone: false,
  // 顶部菜单栏的激活项
  menuIndex: 0,
  // 底部菜单是否显示
  tabbarShow: true,
  // 顶部菜单是否显示
  topbarShow: true,
  // 画室详细信息
  paintingInfo: null,
  // 当前文章分类名
  articleCategory: '',
  user: null,
  isLogin: false,
  loginDialogShow: false,
  loginDialogType: 'login'
});

export const mutations = {
  changeIsPhone(state, isPhone) {
    state.isPhone = isPhone;
  },
  changeMenuIndex(state, menuIndex) {
    state.menuIndex = menuIndex;
  },
  changeTabbarShow(state, show) {
    state.tabbarShow = show;
  },
  changTopbarShow(state, show) {
    state.topbarShow = show;
  },
  setPaintingInfo(state, paintingInfo) {
    state.paintingInfo = paintingInfo;
  },
  setArticleCategory(state, category) {
    state.articleCategory = category;
  },
  changeUser(state, user) {
    state.user = user;
  },
  changeIsLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
  changeLoginDialogShow(state, show) {
    state.loginDialogShow = show;
  },
  changeLoginDialogType(state, type) {
    state.loginDialogType = type;
  }
};
