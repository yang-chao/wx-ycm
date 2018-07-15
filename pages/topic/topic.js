// topic/topic.js
const api = require("../../constants/api.js")
var that

Page({
  /**
   * 页面的初始数据
   */
  data: {
    question: "",
    answers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    wx.request({
      url: api.topic,
      method: 'GET',
      success: function(res) {
        console.log(res.data)
        var answers = res.data.answer
        var index
        for (var i = 0; i < answers.length; i++) {
          answers[i] = (i + 1) + '. ' + answers[i]
        }
        that.setData({
          question: res.data.question,
          answers: res.data.answer
        })
      },
      fail: function() {
        console.log('fail')
      },
      complete: function() {
        console.log('complete')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})