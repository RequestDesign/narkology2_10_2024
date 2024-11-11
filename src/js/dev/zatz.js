import $ from 'jquery'
import Form from '../utils/Form'
import Inputmask from 'inputmask'
import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay, EffectFade, EffectCreative } from 'swiper/modules';
import { rem } from '../utils/constants'
import { Fancybox } from "@fancyapps/ui";

$(function () {
    dropDowns()
    initSwitchList()
    initSwipers()
    initFancybox()
    reviewOpenReview()
    initHeader()
    initForms()
    newsSearch()
    modalsHandler()
})

function initForms() {
    function formSubmit(inputData) {
        console.log(inputData);
    }
    const forms = document.querySelectorAll('.form')
    if (forms) {
        forms.forEach((e) => {
            new Form(e, formSubmit)
            const phone = $(e).find('input[name="phone"]')
            if (phone) {
                new Inputmask('+7 (999) 999-99-99').mask(phone);
            }

        })
    }
}
function dropDowns() {
    const ddBtn = $('.drop-down-target')
    if (!ddBtn) return

    ddBtn.on('click', (e) => {
        e.preventDefault()
        e.currentTarget.classList.toggle('_opened')
        e.currentTarget.closest('.drop-down-container')
            .classList.toggle('_opened')
    })

}
function initSwipers() {
    const mobile = document.querySelectorAll('.mobile-slider.swiper')
    if (mobile) {
        mobile.forEach((e) => {
            new Swiper(e, {
                modules: [Navigation, Pagination],
                loop: false,
                slidesPerView: 1.05,
                spaceBetween: rem(1),
                breakpoints: {
                    768: {
                        slidesPerView: e.dataset.desktopSlides,
                        spaceBetween: rem(3.2),
                    }
                },
                pagination: {
                    el: e.querySelector('.swiper-pagination')
                },
                navigation: {
                    prevEl: e.querySelector('.swiper-btn-prev'),
                    nextEl: e.querySelector('.swiper-btn-next')
                },

            })
        })
    }

    const prices = document.querySelectorAll('.prices-list');
    if (prices) {
        prices.forEach((e) => {
            new Swiper(e.querySelector('.swiper'), {
                modules: [Navigation, Pagination, Grid],
                loop: false,
                slidesPerView: 1.05,
                spaceBetween: rem(1),
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 4,
                        spaceBetween: rem(3.2),
                        grid: {
                            fill: 'row',
                            rows: Math.ceil(Array.from(e.querySelectorAll('.swiper-slide')).length / 2)
                        },
                    }
                },

                pagination: {
                    el: e.querySelector('.swiper-pagination')
                },
                navigation: {
                    prevEl: e.querySelector('.swiper-btn-prev'),
                    nextEl: e.querySelector('.swiper-btn-next')
                },

            })
        })
    }

    const defaultSlider = document.querySelectorAll('.default-swiper')
    if (defaultSlider) {
        defaultSlider.forEach((e) => {
            new Swiper(e.querySelector('.swiper'), {
                modules: [Navigation, Pagination],
                loop: false,
                slidesPerView: 1.05,
                spaceBetween: rem(1),
                breakpoints: {
                    768: {
                        slidesPerView: e.dataset.desktopview ? e.dataset.desktopview : 4,
                        spaceBetween: rem(3.2),
                    }
                },
                pagination: {
                    el: e.querySelector('.swiper-pagination')
                },
                navigation: {
                    prevEl: e.querySelector('.swiper-btn-prev'),
                    nextEl: e.querySelector('.swiper-btn-next')
                },

            })
        })
    }

    const placement = document.querySelector('.placement')
    if (placement) {
        const images = new Swiper(placement.querySelector('.placement__c-slider-img'), {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            simulateTouch: false

        })

        new Swiper(placement.querySelector('.placement__c-slider-body'), {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            navigation: {
                prevEl: placement.querySelector('.placement__c-slider-body').querySelector('.swiper-btn-prev'),
                nextEl: placement.querySelector('.placement__c-slider-body').querySelector('.swiper-btn-next')
            },
            on: {
                slideChange: (swiper) => {
                    images.slideTo(swiper.activeIndex)
                }
            }

        })

    }

    const clinicPhotos = document.querySelectorAll('.clinic-photo');
    if (clinicPhotos) {
        clinicPhotos.forEach((e) => {
            new Swiper(e.querySelector('.swiper'), {
                modules: [Navigation, Pagination, Grid],
                loop: false,
                spaceBetween: rem(1),
                slidesPerView: 2.1,
                slidesPerGroup: 2,
                grid: {
                    fill: 'row',
                    rows: 2
                },
                breakpoints: {
                    768: {
                        spaceBetween: rem(3.2),
                        slidesPerView: 5,
                        slidesPerGroup: 1,
                        grid: {
                            fill: 'row',
                            rows: 1
                        },
                    }
                },

                pagination: {
                    el: e.querySelector('.swiper-pagination')
                },
                navigation: {
                    prevEl: e.querySelector('.swiper-btn-prev'),
                    nextEl: e.querySelector('.swiper-btn-next')
                },

            })
        })
    }

    const heading = document.querySelector('.heading__c-main-slider._swiper')
    if (heading) {
        new Swiper(heading.querySelector('.swiper'), {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1.05,
            spaceBetween: rem(1),
            breakpoints: {
                768: {
                    slidesPerView: 1,
                }
            },
            pagination: {
                el: heading.querySelector('.swiper-pagination'),
                type: 'fraction'
            },
            navigation: {
                prevEl: heading.querySelector('.swiper-btn-prev'),
                nextEl: heading.querySelector('.swiper-btn-next')
            },
        })
    }

    const programmCorrect = document.querySelector('.correct-programm')
    if (programmCorrect) {
        new Swiper(programmCorrect.querySelector('.swiper'), {
            modules: [Navigation, Pagination],
            loop: false,
            slidesPerView: 1,
            spaceBetween: rem(1),
            effect: 'slide',
            slideToClickedSlide: true,
            centeredSlides: true,
            simulateTouch: false,
            creativeEffect: {
                prev: {

                    translate: ["100%", 0, `0`],
                },
                next: {

                    translate: ["110%", 0, 0],
                },
                limitProgress: 3
            },
            breakpoints: {
                768: {
                    slidesPerView: 'auto',
                }
            },
            on: {
                slideChange: function () {
                    // Проходимся по всем слайдам перед текущим
                    this.slides.forEach((slide, i)=>{
                        if(i < this.activeIndex){
                            slide.classList.add('_viewed');

                        }else{
                            slide.classList.remove('_viewed');
                        }
                    })
                  
                },
            },

            navigation: {
                prevEl: programmCorrect.querySelector('.swiper-btn-prev'),
                nextEl: programmCorrect.querySelector('.swiper-btn-next')
            },
        })
    }

}
function modalsHandler() {


    const modalOpeners = $('.modal-opener'),
        modalClosers = $('.modal-closer'),
        html = $('html')


    if (!modalOpeners || !modalClosers) return

    modalOpeners.on('click', (ev) => {
        const { modal } = ev.currentTarget.dataset

        $(`.modal-${modal}`)
            .fadeIn()
            .addClass('_opened')
        html.addClass('lock')
    })


    modalClosers.on('click', (ev) => {
        const { classList } = ev.target
        if (!classList.contains('modal-closer')) return

        if (classList.contains('modal')) {
            $(ev.target).fadeOut().removeClass('_opened')

        } else {
            $(ev.target.closest('.modal')).fadeOut().removeClass('_opened')

        }
        html.removeClass('lock')
    })
}
function initSwitchList() {
    const main = $('.switch-list').toArray()
    if (!main) return

    main.forEach((m) => {
        m = $(m)
        const btns = m.find('.btn-switch-list'),
            list = m.find('.switch-list__body-list'),
            slides = m.find('.switch-list__body-list-e')

        btns.on('click', (ev) => {

            btns.removeClass('_opened')
            ev.currentTarget.classList.add('_opened')
            list.css({ transform: `translateX(-${ev.currentTarget.dataset.slideto}00%)` })

            const drops = slides.find('.drop-down-target._opened')
            if (drops) {
                drops.trigger("click")
            }



        })
    })

}

