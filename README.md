# wechat
小程序学习之路


# app.json
- [配置项文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages)
- page配置项是用来配置每个页面的(一个页面由四个基本元素组成)，生成页面的时候会自动添加到配置项里
- window用于设置小程序的状态栏、导航条、标题、窗口背景色
```
这四项都是导航栏，第一项是导航栏背景色
"navigationBarBackgroundColor": "#cccccc",
导航栏的文字
"navigationBarTitleText": "bmusic",
导航栏的颜色，只能是白色或者黑色
"navigationBarTextStyle": "black",
导航栏样式，default就是默认的，即使不加下面这句话也是有的，还有custom,这个允许自己定
义导航栏但是分享的图标是消除不了的
"navigationStyle": "default"
```
```
 这几项都是设置background,值得一提的是background并不是我们开发的主体部分
 而是当页面往下拉出现在导航栏下面的一小块显示加载或者刷新的那部分
 背景色
 "backgroundColor": "red",
 加载小圆点的样式，有light和dark选项，默认是dark(个人觉得dark看起来比较明显，light效果比较淡)
 "backgroundTextStyle": "light",
 重点，是否支持下拉，默认false，据说不加手机上真机测试也可以下拉
 而开发工具不行，实测若是不改成true的话哪都下拉不了
 "enablePullDownRefresh": true
 这个配置也挺有用，设置是否允许小程序随屏幕旋转，默认portrait竖屏展示
 auto随屏幕旋转，landscape横屏显示
  "pageOrientation": "portrait"
```
- permission小程序接口权限相关设置
```
想要用map功能必须声明如下字段
"permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
```
# sitemap.json
- 这个文件是配置小程序的内容是否允许被微信爬虫爬到的