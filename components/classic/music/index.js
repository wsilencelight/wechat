// components/classic/music/index.js
import {classicBehavior} from '../classic-beh'
let bgm = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBehavior],
  properties: {
    musicSrc: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
    status: false // 0/1 表示 未/正播放
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePlayerClick () {
      let status = this.data.status
      this.setData({
        status: !status
      })
      if (!status) {
        bgm.src = this.properties.musicSrc
        bgm.title = this.properties.title
        bgm.coverImgUrl = this.properties.image
      } else {
        bgm.pause()
      }
    },
    // 监听自带音乐播放器的事件
    _monitorPlayer () {
      bgm.onPlay(() => {
        console.log('aaa')
        this._recoverStatus()
      })
      bgm.onPause(() => {
        console.log('bbb')
        this._recoverStatus()
      })
      bgm.onStop(() => {
        console.log('ccc')
        this._recoverStatus()
      })
      bgm.onEnded(() => {
        console.log('eee')
        this._recoverStatus()
      })
    },

    _recoverStatus () {
      if (bgm.src === this.properties.musicSrc) {
        this.setData({
          status: true
        })
      }
      if (bgm.paused){
        this.setData({
          status: false
        })
      }
    }
  },
  attached () {
    this._recoverStatus()
    this._monitorPlayer()
  },

  detached () {
    // bgm.stop()
  }
})
