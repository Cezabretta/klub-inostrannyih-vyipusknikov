(function (w, d, u) {
    var s = d.createElement('script');
    s.async = true;
    s.src = u + '?' + (Date.now() / 60000 | 0);
    var h = d.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(s, h);
})(window, document, 'https://crm.rea.ru/upload/crm/site_button/loader_29_55efsr.js');

console.log('bx24');


$('#js-btn-header-question').on('click', function () {
    console.log('js-btn-header-question click');
    $('.b24-widget-button-block').trigger('click');
});


$(document).ready(function () {

    $('.inner-page-content > table').each(function () {
        var self = $(this);
        $(this).addClass('table').wrapAll('<div class="table-responsive ">');

    });

    //get__double_block();
});

jQuery(function ($) {

    $(".grid").masonry({
        itemSelector: '.grid-item',
        itemSelector: '.grid-item',
        columnWidth: '.white-flex-block',
        percentPosition: true,
        gutter: 20
    });

});


$('.fotoalbum-slider-for').each(function () {
    console.log($(this).closest('.inner-page-fotoalbum-row').find('.fotoalbum-slider-nav'));
    $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: $(this).closest('.inner-page-fotoalbum-row').find('.fotoalbum-slider-nav')
    });

});

$('.fotoalbum-slider-nav').each(function () {
    console.log($(this).closest('.inner-page-fotoalbum-row').find('.fotoalbum-slider-for'));
    $(this).slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrow: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        asNavFor: $(this).closest('.inner-page-fotoalbum-row').find('.fotoalbum-slider-for')
    });

});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrow: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true
});


$('.newsfoto-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.newsfoto-slider-nav'
});

$('.newsfoto-slider-nav').slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.newsfoto-slider-for',
    dots: false,
    arrow: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: true
});

if ($("#shipments-sly-wrap").length > 0) {

    /* https://darsa.in/sly/examples/horizontal.html */


    var $sly_frame0 = $('#shipments-sly-frame');
    var $sly_slidee0 = $('#shipments-sly-row');
    var $sly_wrap0 = $sly_frame0.parent();

    var $mySly0 = $sly_frame0.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            /* activateOn: 'click', */
            itemSelector: $('.section1-block-item'),
            mouseDragging: 1,
            touchDragging: 1,
            activateMiddle: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $sly_wrap0.find('.sly-scrollbar'),
            scrollBy: 0,
            pagesBar: 0,
            activatePageOn: 'click',

            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            prevPage: $sly_wrap0.find('.sly-prev'),
            nextPage: $sly_wrap0.find('.sly-next')
        },
        {
            load: function (eventName, itemIndex) {

                let sly_total = $sly_slidee0.children().length;
                let curr_i = this.rel.lastItem + 1;
                let sly_width = $sly_slidee0.outerWidth();
                let sly_frame = $sly_wrap0.width();

                console.log('sly_width=' + sly_width + ' sly_rap=' + sly_frame);

                if (sly_width > sly_frame) {
                    $sly_wrap0.find('.sly-scrollbar-track ').removeClass('sly-hidden');
                    $sly_wrap0.find('.sly-btns ').removeClass('sly-hidden');
                } else {
                    $sly_wrap0.find('.sly-scrollbar-track ').addClass('sly-hidden');
                    $sly_wrap0.find('.sly-btns').addClass('sly-hidden');
                }

                $sly_wrap0.find('.js-sly-count-curr').html(curr_i);
                $sly_wrap0.find('.js-sly-count-total').html(sly_total);


            },

        });

    $mySly0.init();

    $sly_frame0.sly('on', 'move', function (eventName, itemIndex) {

        let curr_i = this.rel.lastItem + 1;
        $sly_wrap0.find('.js-sly-count-curr').addClass('2222 ');
        $sly_wrap0.find('.js-sly-count-curr').html(curr_i);

    });

    $(window).on('resize orientationchange', function () {
        $sly_frame0.sly('reload');
    });

}

