const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'www.ibwei.com'
        : '/api';
export const Api = {
    //获取画室信息
    getPaintingInfo: baseUrl + '/paintingStudio/info',
    courseEnroll: baseUrl + '/courseEnroll/courseEnrollAdd',
    courselBannerList: baseUrl + '/coursel/courselBannerList',
    feedbackAdd: baseUrl + '/feedback/feedbackAdd'
}