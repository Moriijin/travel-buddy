App({
  globalData: {
    userInfo: null,
    isLogin: false,
    systemInfo: {}
  },

  onLaunch() {
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;

    // 检查登录状态
    this.checkLoginStatus();
  },

  onShow() {
    // 小程序启动或从后台进入前台
    console.log('App onShow');
  },

  onHide() {
    // 小程序从前台进入后台
    console.log('App onHide');
  },

  // 检查登录状态
  checkLoginStatus() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.globalData.userInfo = userInfo;
      this.globalData.isLogin = true;
    }
  },

  // 用户登录
  login(userInfo) {
    this.globalData.userInfo = userInfo;
    this.globalData.isLogin = true;
    wx.setStorageSync('userInfo', userInfo);
  },

  // 用户登出
  logout() {
    this.globalData.userInfo = null;
    this.globalData.isLogin = false;
    wx.removeStorageSync('userInfo');
  },

  // 全局错误处理
  onError(err) {
    console.error('App onError:', err);
  }
});