if ($("#shipments-sly-wrap-1").length > 0) {

    /* https://darsa.in/sly/examples/horizontal.html */


    var $sly_frame1 = $('#shipments-sly-frame-1');
    var $sly_slidee1 = $('#shipments-sly-row-1');
    var $sly_wrap1 = $sly_frame1.parent();

    var $mySly1 = $sly_frame1.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            /* activateOn: 'click', */
            itemSelector: $('.section1-block-item'),
            mouseDragging: 1,
            touchDragging: 1,
            activateMiddle: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $sly_wrap1.find('.sly-scrollbar'),
            scrollBy: 0,
            pagesBar: 0,
            activatePageOn: 'click',

            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            prevPage: $sly_wrap1.find('.sly-prev'),
            nextPage: $sly_wrap1.find('.sly-next')
        },
        {
            load: function (eventName, itemIndex) {

                let sly_total = $sly_slidee1.children().length;
                let curr_i = this.rel.lastItem + 1;
                let sly_width = $sly_slidee0.outerWidth();
                let sly_frame = $sly_wrap1.width();

                console.log('sly_width=' + sly_width + ' sly_rap=' + sly_frame);

                if (sly_width > sly_frame) {
                    $sly_wrap1.find('.sly-scrollbar-track ').removeClass('sly-hidden');
                    $sly_wrap1.find('.sly-btns ').removeClass('sly-hidden');
                } else {
                    $sly_wrap1.find('.sly-scrollbar-track ').addClass('sly-hidden');
                    $sly_wrap1.find('.sly-btns').addClass('sly-hidden');
                }

                $sly_wrap1.find('.js-sly-count-curr').html(curr_i);
                $sly_wrap1.find('.js-sly-count-total').html(sly_total);


            },

        });

    $mySly1.init();

    $sly_frame1.sly('on', 'move', function (eventName, itemIndex) {

        let curr_i = this.rel.lastItem + 1;
        $sly_wrap1.find('.js-sly-count-curr').html(curr_i);

    });

    $(window).on('resize orientationchange', function () {
        $sly_frame1.sly('reload');
        console.log('reload');
    });

}

$('.js-collapsible-block').click(function (e) {

    console.log('e.target.parentNode=' + e.target.parentNode.classList);
    console.log('e.target===e.currentTarget=' + e.target + ' ' + e.currentTarget);

    if ((e.target === e.currentTarget) || (e.target.parentNode.classList.contains('js-open-block-btn'))) {
        if ($(this).hasClass('block-open')) {
            $(this).removeClass('block-open');
            $('.flex-top-header').removeClass('menu-to-back');
        } else {
            $('.flex-top-header').addClass('menu-to-back');
            $('.js-collapsible-block').removeClass('block-open');
            $(this).addClass('block-open');
        }
    }

});


if ($(".js-sly-container").length > 0) {

    /* https://darsa.in/sly/examples/horizontal.html */

    let setItemSize = function ($sly_wrap, $sly_frame) {

        let sly_frame_w = $sly_wrap.innerWidth();
        let el_visible = $sly_frame.attr('data-visible');
        let el_responsive = $sly_frame.attr('data-responsive');
        let window_width = window.innerWidth;

        if (el_visible != 'undefined' && el_visible > 0) {//data-visivle - количество видымых элементов на ширине БОЛЬШЕ ЧЕМ data-responsive (например на экране от 1200 показываем 2 эе-та, по 50% ширины видимой области). если меньше то становятся фиксированной ширины в пикселях, согласно макетам

            let sly_item_w = Math.floor(sly_frame_w / el_visible);
            let sly_items = $sly_wrap.find('.js-sly-row > div');

            if (el_responsive != 'uindefined') {

                if (window_width > el_responsive) {
                    console.log('sly_frame_w =' + sly_frame_w + ' sly_item_w=' + sly_item_w);
                    sly_items.css('min-width', sly_item_w);
                    sly_items.css('max-width', sly_item_w);
                } else {
                    sly_items.css('min-width', '');
                    sly_items.css('max-width', '');
                }
            } else {
                sly_items.css('min-width', sly_item_w);
                sly_items.css('max-width', sly_item_w);
            }
        }
    }

    $('.js-sly-container').each(function () {

        var $sly_frame = $(this).find('.js-sly-frame');
        var $sly_slidee = $(this).find('.js-sly-row');
        var $sly_wrap = $sly_frame.parent();

        setItemSize($sly_wrap, $sly_frame);

        var $mySly = $sly_frame.sly({
                horizontal: 1,
                itemNav: 'basic',
                smart: 1,
                /* activateOn: 'click', */
                itemSelector: $sly_wrap.find('.js-sly-row > div'),
                mouseDragging: 1,
                touchDragging: 1,
                activateMiddle: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $sly_wrap.find('.js-sly-scrollbar-track .sly-scrollbar'),
                scrollBy: 0,
                pagesBar: 0,
                activatePageOn: 'click',

                speed: 300,
                elasticBounds: 1,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,

                prevPage: $sly_wrap.find('.sly-prev'),
                nextPage: $sly_wrap.find('.sly-next')
            },
            {
                load: function (eventName, itemIndex) {

                    let sly_total = $sly_slidee.children().length;
                    let curr_i = this.rel.lastItem + 1;
                    let sly_width = $sly_slidee.outerWidth();
                    let sly_frame = $sly_wrap.width();


                    if (sly_width > sly_frame) {
                        $sly_wrap.find('.sly-scrollbar-track ').removeClass('sly-hidden');
                        $sly_wrap.find('.sly-btns ').removeClass('sly-hidden');
                        $sly_wrap.closest('.js-collapsible-block').addClass('sly-btns-visible');
                    } else {
                        $sly_wrap.find('.sly-scrollbar-track ').addClass('sly-hidden');
                        $sly_wrap.find('.sly-btns').addClass('sly-hidden');
                        $sly_wrap.closest('.js-collapsible-block').removeClass('sly-btns-visible');

                    }

                    $sly_wrap.find('.js-sly-count-curr').html(curr_i);
                    $sly_wrap.find('.js-sly-count-all').html(sly_total);

                },

            });

        $mySly.init();

        $sly_frame.sly('on', 'move', function (eventName, itemIndex) {

            let curr_i = this.rel.lastItem + 1;
            $sly_wrap.find('.js-sly-count-curr').html(curr_i);

        });

        $(window).on('resize orientationchange', function () {
            setItemSize($sly_wrap, $sly_frame)
            $sly_frame.sly('reload');
        });
    });
}


