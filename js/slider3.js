var slideNow3 = 1;
var slideCount3 = $('#slidewrapper2').children().length;
var slideInterval3 = 10000;
var navBtnId3 = 0;
var translateWidth3 = 0;

$(function () {
    var switchInterval3 = setInterval(nextSlide3, slideInterval3);

    $('#viewport3').hover(function() {
        clearInterval(switchInterval3);
    }, function() {
        switchInterval3 = setInterval(nextSlide3, slideInterval3);
    });

    $('#next-btn3').click(function() {
        nextSlide3();
    });

    $('#prev-btn3').click(function() {
        prevSlide3();
    });

    $('.slide-nav-btn3').click(function() {
        navBtnId3 = $(this).index();

        if (navBtnId3 + 1 != slideNow3) {
            translateWidth3 = -$('#viewport3').width() * (navBtnId3);
            $('#slidewrapper3').css({
                'transform': 'translate(' + translateWidth3 + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth3 + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth3 + 'px, 0)',
            });
            slideNow3 = navBtnId3 + 1;
        }
    });
});


function nextSlide3() {
    if (slideNow3 == slideCount3 || slideNow3 <= 0 || slideNow3 > slideCount3) {
        $('#slidewrapper3').css('transform', 'translate(0, 0)');
        slideNow3 = 1;
    } else {
        translateWidth3 = -$('#viewport3').width() * (slideNow3);
        $('#slidewrapper3').css({
            'transform': 'translate(' + translateWidth3 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth3 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth3 + 'px, 0)',
        });
        slideNow3++;
    }
}

function prevSlide3() {
    if (slideNow3 == 1 || slideNow3 <= 0 || slideNow3 > slideCount3) {
        translateWidth3 = -$('#viewport3').width() * (slideCount3 - 1);
        $('#slidewrapper3').css({
            'transform': 'translate(' + translateWidth3 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth3 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth3 + 'px, 0)',
        });
        slideNow3 = slideCount3;
    } else {
        translateWidth3 = -$('#viewport3').width() * (slideNow3 - 2);
        $('#slidewrapper3').css({
            'transform': 'translate(' + translateWidth3 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth3 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth3 + 'px, 0)',
        });
        slideNow3--;
    }
}