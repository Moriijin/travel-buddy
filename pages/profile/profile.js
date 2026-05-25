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
      travelCount: 0,
      matchCount: 0
    },
    isEditing: false
  },

  onLoad() {
    this.loadUserInfo();
  },

  loadUserInfo() {
    const userInfo = app.globalData.userInfo || {};
    this.setData({ userInfo });
  },

  // 进入编辑模式
  editProfile() {
    this.setData({ isEditing: true });
  },

  // 保存个人信息
  saveProfile() {
    // TODO: 保存到服务器
    this.setData({ isEditing: false });
    wx.showToast({
      title: '保存成功',
      icon: 'success'
    });
  },

  // 修改昵称
  onNameInput(e) {
    this.setData({
      'userInfo.name': e.detail.value
    });
  },

  // 修改年龄
  onAgeInput(e) {
    this.setData({
      'userInfo.age': parseInt(e.detail.value)
    });
  },

  // 选择性别
  selectGender() {
    wx.showActionSheet({
      itemList: ['男', '女', '其他'],
      success: (res) => {
        const genders = ['男', '女', '其他'];
        this.setData({
          'userInfo.gender': genders[res.tapIndex]
        });
      }
    });
  },

  // 修改个人简介
  onBioInput(e) {
    this.setData({
      'userInfo.bio': e.detail.value
    });
  },

  // 添加标签
  addTag() {
    wx.showModal({
      title: '添加标签',
      editable: true,
      success: (res) => {
        if (res.confirm && res.content) {
          const tags = this.data.userInfo.tags || [];
          tags.push(res.content);
          this.setData({
            'userInfo.tags': tags
          });
        }
      }
    });
  },

  // 删除标签
  deleteTag(e) {
    const index = e.currentTarget.dataset.index;
    const tags = this.data.userInfo.tags;
    tags.splice(index, 1);
    this.setData({
      'userInfo.tags': tags
    });
  },

  // 查看旅行记录
  viewTravelHistory() {
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
  }
});
