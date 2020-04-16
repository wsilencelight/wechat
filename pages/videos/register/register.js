import {
  RAL
} from "../../../models/register&login" 
const ral = new RAL()
// pages/videos/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取微信用户code
  getCode () {
    const promise = new Promise(resolve => {
      wx.login({
        success: (res) => {
          resolve(res)
        }
      })
    })
    return promise
  },
  // 请求用户信息并登陆
  getuserinfo(res) {
    const userinfo = res.detail.userInfo
    this.getCode().then(res => {
      return new Promise(resolve => {
        resolve(res.code)
      })
    }).then(res => {
      return ral.loginByWechat(res, userinfo.avatarUrl, userinfo.nickName)
    }).then(res => {
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})