import {HTTP} from '../utils/http.js'
class ClassicModel extends HTTP {
  getLatest () {
    const params = {
      url: 'classic/latest'
    }
    return this.request(params).then(res => {
      this._setLatestIndex(res.data.index)
      this._setkey(res.data.index, res.data)
      return new Promise(resolve => {
        resolve(res.data)
      })
    })
  }
  // 获取当前期刊，通过第二个参数来判断是上一期还是下一期,加入缓存功能
  getCurrent (index, nextOrPrevious) {
    let key = nextOrPrevious === '/next' ? this._getkey(index + 1) : this._getkey(index -1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      return this.request({
        url: 'classic/' + index + nextOrPrevious,
        method: 'GET',
        success: (res) => {
          callback(res.data)
          this._setkey(res.data.index, res.data)
        }
      }).then(res => {
        this._setkey(res.data.index, res.data)
        return new Promise(resolve => {
          resolve(res.data)
        })
      })
    } else {
      return new Promise(resolve => {
        resolve(classic)
      })
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
  likeAdd (params) {
    return this.request({
      url: 'like',
      method: 'POST',
      data: params
    })
  }
  // 取消点赞
  likeCancel (params) {
    return this.request({
      url: 'like/cancel',
      method: 'POST',
      data: params
    })
  }

  // 因为缓存带来的点赞问题，所以点赞单独获取
  getClassicLikeStatus(artID, category, callback) {
    return this.request({
      url: 'classic/' + category + '/' + artID + '/favor'
    })
  }
}
export {ClassicModel}