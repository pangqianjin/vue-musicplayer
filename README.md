# vue-musicplayer
基于Vue2，vuex，vue-router, element-ui的本地音乐播放器
## 1.支持的功能
- 导入本地歌曲
- 显示本地导入的歌曲列表
- 显示正在播放的歌曲列表
- 显示最近播放的歌曲列表
- 通过上一首，开始/暂停，下一首等三个按钮进行相关控制

## 2.安装方式
克隆仓库后，进入根目录执行:
>yarn/yarn install
## 3.部分效果
### 3.1初始界面
![image](https://user-images.githubusercontent.com/49555245/123771356-8b47dc00-d8fd-11eb-95c4-31b1416cdc75.png)
### 3.2导入本地音乐文件（注意要选择文件夹，会过滤掉非音频文件(非.mp3, .flac, .aac, .ape等)）
![image](https://user-images.githubusercontent.com/49555245/123771454-a0246f80-d8fd-11eb-9429-e7ea603d190c.png)
### 3.3点击歌曲列表的播放按钮开始播放
![image](https://user-images.githubusercontent.com/49555245/123771651-d19d3b00-d8fd-11eb-9000-e989223fbd9f.png)
### 3.4此时播放列表也会添加该歌曲（不重复添加）
![image](https://user-images.githubusercontent.com/49555245/123771762-e8dc2880-d8fd-11eb-84c8-dfe59ad4ba41.png)
### 3.5最近播放列表也会添加该歌曲（会重复添加）
![image](https://user-images.githubusercontent.com/49555245/123771921-08735100-d8fe-11eb-9206-b2221298819d.png)
### 3.6也可通过下方的三个按钮进行控制
播放列表没有歌曲时，歌曲名会显示未知，此时直接点击播放按钮不会播放，需要点击歌曲列表的某一歌曲上的播放按钮
