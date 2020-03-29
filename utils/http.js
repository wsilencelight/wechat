import {config} from '../config.js'
class HTTP {
  request (params) {
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        // 2xx代表成功,失败就在fail
        let code = String(res.statusCode)
        if (code.startsWith('2')) {
          params.success(res)
        } else {
          wx.showToast({
            // title: res.data ? res.data.msg : '请求异常，请稍后再试',
            title: '请求异常，请稍后再试',
            icon: 'none',
            duration: 3000
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '请求异常，请稍后再试',
        })
      }
    })
  }
}

export {HTTP}