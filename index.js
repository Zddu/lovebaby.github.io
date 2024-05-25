$(document).ready(function () {
  pageInit()
})

function setWidth() {
  var height = $(window).height()
  $('html').css('height', height)

  if ($(window).width() > 960) {
    // 计算并设置页面的高度，使其与宽度保持 0.462 的比例
    var newWidth = height * 0.462
    $('html').css('width', newWidth)
    $('html').css('margin', '0 auto')

    // 监听窗口大小变化事件，实时调整页面高度
    $(window).resize(function () {
      height = $(window).height()
      newWidth = height * 0.462
      $('html').css('width', newWidth)
    })
  }
}

function limitEnter() {
  let isOpen = false
  // 未到指定时间禁止进入
  fetch('http://worldtimeapi.org/api/timezone/Asia/Shanghai')
    .then((response) => response.json())
    .then((data) => {
      const networkTime = new Date(data.utc_datetime)
      isOpen = moment('2024-6-1 00:00:00').isBefore(networkTime)
      console.log('isOpen', isOpen)

      $('#jump61').click(function () {
        if (isOpen) {
          window.location.href = './61/index.html'
        } else {
          mdui.snackbar({
            message: '暂无',
            placement: 'top',
            autoCloseDelay: 2000,
          })
        }
      })
    })
    .catch((error) => console.error(error))
}

function pageInit() {
  // 设置屏幕宽度固定
  setWidth()
  limitEnter()
}
