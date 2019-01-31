// pages/WhatsNew/WhatsNew.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    new1895: ["账号切换逻辑优化", "服务端代码开源，可在 我的->关于->开源 查看项目地址"],
    new189:["修复课程表在特殊情况下显示异常","测试与保存按钮合并为登录按钮","新增账号切换功能"],
    new1881: ["紧急修复"],
    new188: ["增加导出课程表功能，具体使用方法可在导出页面查看", "在最近一个学期成绩最后增加全部学期的 GPA 显示（全部和必修）", "右下角的按钮可切换到左下角"],
    new187: ["增加服务器负载显示", "一些细微调整", "开发中功能：1.计算全部课程绩点而不是只有一个学期绩点 2.导出课程表到日历（包含上下课时间），熟悉 iCal 的同学可以联系我共同完成"],
    new186: ["UI 配色修改", "加粗显示当前周数","调整右下角刷新按钮","如果你希望共同开发小程序请到 GitHub 查看相关信息","开源代码转到另一个账号下，原有代码不再更新，新的地址可以在 我的->关于->开源 查看","注：由于发现一些比较严重的问题提前发布这个开发版本"],
    new185: ["做了一些清理", "修复几处遗留问题"],
    new183: ["相同的课程表使用相同的颜色显示", "稍微修改了课程表显示方式（需重新获取课程表并重启小程序）", "常规修复"],
    new180: ["增加广告显示，具体信息请查看“关于”页面", "修复 iPad 课程表显示不正常", "课程表左上角增加当前周数显示", "增加服务器状态显示", "修改登录提示", "取消下拉刷新成绩", "UI 调整"],
    new170: ["调整登录方式为个人门户，请及时更新信息", "修复挂科成绩无法显示的 bug", "账号设置页面增加测试登录按钮", "提升信息获取速度", "逻辑优化", "UI 调整"],
    new160: ["优化课程表显示", "调整打开分享逻辑", "点击课程可以显示时间重复的课程（滑动查看）", "UI 调整"],
    new155: ["调整打开分享卡片的逻辑", "修复一个恶性 bug", "修复加载数据时逻辑错误"],
    new153: ["增加客服入口", "可通过右上角进行转发操作", "冷启动时主动检查更新", "UI 调整"],
    new150: ["增加课程表查询", "成绩查询增加 GPA (平均绩点)查询", "在 GitHub 上开放源代码 (仅小程序，服务器源码将在未来开放)", "优化冷启动数据加载逻辑", "提高验证码识别准确率", "课程表提供手动刷新操作", "修复一些不可感知 bug"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh()
  }
})