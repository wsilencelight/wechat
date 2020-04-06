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

  getMyBookCount () {
    return this.request({
      url: 'book/favor/count'
    })
  }
}

export {
  BookModel
}