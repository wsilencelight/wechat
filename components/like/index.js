// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 1234
    },
    like: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dislikeImg: "images/dislike.png",
    likeImg: "images/like.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击切换点赞图片和加减点赞数
    handleLikeClick (e) {
      this.setData({
        num: this.properties.like ? --this.properties.num : ++this.properties.num,
        like: !this.properties.like
      })
    }
  }
})
