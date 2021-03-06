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

# 如何使用组件/声明组件
- "component": true来声明组件
- 需要在page/(comopent也可以)的.json文件中引用usingComponents
```
 以键值对的形式，key是组件名，可以随意命名，value是组件路径
 "usingComponents": {
    "like-cmp": "components/like/index"
  }
```
# 小程序特有rpx
- 750rpx = 屏幕宽，所以rpx值应该是多少要根据psd原稿设计是基于多宽的

# 小程序标签之page
- 调试工具查看页面结构会发现最外层的标签就是page,就像html标签
可以利用这个来设置一些全局样式

# 组件能从全局继承哪些样式？（组件能继承的非常少）
- font和color

# page能继承绝大部分样式(page之所以是page是因为在app.json文件中声明了)

# 设计页面时尽量不要留一些无意义的空白
- 比如文字默认会有留白，可设置行高和字体一样来消除

# 事件的监听
- 可以用bind:eventName的形式来监听(但是原生组件只能用bindeventName的形式
- 也可以用catch:eventName,区别就在于bind不会阻止冒泡，catch会阻止冒泡
- [原生组件包括](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)

# properties(可以在组件外面修改其值)
- 其数据的定义可以有type(必须有),value和observer(数据变化时执行，新版本推荐直接使用和properties同级的observers,性能更好)

# wx.request来请求数据
- [详见](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
- url想要能正常访问要在小程序后台设置合法域名，当然在开发环境下也可以在设置中关闭域名校验

# 箭头函数是可以解决this的指代问题
- 箭头函数不只是语法简洁，其本身没有this作用域的特点也使其解决了默写情况下的
this指代问题，比如wx.request中回调函数想用外面的this,声明称箭头函数即可

# 24db7abf93112e742d6812f112f409de