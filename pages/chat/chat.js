// pages/chat/chat.js
Page({
  data: {
    conversations: [],
    currentChatId: null,
    messages: [],
    inputValue: ''
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
        avatar: '',
        lastMessage: '你好呀，期待一起旅行！',
        time: '10:30',
        unread: 2
      },
      {
        id: 2,
        name: '小红',
        avatar: '',
        lastMessage: '行程确定了吗？',
        time: '昨天',
        unread: 0
      },
      {
        id: 3,
        name: '小李',
        avatar: '',
        lastMessage: '好的，那我们到时候见',
        time: '周一',
        unread: 0
      }
    ];

    this.setData({ conversations: mockConversations });
  },

  // 进入聊天
  enterChat(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ currentChatId: id });
    this.loadMessages(id);
  },

  // 加载消息
  loadMessages(chatId) {
    const mockMessages = [
      {
        id: 1,
        content: '你好！看到你的旅行计划很感兴趣',
        time: '10:25',
        isSelf: false
      },
      {
        id: 2,
        content: '是的，我也觉得我们行程很匹配',
        time: '10:28',
        isSelf: true
      },
      {
        id: 3,
        content: '你好呀，期待一起旅行！',
        time: '10:30',
        isSelf: false
      }
    ];

    this.setData({ messages: mockMessages });
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
      inputValue: ''
    });

    // TODO: 发送到服务器
  },

  // 输入消息
  onInputChange(e) {
    this.setData({ inputValue: e.detail.value });
  },

  // 返回对话列表
  backToConversations() {
    this.setData({ currentChatId: null, messages: [] });
  }
});
