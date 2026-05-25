#!/usr/bin/env python3
"""Apply remaining changes to preview-enhanced.html"""

path = "/home/yuanrujin/travel-buddy/preview-enhanced.html"

with open(path, 'r') as f:
    text = f.read()

# 1. Add refreshBuddies function (after selectQuiz)
old = """function selectQuiz(el, qi, total) {
  el.parentElement.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}"""

new = """function selectQuiz(el, qi, total) {
  el.parentElement.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

// ===== 刷新搭子 =====
function refreshBuddies() {
  const btn = document.querySelector('.refresh-btn');
  if (btn) { btn.classList.add('spinning'); setTimeout(() => btn.classList.remove('spinning'), 600); }
  for (let i = DATA.buddies.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [DATA.buddies[i], DATA.buddies[j]] = [DATA.buddies[j], DATA.buddies[i]]; }
  renderBuddies();
  showToast('✨ 已刷新');
}

// ===== 行程分类筛选 =====
function filterTrips(status) {
  const statusMap = { 'ongoing': '进行中', 'upcoming': '马上要去', 'completed': '已结束' };
  showToast('筛选: ' + (statusMap[status] || status));
  setTimeout(() => {
    const filtered = DATA.trips.filter(t => t.status === (statusMap[status] || status));
    const container = document.getElementById('tripList');
    if (container && filtered.length) {
      container.innerHTML = filtered.map(t => {
        const author = DATA.buddies.find(b => b.id === t.author) || DATA.buddies[0];
        return `
          <div class="trip-card" onclick="navTo('trip/${t.id}')">
            <div class="trip-header"><span class="trip-title">${t.title}</span><span class="status-tag">${t.status}</span></div>
            <div class="trip-route"><span>${t.from}</span><span class="arrow">→</span><span>${t.to}</span></div>
            <div class="trip-meta"><span class="meta-item">📅 ${t.date}</span><span class="meta-item">💰 ${t.budget}</span></div>
            <div class="trip-footer"><div class="author-info" onclick="event.stopPropagation();navTo('user/${author.id}')"><img class="author-avatar" src="https://api.dicebear.com/7.x/adventurer/svg?seed=${author.seed}&backgroundColor=${author.bg}" alt=""><span>${author.name}</span></div><button class="join-btn" onclick="event.stopPropagation();toggleJoin(this)">我要报名</button></div>
          </div>`;
      }).join('');
    }
  }, 300);
}"""

text = text.replace(old, new)

# 2. Verify trip statuses are already correct
print(f"Trip status '进行中': {'进行中' in text}")
print(f"Trip status '马上要去': {'马上要去' in text}")
print(f"Trip status '已结束': {'已结束' in text}")

with open(path, 'w') as f:
    f.write(text)

print(f"\n✅ File written: {len(text)} bytes")

# Verify
print(f"\n✅ refreshBuddies: {'function refreshBuddies()' in text}")
print(f"✅ filterTrips: {'function filterTrips(' in text}")
