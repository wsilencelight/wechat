import {
  HTTP
} from "../utils/http2"
class RAL extends HTTP {
  loginByWechat (id, faceimg, nickname) {
    const res = this.request({
      url: '/loginbywechat',
      data: {
        id: id,
        faceImage: faceimg,
        nickname: nickname
      },
      method: 'POST'
    })
    return res
  }
}

export {
  RAL
}