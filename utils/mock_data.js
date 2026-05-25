/**
 * Mock 数据 - 搭伴游
 * 用于开发阶段模拟后端接口
 */

// 模拟用户列表（搭子推荐）
const buddies = [
  {
    id: 1,
    nickname: '小星星旅行家',
    avatar: '/assets/images/avatar_1.png',
    age: 22,
    gender: 'female',
    city: '北京',
    distance: '3km',
    matchScore: 95,
    tags: ['美食', '拍照', '慢节奏'],
    signature: '想找一个会拍照的搭子一起去环球影城',
    tripType: '轻奢游',
    habit: '早起党',
    creditScore: 180,
    verified: true,
    studentVerified: true
  },
  {
    id: 2,
    nickname: '背包客小王',
    avatar: '/assets/images/avatar_2.png',
    age: 25,
    gender: 'male',
    city: '北京',
    distance: '5km',
    matchScore: 88,
    tags: ['徒步', '穷游', '特种兵式'],
    signature: '周末想去爬香山，有没有一起的',
    tripType: '穷游',
    habit: '早起党',
    creditScore: 150,
    verified: true,
    studentVerified: false
  },
  {
    id: 3,
    nickname: '吃货少女',
    avatar: '/assets/images/avatar_3.png',
    age: 20,
    gender: 'female',
    city: '北京',
    distance: '8km',
    matchScore: 82,
    tags: ['探店', '美食', '拍照'],
    signature: '周末想去打卡网红餐厅',
    tripType: '轻奢游',
    habit: '夜猫子',
    creditScore: 200,
    verified: true,
    studentVerified: true
  },
  {
    id: 4,
    nickname: '摄影师大李',
    avatar: '/assets/images/avatar_4.png',
    age: 27,
    gender: 'male',
    city: '北京',
    distance: '12km',
    matchScore: 76,
    tags: ['拍照', '自驾', '看展'],
    signature: '会拍照会开车，寻找旅伴',
    tripType: '轻奢游',
    habit: '慢节奏',
    creditScore: 160,
    verified: true,
    studentVerified: false
  },
  {
    id: 5,
    nickname: '文艺小青年',
    avatar: '/assets/images/avatar_5.png',
    age: 24,
    gender: 'female',
    city: '北京',
    distance: '15km',
    matchScore: 71,
    tags: ['看展', '探店', '慢节奏'],
    signature: '喜欢逛博物馆和艺术展',
    tripType: '轻奢游',
    habit: '慢节奏',
    creditScore: 170,
    verified: true,
    studentVerified: false
  }
]

// 模拟行程列表
const trips = [
  {
    id: 1,
    title: '周末环球影城一日游',
    departure: '北京',
    destination: '环球影城',
    startTime: '2026-05-25 09:00',
    endTime: '2026-05-25 18:00',
    maxPeople: 4,
    currentPeople: 2,
    budget: '300-500元',
    author: {
      nickname: '小星星旅行家',
      avatar: '/assets/images/avatar_1.png'
    },
    tags: ['一日游', '主题乐园'],
    status: '报名中',
    requirements: '会拍照优先，女生优先'
  },
  {
    id: 2,
    title: '香山红叶徒步',
    departure: '北京',
    destination: '香山公园',
    startTime: '2026-05-26 07:00',
    endTime: '2026-05-26 15:00',
    maxPeople: 6,
    currentPeople: 3,
    budget: '50-100元',
    author: {
      nickname: '背包客小王',
      avatar: '/assets/images/avatar_2.png'
    },
    tags: ['徒步', '穷游'],
    status: '报名中',
    requirements: '体力好，能爬山'
  },
  {
    id: 3,
    title: '通州大运河骑行',
    departure: '北京通州',
    destination: '大运河森林公园',
    startTime: '2026-05-27 09:00',
    endTime: '2026-05-27 14:00',
    maxPeople: 8,
    currentPeople: 5,
    budget: '免费',
    author: {
      nickname: '骑行爱好者',
      avatar: '/assets/images/avatar_4.png'
    },
    tags: ['骑行', '免费'],
    status: '报名中',
    requirements: '自备自行车'
  }
]

// 模拟聊天列表
const chats = [
  {
    id: 1,
    nickname: '小星星旅行家',
    avatar: '/assets/images/avatar_1.png',
    lastMessage: '好的，那我们明天早上9点见！',
    time: '10:30',
    unread: 2
  },
  {
    id: 2,
    nickname: '环球影城拼团',
    avatar: '/assets/images/avatar_1.png',
    lastMessage: '小王: 我买了早场票，大家记得准时到',
    time: '昨天',
    unread: 0,
    isGroup: true
  },
  {
    id: 3,
    nickname: '吃货少女',
    avatar: '/assets/images/avatar_3.png',
    lastMessage: '那家餐厅确实不错，下次一起再去',
    time: '周一',
    unread: 0
  }
]

// 模拟热门话题
const topics = [
  { id: 1, title: '周末去看海', posts: 128, avatar: '/assets/images/topic_1.png' },
  { id: 2, title: '一起去爬泰山', posts: 96, avatar: '/assets/images/topic_2.png' },
  { id: 3, title: '探店美食街', posts: 256, avatar: '/assets/images/topic_3.png' },
  { id: 4, title: '一个人旅行的故事', posts: 512, avatar: '/assets/images/topic_4.png' },
  { id: 5, title: '我的宝藏旅行地', posts: 384, avatar: '/assets/images/topic_5.png' }
]

module.exports = {
  buddies,
  trips,
  chats,
  topics
}
