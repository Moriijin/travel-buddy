// pages/match/match.js
Page({
  data: {
    filters: {
      destination: '',
      travelDate: '',
      ageRange: [18, 35],
      gender: 'all',
      interests: []
    },
    candidates: [],
    currentCandidate: null,
    isMatching: false
  },

  onLoad() {
    this.loadCandidates();
  },

  // 加载候选人列表
  loadCandidates() {
    // TODO: 从服务器加载
    const mockCandidates = [
      {
        id: 1,
        name: '小明',
        age: 25,
        gender: '男',
        avatar: '',
        destination: '云南大理',
        travelDate: '2026-06-15',
        interests: ['摄影', '徒步', '美食'],
        bio: '喜欢旅行和摄影，希望找到志同道合的旅伴',
        matchScore: 95
      },
      {
        id: 2,
        name: '小红',
        age: 28,
        gender: '女',
        avatar: '',
        destination: '四川稻城',
        travelDate: '2026-07-01',
        interests: ['登山', '露营', '自然'],
        bio: '热爱户外，想要探索更多自然风光',
        matchScore: 88
      },
      {
        id: 3,
        name: '小李',
        age: 24,
        gender: '男',
        avatar: '',
        destination: '西藏拉萨',
        travelDate: '2026-08-01',
        interests: ['文化', '历史', '摄影'],
        bio: '历史文化爱好者，期待一场心灵之旅',
        matchScore: 82
      }
    ];

    this.setData({
      candidates: mockCandidates,
      currentCandidate: mockCandidates[0]
    });
  },

  // 选择目的地
  selectDestination() {
    wx.showModal({
      title: '选择目的地',
      editable: true,
      placeholderText: '输入你想去的目的地',
      success: (res) => {
        if (res.confirm && res.content) {
          this.setData({
            'filters.destination': res.content
          });
        }
      }
    });
  },

  // 选择旅行时间
  selectTravelDate() {
    wx.chooseDatePicker({
      success: (res) => {
        this.setData({
          'filters.travelDate': res.date
        });
      }
    });
  },

  // 开始匹配
  startMatching() {
    this.setData({ isMatching: true });
    
    // 模拟匹配过程
    setTimeout(() => {
      this.setData({ 
        isMatching: false,
        currentCandidate: this.data.candidates[0]
      });
    }, 1500);
  },

  // 喜欢
  likeCandidate() {
    wx.showToast({
      title: '已发送匹配请求',
      icon: 'success'
    });
    
    // 切换到下一个
    const currentIndex = this.data.candidates.findIndex(c => c.id === this.data.currentCandidate.id);
    if (currentIndex < this.data.candidates.length - 1) {
      this.setData({
        currentCandidate: this.data.candidates[currentIndex + 1]
      });
    }
  },

  // 跳过
  skipCandidate() {
    const currentIndex = this.data.candidates.findIndex(c => c.id === this.data.currentCandidate.id);
    if (currentIndex < this.data.candidates.length - 1) {
      this.setData({
        currentCandidate: this.data.candidates[currentIndex + 1]
      });
    }
  },

  // 查看详情
  viewDetails() {
    wx.navigateTo({
      url: `/pages/profile/profile?id=${this.data.currentCandidate.id}`
    });
  }
});
