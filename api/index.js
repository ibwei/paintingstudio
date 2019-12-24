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
    // 获取文章分类列表
    getArticleType: baseUrl + '/article/categoryList',
    // 获取文章详情
    getArticleDetail: baseUrl + '/article/detail',
    // 获取文章列表(根据分类)
    getArticleListByType: baseUrl + '/article/list',
    // 文章阅读+1
    articleAddRead: baseUrl + '/article/addRead',
    // 文章点赞量+1
    articleAddPraise: baseUrl + '/article/addPraise',

}