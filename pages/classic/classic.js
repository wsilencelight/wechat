import {ClassicModel} from '../../models/classic.js'
let classic = new ClassicModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latestData: {},
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false,
    type: 0 // 0代表movie组件，1代表music组件，2代表eassy组件
  },
  // 加载首页最新期刊
  getLatest () {
    classic.getLatest().then(res => {
      this.setData({
        latestData: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },

  // 加载当前期刊
  getCurrent (nextOrPrevious) {
    const index = this.data.latestData.index
    // classic.getCurrent(index, nextOrPrevious, (res) => {
    //   this.updateLikeStatus(res.id, res.type)
    //   this.setData({
    //     latestData: res,
    //     latest: classic.isLatest(res.index),
    //     first: classic.isFirst(res.index)
    //   })
    // })
    classic.getCurrent(index, nextOrPrevious).then(res => {
      this.updateLikeStatus(res.id, res.type)
      this.setData({
        latestData: res,
        latest: classic.isLatest(res.index),
        first: classic.isFirst(res.index)
      })
    })
  },
  // 查看新的一期
  onLeftClick (e) {
    this.getCurrent('/next')
  },

  //  查看旧的一期
  onRightClick (e) {
    this.getCurrent('/previous')
  },

  // 更新like状态
  updateLikeStatus(artID, category) {
    classic.getClassicLikeStatus(artID, category).then(res => {
      this.setData({
        likeCount: res.data.fav_nums,
        likeStatus: res.data.like_status
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getLatest()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    classic.getLatest((res) => {
      this.updateLikeStatus(res.id, res.type)
      this.setData({
        latestData: res
      })
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})