function initHeader() {
    const header = $('.header')
    if (!header) return

    const modalOpener = header.find('.header__c-top-modal'),
        modal = header.find('.header__modal'),
        html = $('html')

    modalOpener.on('click', () => {
        if (header.hasClass('_opened')) {
            header.removeClass('_opened')
            html.removeClass('lock')
            modal.fadeOut()
        } else {
            header.addClass('_opened')
            html.addClass('lock')
            modal.fadeIn()

        }
    })

    window.addEventListener('resize', () => {
        header.removeClass('_opened')
        html.removeClass('lock')
        modal.fadeOut()
    })
}

function initFancybox() {
    const anytarget = document.querySelector('[data-fancybox]')
    if (!anytarget) return



    Fancybox.bind('[data-fancybox]', {
        Thumbs: false,
        Toolbar: {
            display: {
                left: [],
                middle: ["infobar"],
                right: ["close"],
            },
        },
    })
}

function reviewOpenReview() {
    if (!document.querySelector('.review-slide__body-text')) return

    const container = $('.review-slide'),
        textSelector = '.review-slide__body-text',
        text = $(textSelector).toArray(),
        textContainerSelector = '.review-slide__body',
        shortenedTextSelecor = 'review-slide__body-short'

    const maxHeight = 300
    text.forEach((e) => {
        if (e.offsetHeight > maxHeight) {
            e = $(e)
            e.addClass(shortenedTextSelecor)
            e.closest(textContainerSelector)
                .append('<button class="btn-underline col-bl txt18 ">развернуть</button>')
        }

    })

    container.on('click', (ev) => {
        if (!ev.target.classList.contains('btn-underline')) return

        if (!ev.target.closest(textContainerSelector).classList.contains('_opened')) {
            const parent = ev.target.closest(textContainerSelector)
            parent.classList.add('_opened')
            parent.querySelector(textSelector)
                .classList.remove(shortenedTextSelecor)
            ev.target.textContent = 'свернуть'


        } else {
            const parent = ev.target.closest(textContainerSelector)
            parent.classList.remove('_opened')
            parent.querySelector(textSelector)
                .classList.add(shortenedTextSelecor)
            ev.target.textContent = 'развернуть'
        }



    })



}

function newsSearch() {
    const form = document.querySelector('.news-search__form')
    if (!form) return

    const input = form.querySelector('.news-search__form-input'),
        drop = form.querySelector('.news-search__form-drop')

    input.addEventListener('input', (e) => {
        if (input.value.length > 0) {
            drop.classList.add('_opened')
        } else {
            drop.classList.remove('_opened')

        }
    })
    form.addEventListener('mouseleave', (e) => {
        drop.classList.remove('_opened')
    })
}