import {HTTP} from '../utils/http.js'
class ClassicModel extends HTTP {
  // 进入页面获取页面数据
  getLatest (callback) {
    this.request({
      url: 'classic/latest',
      method: 'GET',
      success: (res) => {
        callback(res)
      }
    })
  }
  // 点赞
  likeAdd (params, callback) {
    this.request({
      url: 'like',
      method: 'POST',
      data: params,
      success: (res) => {
        callback(res)
      }
    })
  }
  // 取消点赞
  likeCancel (params, callback) {
    this.request({
      url: 'like/cancel',
      method: 'POST',
      data: params,
      success: (res) => {
        callback(res)
      }
    })
  }
}
export {ClassicModel}