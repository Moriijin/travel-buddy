const mockData = require('../../utils/mock_data')

Page({
  data: {
    filters: {
      distance: '全部',
      tripType: '全部',
      interest: '全部'
    },
    distanceOptions: ['全部', '5km', '10km', '20km', '同城', '同省'],
    tripTypes: ['全部', '周边游', '短途游', '长途游'],
    interests: ['全部', '美食', '拍照', '徒步', '探店', '看展', '自驾'],
    topics: [],
    searchKeyword: ''
  },

  onLoad() {
    this.setData({ topics: mockData.topics })
  },

  // 搜索
  onSearch(e) {
    this.setData({ searchKeyword: e.detail.value })
  },

  // 设置筛选
  setFilter(e) {
    const { type, value } = e.currentTarget.dataset
    const filters = { ...this.data.filters }
    filters[type] = value
    this.setData({ filters })
  },

  // 查看话题
  viewTopic(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({ title: `查看话题 ${id}`, icon: 'none' })
  },

  // 查看全部话题
  viewAllTopics() {
    wx.showToast({ title: '查看全部话题', icon: 'none' })
  }
})
