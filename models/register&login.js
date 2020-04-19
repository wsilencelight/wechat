import {
  HTTP
} from "../utils/http2"
class RAL extends HTTP {
  // 微信注册并登陆
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
  // 注册
  register ({username, password}) {
    const res = this.request({
      url: '/register',
      data: {
        username: username,
        password: password
      },
      method: 'POST'
    })
    return res
  }
  // 登陆
  login (params) {
    const res = this.request({
      url: '/login',
      data: {
        ...params
      },
      method: 'POST'
    })
    return res
  }
}

export {
  RAL
}