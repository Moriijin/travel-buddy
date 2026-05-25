# 搭伴游 - 微信小程序 V1.0 开发计划

## 阶段划分

### Phase 1: 项目初始化 ✅ 进行中
- 创建项目结构
- app.json, app.js, app.wxss 全局配置
- 工具函数（网络请求、本地存储等）
- 全局样式变量

### Phase 2: 用户系统
- 登录/注册页面
- 实名认证页面
- 个人主页
- 信用体系展示

### Phase 3: 搭子匹配系统（核心）
- 首页瀑布流卡片
- 搭子卡片组件
- 筛选功能
- 滑动匹配交互

### Phase 4: 行程系统
- 发布行程
- 行程列表
- 行程详情
- 报名流程

### Phase 5: 即时通讯
- 聊天页面
- 消息类型（文字/图片/位置）

### Phase 6: 安全系统
- 紧急联系人
- 举报功能
- 黑名单

### Phase 7: 社区内容
- 热门话题
- 照片墙
- 攻略分享

---

## 技术选型
- 前端：微信小程序原生（WXML + WXSS + JS）
- UI：自定义矢量卡通风格
- 色彩：活力橙(#FF7A00) + 天空蓝(#00B4FF)
- 本地 Mock 数据（无后端）

## 目录结构
```
travel-buddy/
├── app.js
├── app.json
├── app.wxss
├── pages/
│   ├── index/          # 首页-搭子推荐
│   ├── discover/       # 发现-筛选匹配
│   ├── trip/           # 行程
│   ├── chat/           # 消息
│   └── profile/        # 我的
├── components/
│   ├── buddy-card/     # 搭子卡片
│   ├── tag/            # 标签
│   └── ...
├── utils/
│   ├── request.js
│   ├── storage.js
│   └── mock_data.js
├── assets/
│   └── images/
└── config/
    └── index.js
```