if ($(".js-sly-container-calendar").length > 0) {

    /* https://darsa.in/sly/examples/horizontal.html */

    let setItemSize = function ($sly_wrap, $sly_frame) {

        let sly_frame_w = $sly_wrap.innerWidth();
        let el_visible = $sly_frame.attr('data-visible');
        let el_responsive = $sly_frame.attr('data-responsive');
        let window_width = window.innerWidth;

        if (el_visible != 'undefined' && el_visible > 0) {//data-visivle - количество видымых элементов на ширине БОЛЬШЕ ЧЕМ data-responsive (например на экране от 1200 показываем 2 эе-та, по 50% ширины видимой области). если меньше то становятся фиксированной ширины в пикселях, согласно макетам

            let sly_item_w = Math.floor(sly_frame_w / el_visible);
            let sly_items = $sly_wrap.find('.js-sly-row > div');

            if (el_responsive != 'uindefined') {

                if (window_width > el_responsive) {
                    console.log('sly_frame_w =' + sly_frame_w + ' sly_item_w=' + sly_item_w);
                    sly_items.css('min-width', sly_item_w);
                    sly_items.css('max-width', sly_item_w);
                } else {
                    sly_items.css('min-width', '');
                    sly_items.css('max-width', '');
                }
            } else {
                sly_items.css('min-width', sly_item_w);
                sly_items.css('max-width', sly_item_w);
            }
        }
    }

    $('.js-sly-container-calendar').each(function () {

        var $sly_frame = $(this).find('.js-sly-frame');
        var $sly_slidee = $(this).find('.js-sly-row');
        var $sly_wrap = $sly_frame.parent();

        setItemSize($sly_wrap, $sly_frame);

        var $mySly = new Sly($sly_frame, {
                horizontal: 1,
                itemNav: 'basic',
                smart: 1,
                /* activateOn: 'click', */
                itemSelector: $sly_wrap.find('.js-sly-row > div'),
                mouseDragging: 1,
                touchDragging: 1,
                activateMiddle: 1,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $sly_wrap.find('.js-sly-scrollbar-track .sly-scrollbar'),
                scrollBy: 1,
                pagesBar: 0,
                activatePageOn: 'click',
                elasticBounds: 1,
                speed: 300,
                elasticBounds: 0,
                easing: 'easeOutExpo',
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,

                prevPage: $sly_wrap.find('.sly-prev'),
                nextPage: $sly_wrap.find('.sly-next')
            },
            {
                load: function (eventName, itemIndex) {

                    let sly_total = $sly_slidee.children().length;
                    let curr_i = this.rel.lastItem + 1;
                    let sly_width = $sly_slidee.outerWidth();
                    let sly_frame = $sly_wrap.width();


                    if (sly_width > sly_frame) {
                        $sly_wrap.find('.sly-scrollbar-track ').removeClass('sly-hidden');
                        $sly_wrap.find('.sly-btns ').removeClass('sly-hidden');
                    } else {
                        $sly_wrap.find('.sly-scrollbar-track ').addClass('sly-hidden');
                        $sly_wrap.find('.sly-btns').addClass('sly-hidden');
                    }

                    $sly_wrap.find('.js-sly-count-curr').html(curr_i);
                    $sly_wrap.find('.js-sly-count-all').html(sly_total);

                },

            });

        $mySly.init();

        $sly_frame.sly('on', 'move', function (eventName, itemIndex) {
            console.log()
            let curr_i = this.rel.lastItem + 1;
            $sly_wrap.find('.js-sly-count-curr').html(curr_i);

            let f_item_index = this.rel.firstItem;
            console.log($(this.items[f_item_index].el).attr('data-month'));

            let c_month = $(this.items[f_item_index].el).attr('data-month');

            $sly_wrap.find('.js-calendar-moth-title').text(c_month);
        });

        $(window).on('resize orientationchange', function () {
            setItemSize($sly_wrap, $sly_frame)
            $sly_frame.sly('reload');
        });

    });

    $('.js-events-calendar-item').click(function () {
        console.log('1111');
        $(this).toggleClass('day-active');


    });
}


