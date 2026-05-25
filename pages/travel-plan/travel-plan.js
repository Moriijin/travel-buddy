// pages/travel-plan/travel-plan.js
Page({
  data: {
    plans: [],
    showCreateForm: false
  },

  onLoad() {
    this.loadPlans();
  },

  // 加载旅行计划
  loadPlans() {
    const mockPlans = [
      {
        id: 1,
        title: '云南大理之行',
        destination: '云南大理',
        startDate: '2026-06-15',
        endDate: '2026-06-20',
        budget: 3000,
        status: '进行中',
        participants: 2,
        maxParticipants: 4
      },
      {
        id: 2,
        title: '西藏拉萨朝圣',
        destination: '西藏拉萨',
        startDate: '2026-08-01',
        endDate: '2026-08-15',
        budget: 5000,
        status: '筹备中',
        participants: 1,
        maxParticipants: 3
      }
    ];

    this.setData({ plans: mockPlans });
  },

  // 创建新计划
  createPlan() {
    this.setData({ showCreateForm: true });
  },

  // 查看计划详情
  viewPlanDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/travel-plan-detail/travel-plan-detail?id=${id}`
    });
  },

  // 删除计划
  deletePlan(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个旅行计划吗？',
      success: (res) => {
        if (res.confirm) {
          const plans = this.data.plans.filter(plan => plan.id !== id);
          this.setData({ plans });
          wx.showToast({
            title: '已删除',
            icon: 'success'
          });
        }
      }
    });
  }
});
