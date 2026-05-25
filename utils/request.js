/**
 * 网络请求工具
 */

const app = getApp()

/**
 * 发起请求
 * @param {Object} options
 */
function request(options) {
  return new Promise((resolve, reject) => {
    const { url, method = 'GET', data = {}, showLoading = true } = options

    if (showLoading) {
      wx.showLoading({ title: '加载中...', mask: true })
    }

    wx.request({
      url: `${app.globalData.baseUrl}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${app.getToken()}`
      },
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(new Error(res.data.message || '请求失败'))
        }
      },
      fail(err) {
        reject(err)
      },
      complete() {
        if (showLoading) {
          wx.hideLoading()
        }
      }
    })
  })
}

module.exports = {
  get: (url, data, options) => request({ url, method: 'GET', data, ...options }),
  post: (url, data, options) => request({ url, method: 'POST', data, ...options }),
  put: (url, data, options) => request({ url, method: 'PUT', data, ...options }),
  delete: (url, data, options) => request({ url, method: 'DELETE', data, ...options })
}
