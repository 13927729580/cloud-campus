/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

// 从 sdk 中取出中间件
// 这里展示如何使用 Koa 中间件完成登录态的颁发与验证
const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

//学校
router.post('/school', controllers.school)

// 登录接口
router.post('/login', controllers.login)
//首页导航功能接口
router.post('/navigation', controllers.navigation)
//首页发布按钮
router.post('/floating_button', controllers.floating_button)

//电话
router.post('/phone', controllers.phone)

//公告
router.post('/notice', controllers.notice)
router.post('/notice_detail', controllers.notice_detail)
//作业 
router.post('/homework', controllers.homework)
//消息
router.post('/class_inform', controllers.class_inform)

router.post('/homework_information_detail', controllers.homework_information_detail)
//首页卡片数据(最新)
router.post('/index_latest', controllers.index_latest)
//班级
router.post('/class_category', controllers.class_category)
//科目类型
router.post('/subject', controllers.subject)
//信息发布
router.post('/publish', controllers.publish)
//校园风采
router.post('/campus_life', controllers.campus_life)
router.post('/campus_life_detail', controllers.campus_life_detail)
router.post('/like_comment', controllers.like_comment)
router.post('/campus_top_img', controllers.campus_top_img)
//个人中心
router.post('/account_modify', controllers.account_modify)

// 用户信息接口（可以用来验证登录态）
router.get('/user', validationMiddleware, controllers.user)
// --- 图片上传 Demo --- //
// 图片上传接口，小程序端可以直接将 url 填入 wx.uploadFile 中
router.post('/upload', controllers.upload)

// --- 信道服务接口 Demo --- //
// GET  用来响应请求信道地址的
router.get('/tunnel', controllers.tunnel.get)
// POST 用来处理信道传递过来的消息
router.post('/tunnel', controllers.tunnel.post)

// --- 客服消息接口 Demo --- //
// GET  用来响应小程序后台配置时发送的验证请求
router.get('/message', controllers.message.get)
// POST 用来处理微信转发过来的客服消息
router.post('/message', controllers.message.post)

module.exports = router
