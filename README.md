/**
 * 
 * @authors SunLianLong (https://github.com/sunlianlong/)
 * @date    2016-09-15 09:03:23
 * @version $1.0.1$
 */


# 移动端（H5）上传图片
1. 由于iphone手机竖屏拍照后传到页面上会自动翻转，故利用exifJs读取图片的orientation属性值改变图片显示在页面中的方向，默认orientation值为1时为正方向。

2. 利用jquery的插件photoClip.js + hammer.js + iscroll-zoom.js 实现图片选择后对图片进行旋转和裁切。

3. 修改了jquery.photoClip.js中的部分代码。

4. main.js中写了一个用jquery的ajax方法向服务器上传Uint8Array对象的方法，代码已隐藏。
