// pages/chat/chat.js
Page({
  data: {
    conversations: [],
    currentChatId: null,
    currentChatName: '',
    currentChatOnline: false,
    currentChatAvatarColor: '',
    messages: [],
    inputValue: '',
    scrollToBottom: ''
  },

  onLoad() {
    this.loadConversations();
  },

  // 加载对话列表
  loadConversations() {
    const mockConversations = [
      {
        id: 1,
        name: '小明',
        avatarColor: 'linear-gradient(135deg, #B8E6D0, #A3CFFF)',
        lastMessage: '你好呀，期待一起旅行！',
        time: '10:30',
        unread: 2,
        isSelf: false,
        online: true
      },
      {
        id: 2,
        name: '小红',
        avatarColor: 'linear-gradient(135deg, #FFB8A3, #FFE0A3)',
        lastMessage: '行程确定了吗？',
        time: '昨天',
        unread: 0,
        isSelf: false,
        online: false
      },
      {
        id: 3,
        name: '小李',
        avatarColor: 'linear-gradient(135deg, #C5B8E6, #A3CFFF)',
        lastMessage: '好的，那我们到时候见',
        time: '周一',
        unread: 0,
        isSelf: true,
        online: false
      },
      {
        id: 4,
        name: '小华',
        avatarColor: 'linear-gradient(135deg, #FFB8C6, #C5B8E6)',
        lastMessage: '新疆的秋天真的很美！',
        time: '上周',
        unread: 0,
        isSelf: false,
        online: true
      }
    ];

    this.setData({ conversations: mockConversations });
  },

  // 进入聊天
  enterChat(e) {
    const id = e.currentTarget.dataset.id;
    const conv = this.data.conversations.find(c => c.id === id);
    if (!conv) return;

    // 清除未读
    conv.unread = 0;

    this.setData({
      currentChatId: id,
      currentChatName: conv.name,
      currentChatOnline: conv.online,
      currentChatAvatarColor: conv.avatarColor
    });
    this.loadMessages(id);
  },

  // 加载消息
  loadMessages(chatId) {
    const messageMap = {
      1: [
        { id: 1, content: '你好！看到你的旅行计划很感兴趣', time: '10:25', isSelf: false },
        { id: 2, content: '是的，我也觉得我们行程很匹配', time: '10:27', isSelf: true },
        { id: 3, content: '太棒了！你有什么特别的计划吗？', time: '10:28', isSelf: false },
        { id: 4, content: '我打算去洱海骑行，然后去喜洲古镇', time: '10:29', isSelf: true },
        { id: 5, content: '你好呀，期待一起旅行！', time: '10:30', isSelf: false }
      ],
      2: [
        { id: 1, content: '稻城亚丁的攻略你做好了吗？', time: '14:20', isSelf: false },
        { id: 2, content: '做好了，准备去牛奶海和五色海', time: '14:30', isSelf: true },
        { id: 3, content: '行程确定了吗？', time: '14:35', isSelf: false }
      ],
      3: [
        { id: 1, content: '布达拉宫需要提前预约哦', time: '09:10', isSelf: true },
        { id: 2, content: '好的，那我们到时候见', time: '09:15', isSelf: false }
      ],
      4: [
        { id: 1, content: '喀纳斯的秋色照片分享给你', time: '16:00', isSelf: false },
        { id: 2, content: '哇，太美了！我也想去', time: '16:20', isSelf: true },
        { id: 3, content: '新疆的秋天真的很美！', time: '16:25', isSelf: false }
      ]
    };

    const msgs = messageMap[chatId] || [];

    this.setData({
      messages: msgs,
      scrollToBottom: msgs.length > 0 ? 'msg-' + msgs[msgs.length - 1].id : ''
    });
  },

  // 发送消息
  sendMessage() {
    const content = this.data.inputValue.trim();
    if (!content) return;

    const newMessage = {
      id: Date.now(),
      content: content,
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      isSelf: true
    };

    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: '',
      scrollToBottom: 'msg-' + newMessage.id
    });

    // 模拟对方回复
    setTimeout(() => {
      const replies = [
        '好的，期待见面！',
        '听起来很棒！',
        '没问题，就这么定了',
        '哈哈，我也是这么想的',
        '好的好的~'
      ];
      const reply = {
        id: Date.now() + 1,
        content: replies[Math.floor(Math.random() * replies.length)],
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        isSelf: false
      };
      this.setData({
        messages: [...this.data.messages, reply],
        scrollToBottom: 'msg-' + reply.id
      });
    }, 1000 + Math.random() * 2000);
  },

  // 输入消息
  onInputChange(e) {
    this.setData({ inputValue: e.detail.value });
  },

  // 返回对话列表
  backToConversations() {
    this.setData({
      currentChatId: null,
      messages: [],
      scrollToBottom: ''
    });
  }
});
