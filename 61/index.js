function init() {
  $(document).ready(function () {
    // 获取页面的初始宽高
    var height = $(window).height()

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
  })
}
