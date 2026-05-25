// pages/index/index.js
const app = getApp();

Page({
  data: {
    userInfo: null,
    isLogin: false,
    recommendations: [],
    activities: []
  },

  onLoad() {
    this.checkLoginStatus();
    this.loadRecommendations();
  },

  onShow() {
    this.checkLoginStatus();
  },

  // 检查登录状态
  checkLoginStatus() {
    this.setData({
      isLogin: app.globalData.isLogin,
      userInfo: app.globalData.userInfo
    });
  },

  // 加载推荐内容
  loadRecommendations() {
    // TODO: 从服务器加载推荐数据
    const mockRecommendations = [
      {
        id: 1,
        name: '小明',
        age: 25,
        avatar: '',
        destination: '云南大理',
        travelDate: '2026-06-15 ~ 06-20',
        tags: ['摄影', '徒步', '美食'],
        matchRate: 95
      },
      {
        id: 2,
        name: '小红',
        age: 28,
        avatar: '',
        destination: '四川稻城',
        travelDate: '2026-07-01 ~ 07-10',
        tags: ['登山', '露营', '自然'],
        matchRate: 88
      },
      {
        id: 3,
        name: '小李',
        age: 24,
        avatar: '',
        destination: '西藏拉萨',
        travelDate: '2026-08-01 ~ 08-15',
        tags: ['文化', '历史', '摄影'],
        matchRate: 82
      }
    ];

    this.setData({
      recommendations: mockRecommendations
    });
  },

  // 跳转个人资料
  goToProfile() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    });
  },

  // 查看旅伴详情
  viewTravelMate(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/profile/profile?id=${id}`
    });
  },

  // 发起匹配
  startMatch() {
    if (!this.data.isLogin) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/match/match'
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.loadRecommendations();
    wx.stopPullDownRefresh();
  }
});
