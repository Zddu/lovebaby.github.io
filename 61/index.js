function init() {
  $(document).ready(function () {
    if ($(window).width() > 960) {
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
    }
  })

  fullPage()
}

function fullPage() {
  // 业务逻辑代码
  $(function () {
    $('#fullPage').fullpage({
      afterLoad: function (origin) {
        var origin = this
        fullpageIndex = origin.index()
        //使用 index
        if (origin.index() === 1) {
          $('.page-2 .bg-page').addClass('animate__animated animate__zoomIn')
          // $('.qiqiu-ani').addClass('animate__animated animate__slideInUp')

          $('.page-2 .content').css('display', 'block')
        }
      },
    })
  })

  var bgMusic = $('audio').get(0)
  var $btnMusic = $('.btn-music')
  var $upArrow = $('.up-arrow')

  // background music control
  $btnMusic.click(function (e) {
    e.stopPropagation()

    if (bgMusic.paused) {
      bgMusic.play()
      $(this).removeClass('paused')
    } else {
      bgMusic.pause()
      $(this).addClass('paused')
    }
  })

  document.addEventListener('touchstart', function () {
    bgMusic.play()

    if (fullpageIndex === 6) {
      animate()
    }
  })

  document.addEventListener('click', function () {
    bgMusic.play()
  })
}
