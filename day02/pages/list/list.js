// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:"hello world",
    img:"/images/微信图片_20250324195833.jpg",
    randomNum: Math.random()*10,
    count: 0,
    msg: "你好，",
    type: 1,
    flag: true,
    arr1: ["苹果","香蕉","西瓜"]
  },
//   发起GET请求
getInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
          name: 'll',
          age: 12
      },
      success: (res) => {
          console.log(res)
      }
    })
},
  //定义按钮的事件处理函数 
  btnTapHandler(e){
      console.log(e)
  },
  btnTapHandler2(e){
    console.log(e)
    this.setData(
        {
            count: this.data.count + e.target.dataset.info
        }
    )
  },
  btnTapHandler3(e) {
    console.log(e.detail.value)
  },
  btnTapHandler4(e) {
    this.setData(
        {
            msg:e.detail.value
        }
    )
      console.log(e.detail.value)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})