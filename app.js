App({
  onLaunch: function () {
    // 用户信息
    userInfo: {}
    wx.getStorage({
      key: 'classic-8'
    }).then(res => {
      console.log(res)
    })
    console.log(wx.getStorageSync('classic-8'))
}})