$('.owl-carousel.slider-news-left').owlCarousel({
    rtl: true,
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    stagePadding: 15,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        700: {
            items: 2,
            stagePadding: 60,
        },

        850: {
            items: 1,
            stagePadding: 60,
        },

        1100: {
            items: 2,

        },

        1300: {
            items: 3,

        },
        1500: {
            items: 4,

        }
    }
})

$('.owl-carousel.slider-footer-contact').owlCarousel({
    rtl: true,
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        900: {
            items: 3
        },
        1150: {
            items: 3,

        },
        1300: {
            items: 4,
        }

    }
})

$('.owl-carousel.slider-news2').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    stagePadding: 80,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
        },
        800: {
            items: 2
        },
        900: {
            items: 2
        },
        1200: {
            items: 3
        },
        1300: {
            items: 4,

        },
        1500: {
            items: 4,

        }
    }
})

$('.owl-carousel.slider-news3').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    stagePadding: 80,
    responsive: {
        0: {
            items: 1,
            stagePadding: 20,
        },
        800: {
            items: 2
        },
        900: {
            items: 2
        },
        1200: {
            items: 2
        },
        1300: {
            items: 3,

        },
        1500: {
            items: 3,

        }
    }
})

$('.owl-carousel.slider-news4').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    stagePadding: 30,
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        900: {
            items: 2
        },
        1200: {
            items: 3
        },
        1300: {
            items: 4,

        },
        1500: {
            items: 4,

        }
    }
})

$('.owl-carousel.slider-news5').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    stagePadding: 20,
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 2
        },
        1200: {
            items: 4
        },
        1360: {
            items: 6,

        }
    }
})

let allSlides = document.querySelectorAll('.experts-slide .item');

allSlides.forEach(el => {
    /*  el.addEventListener('click', function() { if(((el.classList.contains('active-slide-expert')) {):): } else {
         cloneBlock();
         el.classList.add('active-slide-expert');
       }

     }); */
});


function cloneBlock() {
    allSlides.forEach(el => {
        if (el.classList.contains('active-slide-expert')) {
            el.classList.remove('active-slide-expert');
            el.classList.add('clone');

            setTimeout(removeInsertCloned, 400);
            // removeInsertCloned();
        }
    });
}

function removeInsertCloned() {
    allSlides.forEach(el => {
        if (el.classList.contains('clone')) {
            el.classList.remove('clone');
            var htmlNew = el;
            console.log(htmlNew);
            console.log(el);
            el.remove();

            document.querySelector('.experts-slide').appendChild(htmlNew);
        }
    });
}

let expertNavButtons = document.querySelectorAll('.button-expert');

