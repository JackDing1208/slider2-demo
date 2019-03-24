var $left = $('.left')
var $right = $('.right')
var $img = $('img')
var $slider = $('.slider')

$left.on('click', function () {
    let current = $('.current').eq(0).index()
    let next = current + 1
    if (next === $img.length) {
        next = 0
    }
    $img.eq(next).removeClass('stand').addClass('stand-right')
    setTimeout(() => {
        $img.eq(next).removeClass('stand-right').addClass('current')
        $img.eq(current).removeClass('current').addClass('move-left')
            .one('transitionend', function () {
                $(this).removeClass('move-left').addClass('stand')
            })
    }, 0)
})


$right.on('click', function () {
    let current = $('.current').eq(0).index()
    let next = current - 1
    if (next === -1) {
        next = $img.length - 1
    }
    $img.eq(next).removeClass('stand').addClass('stand-left')
    setTimeout(() => {
        $img.eq(next).removeClass('stand-left').addClass('current')
        $img.eq(current).removeClass('current').addClass('move-right')
            .one('transitionend', function () {
                $(this).removeClass('move-right').addClass('stand')
            })
    }, 0)
})

let timer1 = setInterval(() => {
    $left.trigger('click')
}, 1500)

$slider.on('mouseenter', function () {
    window.clearInterval(timer1)
})


$slider.on('mouseleave', function () {
    timer1 = setInterval(() => {
        $left.trigger('click')
    }, 1500)
})















