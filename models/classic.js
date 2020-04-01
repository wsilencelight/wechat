import {HTTP} from '../utils/http.js'
class ClassicModel extends HTTP {
  // 进入页面获取页面数据，同时加入缓存
  getLatest (callback) {
    this.request({
      url: 'classic/latest',
      method: 'GET',
      success: (res) => {
        callback(res.data)
        this._setLatestIndex(res.data.index)
        this._setkey(res.data.index, res.data)
      }
    })
  }
  // 获取当前期刊，通过第二个参数来判断是上一期还是下一期,加入缓存功能
  getCurrent (index, nextOrPrevious, callback) {
    let key = nextOrPrevious === '/next' ? this._getkey(index + 1) : this._getkey(index -1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: 'classic/' + index + nextOrPrevious,
        method: 'GET',
        success: (res) => {
          callback(res.data)
          this._setkey(res.data.index, res.data)
        }
      })
    } else {
      callback(classic)
    }
    
  }

  // 缓存期刊用
  _getkey (index) {
    return 'classic-' + index
  }

  _setkey (index, data) {
    const key = this._getkey(index)
    wx.setStorageSync(key, data)
  }

  // 判断是否最新
  isLatest(index) {
    return this._getLatestIndex() === index ? true : false
  }

  // 判断是否是最后一期
  isFirst(index) {
    return index === 1 ? true : false
  }

  // 缓存最新一期的index
  _setLatestIndex(index) {
    wx.setStorageSync('latestIndex', index)
  }

  // 获取最新一期的index
  _getLatestIndex() {
    return wx.getStorageSync('latestIndex')
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

  // 因为缓存带来的点赞问题，所以点赞单独获取
  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
      url: 'classic/' + category + '/' + artID + '/favor',
      success: sCallback
    })
  }
}
export {ClassicModel}