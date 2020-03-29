// components/like/index.js
import {ClassicModel} from '../../models/classic.js'
let classicModel = new ClassicModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 0
    },
    like: {
      type: Boolean,
      value: false
    },
    art_id: {
      type: Number,
      value: null
    },
    type: {
      type: Number,
      value: null
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
      const params = {
        art_id: this.properties.art_id,
        type: this.properties.type
      }
      if (this.properties.like) {
        classicModel.likeCancel(params, (res) => {
          this.setData({
            num: --this.properties.num,
            like: false
          })
        })
      } else {
        classicModel.likeAdd(params, (res) => {
          this.setData({
            num: ++this.properties.num,
            like: true
          })
        })
      }
     
    }
  }
})