expertNavButtons.forEach(bel => {
    bel.addEventListener('click', function () {

        for (let i = 0; i < allSlides.length; i++) {

            if (allSlides[i].classList.contains('active-slide-expert')) {
                cloneBlock();
                if (allSlides[i + 1]) {
                    allSlides[i + 1].classList.add('active-slide-expert');
                } else {
                    i = 0;
                    allSlides[i].classList.add('active-slide-expert');
                }
                break;
            } else {


            }

        }

    })
});

$('.owl-carousel.news-slides2').owlCarousel({
    rtl: true,
    loop: false,
    margin: 0,
    nav: false,
    stagePadding: 30,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        900: {
            items: 3
        },
        1150: {
            items: 4
        }

    }
});

$('.owl-carousel.slider-footer').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    stagePadding: 30,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        900: {
            items: 3
        },
        1150: {
            items: 5
        }

    }
});

document.querySelector('.js-toggle-menu-landscape').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('open-menu');
    console.log('menu open');
});

document.querySelectorAll('.home-page-body #menu .grid-item>a').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('body').classList.toggle('open-menu');
    });
});

if ($('.js-toggle-menu').length > 0) {
    document.querySelector('.js-toggle-menu').addEventListener('click', function () {
        document.querySelector('body').classList.toggle('open-menu');
        console.log('js-toggle-menu');
    });
}
if ($('.search-menu').length > 0) {
    document.querySelector('.search-menu').addEventListener('click', function () {
        document.querySelector('body').classList.toggle('open-menu');
        document.querySelector('#search-input').focus();
        //document.querySelector('.search-input-block').classList.toggle('show-search');
    });
}


$('.fotoalbum-item-content').fancybox({});

$('#section-home-custom-messages-slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
});

$(window).on('resize orientationchange', function () {
    $('#section-home-custom-messages-slider').slick('resize');
    //get__double_block();
});

$('.js-staff-foto-slider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
});

function getViewport() {

    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
            viewPortHeight = window.innerHeight
    }

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
            viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
            viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
};

function gcd(a, b) {
    if (b > a) {
        temp = a;
        a = b;
        b = temp
    }
    while (b != 0) {
        m = a % b;
        a = b;
        b = m;
    }
    return a;
};

/* ratio is to get the gcd and divide each component by the gcd, then return a string with the typical colon-separated value */
function asp_ratio(x, y) {
    c = gcd(x, y);
    //return "" + (x / c) + ":" + (y / c)
    return [(x / c), (y / c)]
};


/* $('.dropdown-menu.js-dropdown-no-close').on('click', function(e) {
  e.stopPropagation();
}); */

$('.js-checkbox-disciplineName').change(function (e) {

    var cCard = $(this).closest('.collapsed-card');
    var cHeader = $(this).closest('.collapsed-card').find('.card-header');

    var numChecked = $(this).closest('.collapsed-card-body').find('input:checkbox:checked').length;

    var numCheckedAll = $(this).closest('#filter-form-card-dropdown').find('input:checkbox:checked').length;

    console.log('numChecked=' + numChecked);

    if (numChecked > 0) {
        cHeader.find('.checked-count').text(' (' + numChecked + ')');
        cCard.addClass('items-checked');
        cCard.closest('#filter-form-card-dropdown').addClass('items-checked');

    } else {
        cHeader.find('.checked-count').text('');
        cCard.removeClass('items-checked');
        cCard.closest('#filter-form-card-dropdown').removeClass('items-checked');

    }

    if (numCheckedAll > 0) {
        cCard.closest('#filter-form-card-dropdown').find('.dropdown-filter-btn .checked-count').text(' (' + numCheckedAll + ')');
    } else {
        cCard.closest('#filter-form-card-dropdown').find('.dropdown-filter-btn .checked-count').text('');
    }


    if (this.checked) {
        $(this).closest('.js-discipline-row').find('.js-input-disciplineValue').addClass('inp-visible');


    } else {
        $(this).closest('.js-discipline-row').find('.js-input-disciplineValue').removeClass('inp-visible').val('');
    }
});

$('.dropdown-filter-item .collapse').on('hide.bs.collapse', function () {
    $(this).closest('.card').addClass('closed');
})

$('.dropdown-filter-item .collapse').on('show.bs.collapse', function () {
    $(this).closest('.card').removeClass('closed');
})


