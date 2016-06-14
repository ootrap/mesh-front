// 格式化发布时间
exports.customTime = item => {
  let nowTime = new Date().getTime()
  let minuteTime = 60 * 1000
  let hourTime = 60 * minuteTime
  let dayTime = 24 * hourTime
  let monthTime = dayTime * 30
  let yearTime = monthTime * 12

  let publishTime = new Date(item).getTime()
  let historyTime = parseInt(nowTime) - parseInt(publishTime)
  let descTime
  if (historyTime >= yearTime) {
    descTime = parseInt(historyTime / yearTime) + '年前'
  } else if (historyTime < yearTime && historyTime >= monthTime) {
    descTime = parseInt(historyTime / monthTime) + '月前'
  } else if (historyTime < monthTime && historyTime >= dayTime) {
    descTime = parseInt(historyTime / dayTime) + '天前'
  } else if (historyTime < dayTime && historyTime >= hourTime) {
    descTime = parseInt(historyTime / hourTime) + '小时前'
  } else if (historyTime < hourTime && historyTime >= minuteTime) {
    descTime = parseInt(historyTime / minuteTime) + '分钟前'
  } else {
    descTime = '刚刚'
  }
  return descTime
}

exports.formatDate = time => {
  let tmpDate = new Date(time)
  let year = tmpDate.getFullYear()
  let mathon = tmpDate.getMonth() + 1
  let day = tmpDate.getDate()
  let hours = tmpDate.getHours()
  let minutes = tmpDate.getMinutes()
  return year + '.' + mathon + '.' + day + ' ' + hours + ':' + minutes
}
