// pages/profile/profile.js
const app = getApp();

Page({
  data: {
    userInfo: {
      name: '',
      age: '',
      gender: '',
      avatar: '',
      bio: '',
      tags: [],
      city: '',
      creditScore: 180,
      travelCount: 0,
      matchCount: 0,
      rating: '95%',
      unreadCount: 3
    }
  },

  onLoad() {
    this.loadUserInfo();
  },

  loadUserInfo() {
    const userInfo = app.globalData.userInfo || {};
    this.setData({ userInfo });
  },

  // 进入编辑资料页
  goToEditProfile() {
    wx.showToast({
      title: '编辑资料',
      icon: 'none'
    });
  },

  // 信用分详情
  showCreditDetail() {
    wx.showToast({
      title: '信用分 ' + this.data.userInfo.creditScore + ' - 表现良好',
      icon: 'none'
    });
  },

  // 我的行程
  goToMyTrips() {
    wx.switchTab({
      url: '/pages/trip/trip'
    });
  },

  // 旅行日记
  goToDiary() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 消息通知
  goToMessages() {
    wx.switchTab({
      url: '/pages/chat/chat'
    });
  },

  // 收藏
  goToFavorites() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 设置
  goToSettings() {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  },

  // 认识搭子
  goToMyBuddies() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 好评率
  showRating() {
    wx.showToast({
      title: '好评率 ' + this.data.userInfo.rating,
      icon: 'none'
    });
  }
});