$('.js-dropdown-btn').on('click', function (event) {
    $(this).next().toggleClass('show');
    $(this).parent('#filter-form-card-dropdown').toggleClass('opened');

    if ($(this).attr("aria-expanded") == 'true') {
        console.log('aria-exp' + $(this).attr("aria-expanded"))
        $(this).attr("aria-expanded", "false");
    } else {
        console.log('aria-exp' + $(this).attr("aria-expanded"))
        $(this).attr("aria-expanded", "true");
    }

});

$('#filter-form-card-dropdown .dropdown-filter-menu').on('hidden.bs.dropdown', function () {

    console.log('length' + $('.js-checkbox-disciplineName:checked', $(this)).length);

    $(this).parent('#filter-form-card-dropdown').addClass('closed');

    if ($('.js-checkbox-disciplineName:checked', $(this)).length > 0) {
        $(this).parent('#filter-form-card-dropdown').addClass('items-checked');
        $(this).find('.checked-count').text($('.js-checkbox-disciplineName:checked').length);
    } else {
        $(this).parent('#filter-form-card-dropdown').removeClass('items-checked');
        $(this).find('.checked-count').text();
    }
})

$('#filter-form-card-dropdown .dropdown-filter-menu').on('hidden.bs.dropdown', function () {
    $(this).parent('#filter-form-card-dropdown').removeClass('closed');

    if ($('.js-checkbox-disciplineName:checked', $(this)).length > 0) {
        $(this).parent('#filter-form-card-dropdown').addClass('items-checked');
    } else {
        $(this).parent('#filter-form-card-dropdown').removeClass('items-checked');
    }
})

$('.js-select-2').each(function () {
    $(this).select2({
        theme: 'bootstrap4',
        width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
        placeholder: $(this).data('placeholder'),
        allowClear: Boolean($(this).data('allow-clear')),
        closeOnSelect: !$(this).attr('multiple'),
    });
});

$(document).ready(function () {
    if (jQuery('#header-question-phone1').length > 0) {
        let numberMask1 = IMask(document.getElementById('header-question-phone1'), {
            mask: '+7 (000) 000-00-00',
            lazy: true,
            startsWith: '7',
            country: 'Russia'
        });

    }
    if (jQuery('#header-question-phone2').length > 0) {
        let numberMask1 = IMask(document.getElementById('header-question-phone2'), {
            mask: '+7 (000) 000-00-00',
            lazy: true,
            startsWith: '7',
            country: 'Russia'
        });

    }
});

$('#search-input').on('input', function () {
    // Check input( $( this ).val() ) for validity here
    if ($(this).val() != '') {
        $(this).parents('form').find('.clear-icon').show();
    } else {
        $(this).parents('form').find('.clear-icon').hide();
    }
});

$('#filterform-search ').on('input', function () {
    // Check input( $( this ).val() ) for validity here
    if ($(this).val() != '') {
        $(this).parents('form').find('.clear-icon').show();
    } else {
        $(this).parents('form').find('.clear-icon').hide();
    }
});

$(document).ready(function () {
    console.log($('#filterform-search').val());
    if ($('#filterform-search').val() != '') {

        $('#filterform-search').parents('form').find('.clear-icon').show();
    } else {
        $('#filterform-search').parents('form').find('.clear-icon').hide();
    }
});

