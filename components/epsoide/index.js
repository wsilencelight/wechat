// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function (newVal, oldVal) {
        let val = newVal < 10 && newVal.length < 2 ? '0' + newVal : newVal
        this.setData({
          index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    month: '',
    year: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached: function () {
    let date = new Date()
    const monthList = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月','十二月']
    this.setData({
      year: date.getFullYear(),
      month: monthList[date.getMonth()]
    })
  }
})
