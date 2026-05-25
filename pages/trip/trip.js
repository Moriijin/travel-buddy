const mockData = require('../../utils/mock_data')

Page({
  data: {
    activeTab: 'browse',
    myTrips: [],
    trips: [],
    hasMyTrips: false
  },

  onLoad() {
    this.setData({ trips: mockData.trips })
  },

  switchTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab })
  },

  publishTrip() {
    wx.showToast({ title: '发布行程功能开发中', icon: 'none' })
  },

  viewTripDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({ title: `行程 ${id} 详情`, icon: 'none' })
  },

  joinTrip(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认报名',
      content: '报名后将通知行程发起人',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '报名成功', icon: 'success' })
        }
      }
    })
  }
})
