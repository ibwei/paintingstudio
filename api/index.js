const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'www.ibwei.com'
        : '/api';
export const Api = {
    //获取画室信息
    getPaintingInfo: baseUrl + '/paintingStudio/info',
    //用户报名列表
    courseEnroll: baseUrl + '/courseEnroll/courseEnrollAdd',
    //获取轮播图
    courselBannerList: baseUrl + '/coursel/courselBannerList',
    //用户反馈
    feedbackAdd: baseUrl + '/feedback/feedbackAdd',
    // 首页获取学生作品列表
    getStudentWorksList: baseUrl + '/studentWorks/list',
    // 首页获取画室动态作品列表
    getArticleList: baseUrl + '/article/articleList',
}