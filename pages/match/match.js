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
    isMatching: false,
    currentIndex: 0
  },

  onLoad() {
    this.loadCandidates();
  },

  // 加载候选人列表
  loadCandidates() {
    const mockCandidates = [
      {
        id: 1,
        name: '小明',
        age: 25,
        gender: '男',
        avatar: '',
        avatarColor: 'linear-gradient(135deg, #B8E6D0, #A3CFFF)',
        destination: '云南大理',
        travelDate: '2026-06-15',
        interests: ['摄影', '徒步', '美食'],
        bio: '喜欢旅行和摄影，希望找到志同道合的旅伴，一起记录美好瞬间',
        matchScore: 95,
        verified: true
      },
      {
        id: 2,
        name: '小红',
        age: 28,
        gender: '女',
        avatar: '',
        avatarColor: 'linear-gradient(135deg, #FFB8A3, #FFE0A3)',
        destination: '四川稻城',
        travelDate: '2026-07-01',
        interests: ['登山', '露营', '自然'],
        bio: '热爱户外，想要探索更多自然风光，寻找勇敢的旅伴',
        matchScore: 88,
        verified: true
      },
      {
        id: 3,
        name: '小李',
        age: 24,
        gender: '男',
        avatar: '',
        avatarColor: 'linear-gradient(135deg, #C5B8E6, #A3CFFF)',
        destination: '西藏拉萨',
        travelDate: '2026-08-01',
        interests: ['文化', '历史', '摄影'],
        bio: '历史文化爱好者，期待一场心灵之旅，用镜头记录沿途风景',
        matchScore: 82,
        verified: false
      },
      {
        id: 4,
        name: '小华',
        age: 26,
        gender: '女',
        avatar: '',
        avatarColor: 'linear-gradient(135deg, #FFB8C6, #C5B8E6)',
        destination: '新疆喀纳斯',
        travelDate: '2026-09-15',
        interests: ['自驾', '摄影', '美食'],
        bio: '自驾游爱好者，喜欢边走边拍，分享沿途美食',
        matchScore: 78,
        verified: true
      }
    ];

    this.setData({
      candidates: mockCandidates
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
    wx.showModal({
      title: '选择出行时间',
      editable: true,
      placeholderText: '例如：2026-07-01 ~ 2026-07-10',
      success: (res) => {
        if (res.confirm && res.content) {
          this.setData({
            'filters.travelDate': res.content
          });
        }
      }
    });
  },

  // 打开筛选
  openFilters() {
    wx.showActionSheet({
      itemList: ['选择目的地', '选择出行时间', '设置年龄范围'],
      success: (res) => {
        if (res.tapIndex === 0) this.selectDestination();
        else if (res.tapIndex === 1) this.selectTravelDate();
      }
    });
  },

  // 开始匹配
  startMatching() {
    this.setData({ isMatching: true, currentCandidate: null });

    // 模拟匹配过程
    setTimeout(() => {
      this.setData({
        isMatching: false,
        currentCandidate: this.data.candidates[0],
        currentIndex: 0
      });
    }, 1500);
  },

  // 喜欢
  likeCandidate() {
    const candidate = this.data.currentCandidate;
    wx.showToast({
      title: `已喜欢 ${candidate.name}`,
      icon: 'success',
      duration: 1500
    });

    this.advanceCandidate();
  },

  // 跳过
  skipCandidate() {
    this.advanceCandidate();
  },

  // 打招呼
  greetCandidate() {
    const candidate = this.data.currentCandidate;
    wx.showModal({
      title: '打招呼',
      placeholderText: '输入你想说的话...',
      editable: true,
      cancelText: '取消',
      confirmText: '发送',
      success: (res) => {
        if (res.confirm && res.content) {
          wx.showToast({
            title: `已发送消息给 ${candidate.name}`,
            icon: 'success'
          });
          this.advanceCandidate();
        }
      }
    });
  },

  // 切换到下一个候选人
  advanceCandidate() {
    const { currentIndex, candidates } = this.data;
    if (currentIndex < candidates.length - 1) {
      this.setData({
        currentCandidate: candidates[currentIndex + 1],
        currentIndex: currentIndex + 1
      });
    } else {
      wx.showToast({
        title: '已查看所有旅伴',
        icon: 'none'
      });
      this.setData({ currentCandidate: null });
    }
  },

  // 查看详情（TabBar 页面用 switchTab）
  viewDetails() {
    // 保存当前查看的用户 ID 到全局状态
    getApp().globalData.currentUserId = this.data.currentCandidate.id;
    wx.switchTab({
      url: '/pages/profile/profile'
    });
  }
});