if ($('.ineer-page-menu-blocks-section').length > 0) {

    function collapseOnHover() {
        if (window.matchMedia('(min-width: 572px)').matches) {
            const menuBlocksItemNavArray = document.querySelectorAll('.menu-blocks-item-nav');

            function isInside(node, target) {
                for (; node != null; node = node.parentNode)
                    if (node == target) return true;
            };

            if (menuBlocksItemNavArray.length > 0) {
                menuBlocksItemNavArray.forEach(function (item) {
                    const itemCollapse = item.querySelector('.collapse');
                    item.addEventListener('mouseover', function (evt) {
                        if (!isInside(evt.relatedTarget, item))
                            $(itemCollapse).collapse("show")
                    });
                    item.addEventListener('mouseout', function (evt) {
                        if (!isInside(evt.relatedTarget, item))
                            $(itemCollapse).collapse("hide")
                    });
                });
            }
            ;
        }
        ;
    };
    $(document).ready(collapseOnHover);

    function setItemsHeight() {
        const menuBlocksItemsArray = document.querySelectorAll('.menu-blocks-item');
        menuBlocksItemsArray.forEach(function (item) {
            item.style.height = 'fit-content';
            let itemHeight = item.offsetHeight;
            item.style.height = `${itemHeight}px`;
            const itemRowsNumber = Math.round(itemHeight / 2);
            item.style.gridRow = `span ${itemRowsNumber}`;
        });
    };
    $(document).ready(setItemsHeight);
    $(window).resize(setItemsHeight);

    function resizeMenuBlocksActive() {
        if (window.matchMedia('(max-width: 572px)').matches) {
            $('.collapse').on('show.bs.collapse', function (e) {
                $('.collapse').collapse("hide");
            });

            function cloneItemLink() {
                const menuBlocksItemNavArray = document.querySelectorAll('.menu-blocks-item-nav');
                const menuBlocksLinkNavArray = document.querySelectorAll('.menu-blocks-title > a');

                function cloneAttributes(element, sourceNode) {
                    let attr;
                    let attributes = Array.prototype.slice.call(sourceNode.attributes);
                    while (attr = attributes.pop()) {
                        element.setAttribute(attr.nodeName, attr.nodeValue);
                    }
                };

                if (menuBlocksItemNavArray.length > 0) {
                    for (let i = 0; i < menuBlocksItemNavArray.length; i++) {
                        const item = menuBlocksItemNavArray[i];
                        const itemLink = menuBlocksLinkNavArray[i];
                        cloneAttributes(item, itemLink);
                    }
                }
            }

            cloneItemLink();

            const menuBlocksItemArray = document.querySelectorAll('.main-menu-blocks-list .menu-blocks-item');
            if (menuBlocksItemArray.length > 0) {
                for (let i = 0; i < menuBlocksItemArray.length; i++) {
                    menuBlocksItemArray[i].style.order = i;
                    menuBlocksItemArray[i].addEventListener('click', function () {
                        if (menuBlocksItemArray[i].classList.contains('menu-blocks-item-active')) {
                            menuBlocksItemArray[i].style.order = i;
                            $(menuBlocksItemArray[i]).removeClass('menu-blocks-item-active');
                        } else {
                            for (let i = 0; i < menuBlocksItemArray.length; i++) {
                                menuBlocksItemArray[i].style.order = i;
                            }
                            ;
                            if (i % 2 !== 0) {
                                menuBlocksItemArray[i].style.order = `${i - 2}`;
                            }
                            ;

                            const menuBlocksItemActiveArray = document.querySelectorAll('.menu-blocks-item-active');
                            if (menuBlocksItemActiveArray.length > 0) {
                                menuBlocksItemActiveArray.forEach(function (item) {
                                    item.classList.remove('menu-blocks-item-active');
                                });
                            }
                            ;
                            $(menuBlocksItemArray[i]).addClass('menu-blocks-item-active');
                        }
                    });
                }
                ;
            }
            ;
        }
        ;
    };
    $(document).ready(resizeMenuBlocksActive);
}
;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || screen.width < 992) {
    $(document).ready(function () {
        $('.home-main-slider.slick-slider').slick({
            autoplay: true,
            arrows: false,
            dots: false,
            fade: true,
            autoplaySpeed: 3000
        });


        $('body').on('click', '.home-slider.slick-slider .slick-arrow', function () {
            $(this).siblings(".slick-arrow").removeClass('active');
            $(this).addClass('active');
        })

        $(".home-slider.slick-slider").on("init", function (event, slick) {
            $(this).find('.slick-next').addClass('active');
        })

        $('.section-welcome__slider .home-slider.slick-slider').slick({
            arrows: true,
            dots: true,
            mobileFirst: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 519,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }],
        });

        $('section:not(.section-welcome) .home-slider.slick-slider').slick({
            arrows: true,
            dots: true,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 459,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                }],
        });
    });

    $(document).ready(function () {
        $('.cut-text').dotdotdot({
            watch: "window"
        });
    });

    $("#hotQuestionModal .hot-question-help").on('click', function () {
        $('#hotQuestionModal').modal('hide');
        $('body').on('hidden.bs.modal', function () {

            if ($('.modal.show').length > 0) {
                $('body').addClass('modal-open');
            }
        });
    });
}
$(document).ready(function () {
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        if (!$(this).attr('data-toggle')) {
            e.preventDefault();
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 120;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});
