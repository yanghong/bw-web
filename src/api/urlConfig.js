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
export const saveChange = serverRoot + '/user/web/saveChange';

/**
 * 忘记密码（修改密码）
 * @type {string}
 */
export const changePwd = serverRoot + '/user/web/changePwd';

/**
 * 通过用户名密码登录
 * @type {string}
 */
export const login = serverRoot + '/web/user/login';

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
 * 添加或修改展柜信息
 */
export const addOrUpdateShowcase = serverRoot + '/web/showcase/addOrUpdateShowcase';

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
export const upload = serverRoot + '/common/upload';

/**
* 获取手机验证码
*/
export const getVcode = serverRoot + '/common/getVcode';

// 视频操作相关
/**
 * 根据目录id或者搜索标题内容获取视频列表（分页）
 */
export const getVideoListByCategoryOrSearch = serverRoot + '/web/video/getVideoListByCategoryOrSearch';

/**
 * 获删除video
 */
export const deleteVideoById = serverRoot + '/web/video/deleteVideoById';

/**
 * 添加视频信息
 */
export const addOrUpdateVideos = serverRoot + '/web/video/addOrUpdateVideos';

// 目录接口
/**
 * 获取目录列表，目录就是首页的菜单
 */
export const getCategorys = serverRoot + '/category/getCategorys';

