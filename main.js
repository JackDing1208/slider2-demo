var $left = $('.left')
var $img = $('img')
$left.on('click', function () {
    let index = $('.current').eq(0).index()
    if (index + 1 === $img.length) {
        index = -1
    }
    $img.eq(index + 1).removeClass('next').addClass('current')

    $img.eq(index).removeClass('current').addClass('previous')
        .one('transitionend', function () {
            $(this).removeClass('previous').addClass('next')
        })
})

setInterval(()=>{
    $left.trigger('click')
    },1500
)








