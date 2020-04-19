// components/register/form/index.js
import {
  RAL 
} from '../../../models/register&login'
const ral = new RAL()
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '' // 注册/登陆完成后清空表单
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 注册
    // params:{username,password}
    handleRegister (params) {
      ral.register(params)
        .then(res => {
          // console.log(res)
          const data = res.data
          if (data.status === 200) {
            wx.showToast({
              title: '注册成功，请登录',
              icon: 'success',
              duration: 3000
            })
          } else {
            wx.showToast({
              title: data.msg || '注册失败，请稍后再试',
              icon: 'none',
              duration: 3000
            })
          }
          this.setData({
            value: ''
          })
        })
    },
    // 登陆
    handleLogin (params) {
      ral.login(params)
        .then(res => {
          // 1.将用户信息写入storage2.跳转
          const data = res.data
          if (data.status === 200) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 3000
            })
            app.userInfo = data.data
            wx.switchTab({
              url: '/pages/classic/classic',
            })
          } else {
            wx.showToast({
              title: data.msg || '注册失败，请稍后再试',
              icon: 'none',
              duration: 3000
            })
          }
        })
    },
    // 表单提交触发
    handleSubmitClick (e) {
      const detail = e.detail
      if (detail.target.dataset.submitType == 'register') {
        this.handleRegister(detail.value)
      } else {
        this.handleLogin(detail.value)
      }
    }
  }
})
