import {
  HTTP
} from '../utils/http'
class BookModel extends HTTP {
  // 获取热门书籍
  getHotList () {
    return this.request({
      url: 'book/hot_list'
    })
  }
  // 获取喜欢书籍数量
  getMyBookCount () {
    return this.request({
      url: 'book/favor/count'
    })
  }
  // 获取书籍详细信息
  getDetail(bid) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }
  // 获取当前图书点赞状态
  getLikeStatus(bid) {
    return this.request({
      url: `/book/${bid}/favor`
    })
  }
  // 获取短评
  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }
}

export {
  BookModel
}