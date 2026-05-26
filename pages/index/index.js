// pages/index/index.js
const app = getApp();

Page({
  data: {
    userInfo: null,
    isLogin: false,
    city: '北京',
    currentMood: 0,
    activeFilter: 0,
    isRefreshing: false,
    tripSummary: {
      ongoing: 1,
      upcoming: 1,
      completed: 2
    },
    buddies: []
  },

  onLoad() {
    this.checkLoginStatus();
    this.loadBuddies();
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

  // 加载搭子列表
  loadBuddies() {
    const buddies = [
      {
        id: 'annie',
        name: '小星星旅行家',
        age: 22,
        gender: 'female',
        distance: '3km',
        match: 95,
        verified: true,
        sig: '想找一个会拍照的搭子一起去环球影城 🎢',
        tags: [
          { text: '美食', tagClass: 'chip-mint' },
          { text: '拍照', tagClass: 'chip-sky' },
          { text: '慢节奏', tagClass: 'chip-lavender' }
        ],
        liked: false
      },
      {
        id: 'jack',
        name: '背包客小王',
        age: 25,
        gender: 'male',
        distance: '5km',
        match: 88,
        verified: true,
        sig: '周末想去爬香山，有没有一起的 🏔️',
        tags: [
          { text: '徒步', tagClass: 'chip-mint' },
          { text: '穷游', tagClass: 'chip-peach' },
          { text: '特种兵式', tagClass: 'chip-rose' }
        ],
        liked: false
      },
      {
        id: 'luna',
        name: '月亮不睡',
        age: 20,
        gender: 'female',
        distance: '8km',
        match: 82,
        verified: false,
        sig: '想要一个会做攻略的搭子～',
        tags: [
          { text: '美食', tagClass: 'chip-mint' },
          { text: '探店', tagClass: 'chip-peach' },
          { text: '看展', tagClass: 'chip-lavender' }
        ],
        liked: false
      },
      {
        id: 'max',
        name: 'Max在路上',
        age: 28,
        gender: 'male',
        distance: '12km',
        match: 78,
        verified: true,
        sig: '自驾爱好者，周末经常周边游 🚗',
        tags: [
          { text: '自驾', tagClass: 'chip-sky' },
          { text: '摄影', tagClass: 'chip-lavender' },
          { text: '露营', tagClass: 'chip-mint' }
        ],
        liked: false
      },
      {
        id: 'cici',
        name: 'Cici爱旅行',
        age: 24,
        gender: 'female',
        distance: '2km',
        match: 91,
        verified: true,
        sig: '环球影城年卡持有者，求搭子 🎢',
        tags: [
          { text: '乐园', tagClass: 'chip-peach' },
          { text: '拍照', tagClass: 'chip-sky' },
          { text: '美食', tagClass: 'chip-mint' }
        ],
        liked: false
      }
    ];

    this.setData({ buddies });
  },

  // 跳转个人资料
  goToProfile() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    });
  },

  // 选择心情
  selectMood(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ currentMood: index });
  },

  // 选择筛选
  selectFilter(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({ activeFilter: index });
  },

  // 筛选行程
  filterTrips(e) {
    const status = e.currentTarget.dataset.status;
    wx.navigateTo({
      url: `/pages/trip/trip?status=${status}`
    });
  },

  // 换一批
  refreshBuddies() {
    this.setData({ isRefreshing: true });
    // 模拟刷新：打乱顺序
    setTimeout(() => {
      const shuffled = [...this.data.buddies].sort(() => Math.random() - 0.5);
      this.setData({
        buddies: shuffled,
        isRefreshing: false
      });
    }, 800);
  },

  // 不感兴趣
  passBuddy(e) {
    const id = e.currentTarget.dataset.id;
    const buddies = this.data.buddies.filter(b => b.id !== id);
    this.setData({ buddies });
    wx.showToast({
      title: '已跳过',
      icon: 'none'
    });
  },

  // 喜欢
  likeBuddy(e) {
    const id = e.currentTarget.dataset.id;
    const buddies = this.data.buddies.map(b =>
      b.id === id ? { ...b, liked: true } : b
    );
    this.setData({ buddies });
    wx.showToast({
      title: '❤️ 已喜欢',
      icon: 'none'
    });
  },

  // 打招呼
  sayHi(e) {
    const id = e.currentTarget.dataset.id;
    if (!this.data.isLogin) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }
    wx.navigateTo({
      url: `/pages/chat/chat?id=${id}`
    });
  },

  // 查看旅伴详情
  viewTravelMate(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/profile/profile?id=${id}`
    });
  },

  // 显示匹配详情
  showMatchDetail(e) {
    const match = e.currentTarget.dataset.match;
    wx.showToast({
      title: `匹配度 ${match}%`,
      icon: 'none'
    });
  },

  // 显示通知
  showNotifications() {
    wx.showToast({
      title: '暂无新通知',
      icon: 'none'
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.loadBuddies();
    wx.stopPullDownRefresh();
  }
});
