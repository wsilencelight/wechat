import {
  config
} from '../config.js'
class HTTP {
  request ({url, data = {}, method = 'GET'}) {
    const promise = new Promise(resolve => {
      wx.showLoading({
        title: 'waiting...',
      })
      wx.request({
        url: config.api_base_url_local + url,
        method: method,
        data: data,
        header: {
          'content-type': 'application/json',
          'appkey': config.appkey
        },
        success: res => {
          // 2xx代表请求成功，此时取消loading
          wx.hideLoading()
          // console.log(res)
          let code = String(res.statusCode)
          if (code.startsWith('2')) {
            resolve(res)
          } else {
            wx.showToast({
              title: res.data.msg || '请求异常，请稍后再试',
              // title: '请求异常，请稍后再试',
              icon: 'none',
              duration: 3000
            })
          }
        },
        fail: (err) => {
          wx.hideLoading()
          wx.showToast({
            title: '请求异常，请稍后再试',
            icon: 'none',
            duration: 3000
          })
        }
      })
    })
    return promise
  }
}

export {HTTP}