// pages/travel-plan/travel-plan.js 创建行程表单
Page({
  data: {
    // 表单字段
    tripName: '',
    departure: '',
    destination: '',
    startDate: '',
    endDate: '',
    travelerIndex: 0,
    budgetIndex: 0,
    description: '',

    // 日期范围
    minDate: '',
    maxDate: '',

    // 同行人数选项
    travelerOptions: ['1 人独行', '2 人', '3 人', '4 人', '5 人', '6-8 人', '9-12 人', '12 人以上'],

    // 预算选项
    budgetOptions: ['¥1000 以下', '¥1000-3000', '¥3000-5000', '¥5000-8000', '¥8000-10000', '¥10000+'],

    // 标签选项
    tags: [
      { id: 0, label: '户外',  icon: '🏔️',  selected: false },
      { id: 1, label: '美食',  icon: '🍜',  selected: false },
      { id: 2, label: '摄影',  icon: '📷',  selected: false },
      { id: 3, label: '文化',  icon: '🏛️',  selected: false },
      { id: 4, label: '海滩',  icon: '🏖️',  selected: false },
      { id: 5, label: '购物',  icon: '🛍️',  selected: false },
      { id: 6, label: '徒步',  icon: '🥾',  selected: false },
      { id: 7, label: '亲子',  icon: '👨‍👩‍👧', selected: false },
      { id: 8, label: '自驾',  icon: '🚗',  selected: false },
      { id: 9, label: '度假',  icon: '🌴',  selected: false },
    ],

    // 提交状态
    isSubmitting: false,
  },

  onLoad() {
    const now = new Date();
    const today = this.formatDate(now);
    const nextYear = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    const max = this.formatDate(nextYear);

    this.setData({
      minDate: today,
      maxDate: max,
    });
  },

  /* ===== 工具方法 ===== */
  formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  },

  /* ===== 输入事件 ===== */
  onTripNameInput(e) {
    this.setData({ tripName: e.detail.value });
  },

  onDepartureInput(e) {
    this.setData({ departure: e.detail.value });
  },

  onDestinationInput(e) {
    this.setData({ destination: e.detail.value });
  },

  onDescriptionInput(e) {
    this.setData({ description: e.detail.value });
  },

  /* ===== Picker 事件 ===== */
  onStartDateChange(e) {
    this.setData({ startDate: e.detail.value });
  },

  onEndDateChange(e) {
    this.setData({ endDate: e.detail.value });
  },

  onTravelerChange(e) {
    this.setData({ travelerIndex: Number(e.detail.value) });
  },

  onBudgetChange(e) {
    this.setData({ budgetIndex: Number(e.detail.value) });
  },

  /* ===== 标签切换 ===== */
  toggleTag(e) {
    const index = e.currentTarget.dataset.index;
    const tags = this.data.tags.slice();
    tags[index].selected = !tags[index].selected;
    this.setData({ tags });
  },

  /* ===== 返回 ===== */
  goBack() {
    wx.navigateBack();
  },

  /* ===== 表单验证 & 提交 ===== */
  handleSubmit() {
    const { tripName, departure, destination, startDate, endDate } = this.data;

    // 基础校验
    if (!tripName.trim()) {
      wx.showToast({ title: '请输入行程名称', icon: 'none' });
      return;
    }
    if (!departure.trim()) {
      wx.showToast({ title: '请输入出发地', icon: 'none' });
      return;
    }
    if (!destination.trim()) {
      wx.showToast({ title: '请输入目的地', icon: 'none' });
      return;
    }
    if (!startDate) {
      wx.showToast({ title: '请选择出发日期', icon: 'none' });
      return;
    }
    if (!endDate) {
      wx.showToast({ title: '请选择返回日期', icon: 'none' });
      return;
    }
    if (new Date(startDate) >= new Date(endDate)) {
      wx.showToast({ title: '返回日期需晚于出发日期', icon: 'none' });
      return;
    }

    // 获取选中的标签
    const selectedTags = this.data.tags.filter(t => t.selected).map(t => t.label);

    // 构造行程数据
    const tripData = {
      id: Date.now(),
      title: tripName.trim(),
      departure: departure.trim(),
      destination: destination.trim(),
      startDate,
      endDate,
      travelers: this.data.travelerOptions[this.data.travelerIndex],
      budget: this.data.budgetOptions[this.data.budgetIndex],
      description: this.data.description.trim(),
      tags: selectedTags,
      status: '筹备中',
    };

    // 保存提交状态
    this.setData({ isSubmitting: true });

    // 保存到本地存储（实际项目中调用 API）
    const plans = this.getPlansFromStorage();
    plans.unshift(tripData);
    wx.setStorageSync('travelPlans', plans);

    // 模拟异步提交延迟
    setTimeout(() => {
      this.setData({ isSubmitting: false });
      wx.showToast({
        title: '发布成功 🎉',
        icon: 'success',
        duration: 2000,
      });

      // 返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 2000);
    }, 800);
  },

  /* ===== 本地存储辅助 ===== */
  getPlansFromStorage() {
    try {
      return wx.getStorageSync('travelPlans') || [];
    } catch {
      return [];
    }
  },
});
