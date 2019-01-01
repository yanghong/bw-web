const serverRoot = 'http://39.104.108.81:9080/bw';

// 用户相关接口
/**
 * 用户注册接口
 * @type {string}
 */
export const register= serverRoot + '/web/user/register';

/**
 * 修改用户相关信息
 * @type {string}
 */
export const saveChange = serverRoot + '/web/user/saveChange';

/**
 * 忘记密码（修改密码）
 * @type {string}
 */
export const changePwd = serverRoot + '/web/user/changePwd';

/**
 * 通过用户名密码登录
 * @type {string}
 */
export const login = serverRoot + '/web/user/login';

/**
 * 确认账号唯一，可被注册
 * @type {string}
 */
export const checkUnique = serverRoot + '/web/user/checkUnique';

/**
 * 通过id获取用户信息
 * @type {string}
 */
export const getById = serverRoot + '/web/user/getById';

/**
 * 取消关注其他用户
 * @type {string}
 */
export const cancelFollow = serverRoot + '/web/user/cancelFollow';

/**
 * 关注其他用户
 * @type {string}
 */
export const follow = serverRoot + '/web/user/follow';

/**
 * 获取关注人员列表
 * @type {string}
 */
export const getFollowersList = serverRoot + '/web/user/getFollowersList';

/**
 * 获取粉丝列表
 * @type {string}
 */
export const getFansList = serverRoot + '/web/user/getFansList';

// 厂牌操作相关
/**
 * 添加或修改厂牌
 * @type {string}
 */
export const addOrUpdateBrand = serverRoot + '/web/brand/addOrUpdateBrand';

/**
 * check是否可以创建厂牌
 */
export const checkCreateBrand = serverRoot + '/web/brand/checkCreateBrand';

/**
 * 获取自己的厂牌
 */
export const getOwnBrand = serverRoot + '/web/brand/getOwnBrand';

/**
 * 获取收藏的厂牌
 */
export const getCollectBrands = serverRoot + '/web/brand/getCollectBrands';

/**
 * 收藏厂牌
 */
export const addBrandCollection = serverRoot + '/web/brand/addCollection';

/**
 * 取消收藏厂牌
 */
export const cancelBeandCollection = serverRoot + '/web/brand/cancelCollection';

// 展柜操作相关
/**
 * 根据目录id或者搜索标题内容获取展柜列表（分页）
 */
export const  getShowcaseListByCategoryOrSearch = serverRoot + '/web/showcase/getShowcaseListByCategoryOrSearch';

/**
 * 删除展柜
 */
export const deleteShowcaseById = serverRoot + '/web/showcase/deleteShowcaseById';

/**
 * 通过id获取详细信息
 */
export const getDetailById = serverRoot + '/web/showcase/getDetailById';

/**
 * 添加或修改展柜信息
 */
export const addOrUpdateShowcase = serverRoot + '/web/showcase/addOrUpdateShowcase';

/**
 * 点赞操作
 */
export const likeShowcase = serverRoot + '/web/showcase/like';

/**
 * 获取收藏的展柜
 */
export const getCollectShowcases = serverRoot + '/web/showcase/getCollectShowcases';

/**
 * 取消收藏展柜
 */
export const cancelCollection = serverRoot + '/web/showcase/cancelCollection';

/**
 * 收藏展柜
 */
export const addCollection = serverRoot + '/web/showcase/addCollection';

// 通用接口
/**
 * 校验手机验证码
 */
export const checkVcode = serverRoot + '/common/checkVcode';

/**
 * 发送邮箱验证码
 */
export const sendMailVcode = serverRoot + '/common/sendMailVcode';

/**
 * 校验邮箱和验证码
 */
export const checkMailAndVcode = serverRoot + '/common/checkMailAndVcode';

/**
 * 上传图片视频接口
 */
export const uploadUrl = serverRoot + '/common/upload';

/**
* 获取手机验证码
*/
export const getVcode = serverRoot + '/common/getVcode';

// 视频操作相关
/**
 * 收藏视频
 */
export const videoAddCollection = serverRoot + '/web/video/addCollection';

/**
 * 取消收藏视频
 */
export const videoCancelCollection = serverRoot + '/web/video/cancelCollection';

/**
 * 获取收藏的视频
 */
export const getCollectVideos = serverRoot + '/web/video/getCollectVideos';

/**
 * 电一下
 */
export const diss = serverRoot + '/web/video/diss';

/**
 * 通过id获取详细信息
 */
export const getVideoDetailById = serverRoot + '/web/video/getDetailById';

/**
 * 点赞操作
 */
export const like = serverRoot + '/web/video/like';

/**
 * 添加或修改视频信息
 */
export const addOrUpdateVideos = serverRoot + '/web/video/addOrUpdateVideos';

/**
 * 获删除video
 */
export const deleteVideoById = serverRoot + '/web/video/deleteVideoById';

/**
 * 根据目录id或者搜索标题内容获取视频列表（分页）
 */
export const getVideoListByCategoryOrSearch = serverRoot + '/web/video/getVideoListByCategoryOrSearch';

// 兑换相关
/**
 * 根据类型获取兑换列表
 */
export const doExchange = serverRoot + '/web/exchange/doExchange';

/**
 * 通过用户id获取兑换列表
 */
export const getOrderListByUserId = serverRoot + '/web/exchange/getOrderListByUserId';

/**
 * 通过id获取兑换订单详情
 */
export const getOrderByOrderId = serverRoot + '/web/exchange/getOrderByOrderId';

/**
 * 通过类别获取兑换商品列表
 */
export const getExchangeInfosByType = serverRoot + '/web/exchange/getExchangeInfosByType';

// 目录接口
/**
 * 获取目录列表，目录就是首页的菜单
 */
export const getCategorys = serverRoot + '/category/getCategorys';

// 平台相关
/**
 * 获取轮播图片
 */
export const getCarouselList = serverRoot + '/sys/carousel/getCarouselList';

/**
 * 根据城市id获取地区列表
 */
export const getCountryByCityId = serverRoot + '/sys/location/getCountryByCityId';

/**
 * 根据省份id获取城市列表
 */
export const getCityByProvinceId = serverRoot + '/sys/location/getCityByProvinceId';

/**
 * 获取省份信息
*/
export const getProvinceList = serverRoot + '/sys/location/getProvinceList';
