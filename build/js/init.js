var design_proces_animatiom_done = 0,
    design_principle_animatiom_done = 0;
function myFunction() {
    if ($("#myBar").length) {
        var e = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 124;
        document.getElementById("myBar").style.height = e + "%"
    }
}
AOS.init({
    duration: 1500,
    disable: function() {
        return window.innerWidth < 992
    }
}),
window.onscroll = function() {
    myFunction()
};
var list = $(".mobile-menu > ul li > span.mobile-dropdown-arrow");
if (list.click(function(e) {
    var i = this.parentNode.getElementsByTagName("ul").item(0);
    null != i && (e.preventDefault(), $(i).slideToggle(300));
    var t = this.parentNode.getElementsByTagName("a").item(0);
    null != t && $(t).toggleClass("angle-active")
}), $(window).scroll(function() {
    var e;
    ((e = $(window).scrollTop()) > 10 ? $(".home_pg").addClass("up") : $(".home_pg").removeClass("up"), (e = $(window).scrollTop()) > 10 ? $(".main-navbar").addClass("bg") : $(".main-navbar").removeClass("bg"), (e = $(window).scrollTop()) > 10 ? $(".mobile-nav").addClass("header_main_add") : $(".mobile-nav").removeClass("header_main_add"), (e = $(window).scrollTop()) > 10 ? $(".mHeader-wrap").addClass("bg") : $(".mHeader-wrap").removeClass("bg"), $("#design-proces").length) && (e > $("#design-proces").offset().top - 400 && 0 == design_proces_animatiom_done && (design_proces_animatiom_done = 1, $(".web-design-proces").addClass("text-bounce")));
    $("#design-principles").length && (e > $("#design-principles").offset().top - 550 && 0 == design_principle_animatiom_done && (design_principle_animatiom_done = 1, $(".principle_com").addClass("text-bounce")))
}), $("#zoom-wrap1").length)
    var controller = new ScrollMagic.Controller,
        scene1 = new ScrollMagic.Scene({
            triggerElement: "#zoom-wrap1",
            duration: jQuery(window).height()
        }).setTween(".zoom-in-img", .1, {
            scale: 0,
            opacity: 0
        }).addTo(controller);
if ($("#zoom-wrap2").length)
    var controller2 = new ScrollMagic.Controller,
        scene2 = new ScrollMagic.Scene({
            triggerElement: "#zoom-wrap2",
            duration: jQuery(window).height()
        }).setTween(".zoom-in-img1", .1, {
            scale: 0,
            opacity: 0
        }).addTo(controller2);
function tabParentHeight() {
    $(".tab-slide-sec").height(),
    $(".tab-slide-sec .tab-right-side").height()
}
if ($(".tab-slide-sec h4, .tab-slide-sec .h4").click(function(e) {
    e.preventDefault(),
    $(this).addClass("active", 1e3),
    $(this).siblings().removeClass("active", 1e3);
    $(this).parent().height(),
    $(this).next().height()
}), $(window).resize(function() {
    tabParentHeight()
}), $(document).resize(function() {
    tabParentHeight()
}), tabParentHeight(), jQuery(document).ready(function(e) {
    e(document).on("click", ".toggle-nav", function(i) {
        i.preventDefault(),
        e("body").toggleClass("visible-nav")
    }),
    e(document).on("click", ".nav-overlay", function() {
        e("body").removeClass("visible-nav")
    }),
    e("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function() {
        e(this).toggleClass("open")
    }),
    e(".pointparallax").pointparallax();
    var i = e(".cd-section"),
        t = e("#cd-vertical-nav a");
    function s() {
        e("#is-selected-check-6").hasClass("is-selected") ? e("#down-arrow").addClass("arrow-disabled") : e("#is-selected-check-1").hasClass("is-selected") ? e("#up-arrow").addClass("arrow-disabled") : (e("#up-arrow").removeClass("arrow-disabled"), e("#down-arrow").removeClass("arrow-disabled")),
        i.each(function() {
            $this = e(this);
            var i = e('#cd-vertical-nav a[href="#' + $this.attr("id") + '"]').data("number") - 1;
            $this.offset().top - e(window).height() / 2 < e(window).scrollTop() && $this.offset().top + $this.height() - e(window).height() / 2 > e(window).scrollTop() ? (t.eq(i).addClass("is-selected"), e(".arrow-anchor").eq(0).attr("href", "#section" + i), e(".arrow-anchor").eq(1).attr("href", "#section" + (i + 2))) : t.eq(i).removeClass("is-selected")
        }),
        i.each(function() {
            $this = e(this);
            var i = e('#cd-vertical-nav-mobile a[href="#' + $this.attr("id") + '"]').data("number") - 7;
            $this.offset().top - e(window).height() / 1 < e(window).scrollTop() && $this.offset().top + $this.height() - e(window).height() / 1 > e(window).scrollTop() ? navigationItemsMobile.eq(i).addClass("is-selected") : navigationItemsMobile.eq(i).removeClass("is-selected")
        })
    }
    function o(i) {
        var t = i.offset().top - 50;
        e(window).width() < 992 && (t -= 60),
        e("html,body").animate({
            scrollTop: t
        }, 600)
    }
    if (navigationItemsMobile = e("#cd-vertical-nav-mobile a"), applyJob = e("#apply-Job a"), s(), e(window).on("scroll", function() {
        s()
    }), t.on("click", function(i) {
        i.preventDefault(),
        o(e(this.hash))
    }), navigationItemsMobile.on("click", function(i) {
        i.preventDefault(),
        o(e(this.hash))
    }), applyJob.on("click", function(i) {
        i.preventDefault(),
        o(e(this.hash))
    }), e(window).width() > 992) {
        var a = e(window).outerHeight() - 78;
        if (e(".listing-info-sec").length) {
            var r = e(".web-sidebar"),
                n = e(".project-structure-sec").position().top - a,
                l = e(".listing-info-sec").position().top + 205;
            e(window).scroll(function(i) {
                var t = e(this).scrollTop();
                t >= l && t < n ? (r.parents(".left-scrool").removeClass("botttom-aligned"), r.addClass("fixed")) : t > n ? r.parents(".left-scrool").addClass("botttom-aligned") : r.removeClass("fixed")
            })
        }
    }
    if (e(window).width() < 992 && e(".listing-info-sec").length) {
        r = e(".mobile-progressbar"),
        n = e(".project-structure-sec").position().top - 900,
        l = e(".listing-info-sec").position().top + 400;
        e(window).scroll(function(i) {
            var t = e(this).scrollTop();
            t >= l && t < n ? r.addClass("fixed") : r.removeClass("fixed")
        })
    }
    if (jQuery("li.has-uipl-mega-menu, li.has-uipl-sub-menu").mouseover(function(e) {
        jQuery("li.has-uipl-mega-menu, li.has-uipl-sub-menu").removeClass("sub-menu-active"),
        jQuery(this).addClass("sub-menu-active")
    }), jQuery("li.has-uipl-mega-menu, li.has-uipl-sub-menu").mouseout(function(e) {
        jQuery(this).removeClass("sub-menu-active")
    }), jQuery(".uipl-page-progresbar").length && jQuery(document).scroll(function() {
        jQuery(".uipl-page-progresbar > .holder > .bar").css({
            width: 100 * jQuery(document).scrollTop() / (jQuery(document).height() - jQuery(window).height()) + "%"
        })
    }), jQuery(".scrollspy-links").length && jQuery(".scrollspy-links a").on("click", function(e) {
        e.preventDefault(),
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this).attr("href")).offset().top - jQuery("nav.navbar").outerHeight()
        }, "slow")
    }), jQuery("[data-fancybox]").length && jQuery("[data-fancybox]").fancybox({
        caption: !0,
        clickContent: !1,
        hash: !1,
        animationEffect: "zoom-in-out",
        transitionEffect: "slide",
        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
        thumbs: {
            autoStart: !0,
            axis: "x"
        }
    }), jQuery(window).width() > 992 && jQuery(".blog-herozone-main-share").length && jQuery(".blog-herozone-main-share").stickySidebar({
        containerSelector: ".wraper-blog-main",
        innerWrapperSelector: ".sticky-social-share"
    }), jQuery(".matchHeight").length && jQuery(".matchHeight").matchHeight(), jQuery(".freshclinic-components-box-row.swiper-container").length && new Swiper(".freshclinic-components-box-row.swiper-container", {
        slidesPerView: 1.25,
        centeredSlides: !0,
        autoplay: {
            delay: 6e3
        },
        loop: !0,
        spaceBetween: 20,
        loopedSlides: 2
    }), jQuery(".pwa-action-box.swiper-container").length && new Swiper(".pwa-action-box.swiper-container", {
        slidesPerView: 1.25,
        centeredSlides: !0,
        autoplay: {
            delay: 6e3
        },
        loop: !0,
        loopedSlides: 2
    }), jQuery(window).width() < 480 ? jQuery(".clients-carousel.swiper-container").length && new Swiper(".clients-carousel.swiper-container", {
        slidesPerView: 5,
        loop: !0,
        autoplay: {
            delay: 5e3
        },
        breakpoints: {
            575: {
                slidesPerView: 3
            },
            479: {
                slidesPerView: 2
            }
        }
    }) : jQuery(".clients-carousel.swiper-container").length && new Swiper(".clients-carousel.swiper-container", {
        slidesPerView: 5,
        loop: !0,
        breakpoints: {
            575: {
                slidesPerView: 3
            },
            479: {
                slidesPerView: 2
            }
        }
    }), jQuery("#ClutchCasestudiesThumbs").length) {
        var c = new Swiper("#ClutchCasestudiesThumbs", {
            slidesPerView: 5,
            autoplay: {
                delay: 6e3
            },
            loop: !1,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            breakpoints: {
                768: {
                    slidesPerView: 3
                },
                575: {
                    slidesPerView: 3
                },
                479: {
                    slidesPerView: 2
                }
            }
        });
        new Swiper("#ClutchCasestudiesDetails", {
            spaceBetween: 10,
            loop: !0,
            slidesPerView: 1,
            navigation: {
                nextEl: "#ClutchCasestudiesNavigationPrev",
                prevEl: "#ClutchCasestudiesNavigationNext"
            },
            pagination: {
                el: "#ClutchCasestudiesDetails .swiper-pagination",
                clickable: !0
            },
            thumbs: {
                swiper: c
            }
        })
    }
    if (jQuery("#ClutchCasestudiesNYCThumbs").length) {
        var d = new Swiper("#ClutchCasestudiesNYCThumbs", {
            slidesPerView: 7,
            autoplay: {
                delay: 6e3
            },
            loop: !1,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            breakpoints: {
                1024: {
                    slidesPerView: 5
                },
                768: {
                    slidesPerView: 3
                },
                575: {
                    slidesPerView: 3
                },
                479: {
                    slidesPerView: 2
                }
            }
        });
        new Swiper("#ClutchCasestudiesNYCDetails", {
            spaceBetween: 10,
            loop: !0,
            slidesPerView: 1,
            navigation: {
                nextEl: "#ClutchCasestudiesNYCNavigationPrev",
                prevEl: "#ClutchCasestudiesNYCNavigationNext"
            },
            pagination: {
                el: "#ClutchCasestudiesNYCDetails .swiper-pagination",
                clickable: !0
            },
            thumbs: {
                swiper: d
            }
        })
    }
    if (jQuery("[data-location]").on("click", function(e) {
        e.preventDefault(),
        jQuery("html, body").animate({
            scrollTop: jQuery("#" + jQuery(this).attr("data-location")).offset().top
        }, "slow")
    }), jQuery(".homeCountdownMobileCarousel").length && new Swiper(".homeCountdownMobileCarousel", {
        autoplay: {
            delay: 6e3,
            disableOnInteraction: !1
        },
        loop: !0,
        slidesPerView: 2,
        pagination: {
            el: ".homeCountdownMobileCarousel .swiper-pagination"
        },
        breakpoints: {
            575: {
                slidesPerView: 3
            },
            479: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 2
            }
        }
    }), jQuery(".home-features-main-item-title").click(function() {
        let e = jQuery(this);
        e.parent().closest(".home-features-main-item").hasClass("section-active") || (jQuery(".home-features-main-item").removeClass("section-active-textvisible"), setTimeout(function() {
            jQuery(".home-features-main-item").removeClass("section-active")
        }, 600), setTimeout(function() {
            e.parent().closest(".home-features-main-item").addClass("section-active"),
            setTimeout(function() {
                e.parent().closest(".home-features-main-item").addClass("section-active-textvisible")
            }, 600)
        }, 600))
    }), jQuery(".home-featuresmobile-slider.swiper-container").length && new Swiper(".home-featuresmobile-slider.swiper-container", {
        autoplay: {
            delay: 6e3
        },
        loop: !0,
        slidesPerView: 1,
        pagination: {
            el: ".home-featuresmobile-slider.swiper-container .swiper-pagination"
        }
    }), jQuery(".home-industry-box-slider.swiper-container").length && new Swiper(".home-industry-box-slider.swiper-container", {
        autoplay: {
            delay: 6e3
        },
        loop: !0,
        slidesPerView: 4,
        navigation: {
            nextEl: ".home-industry-box-navigation-next",
            prevEl: ".home-industry-box-navigation-prev"
        },
        pagination: {
            el: ".home-industry-box-pagination",
            clickable: !0
        },
        breakpoints: {
            990: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 2
            },
            575: {
                slidesPerView: 2
            },
            479: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    }), jQuery(".wraper-home-casestudies").length) {
        let e = jQuery(window).height(),
            i = new ScrollMagic.Controller;
        jQuery(".wraper-home-casestudies").each(function() {
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0,
                offset: 0,
                duration: 5 * e + 2
            }).setPin(this).addTo(i),
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .75,
                offset: 0,
                duration: 1.75 * e
            }).setClassToggle(this, "city-bank").addTo(i),
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0,
                offset: 1 * e,
                duration: e
            }).setClassToggle(this, "openreel").addTo(i),
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0,
                offset: 2 * e,
                duration: e
            }).setClassToggle(this, "houselab").addTo(i),
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0,
                offset: 3 * e,
                duration: e
            }).setClassToggle(this, "largo").addTo(i),
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0,
                offset: 4 * e,
                duration: 2 * e
            }).setClassToggle(this, "londonrag").addTo(i)
        });
        let t = jQuery(window).scrollTop();
        jQuery(window).scroll(function() {
            let e = jQuery(window).scrollTop();
            t < e ? (jQuery(".skipHomeCaseStudies.Up").show(), jQuery(".skipHomeCaseStudies.Down").hide()) : (jQuery(".skipHomeCaseStudies.Down").show(), jQuery(".skipHomeCaseStudies.Up").hide()),
            t = e
        }),
        jQuery(".skipHomeCaseStudies").click(function(e) {
            e.preventDefault(),
            jQuery("body, html").animate({
                scrollTop: jQuery(this.hash).offset().top - 80
            }, 1e3)
        })
    }
    if (jQuery(window).scroll(function() {
        jQuery(".odometer").visible(!0) && setTimeout(function() {
            jQuery(".odometer").each(function() {
                jQuery(this).html(jQuery(this).data("odometer-value"))
            })
        }, 100)
    }), jQuery(".clutch-casestudies-details.home-page.swiper-container").length && new Swiper(".clutch-casestudies-details.home-page.swiper-container", {
        spaceBetween: 10,
        loop: !0,
        slidesPerView: 1,
        navigation: {
            nextEl: ".clutch-casestudies-details-navigation-next",
            prevEl: ".clutch-casestudies-details-navigation-prev"
        },
        pagination: {
            el: ".clutch-casestudies-details-pagination"
        }
    }), jQuery("#HomeWelcomeTestimonialSlider").length && new Swiper("#HomeWelcomeTestimonialSlider", {
        autoplay: {
            delay: 6e3,
            disableOnInteraction: !1
        },
        loop: !0,
        slidesPerView: 1,
        pagination: {
            el: "#HomeWelcomeTestimonialSlider .swiper-pagination",
            clickable: !0
        }
    }), jQuery("#HomeV3CasestudiesThumbs").length) {
        var p = new Swiper("#HomeV3CasestudiesThumbs", {
            slidesPerView: 5,
            loop: !1,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            breakpoints: {
                768: {
                    slidesPerView: 3
                },
                575: {
                    slidesPerView: 3
                },
                479: {
                    slidesPerView: 2
                }
            }
        });
        new Swiper("#HomeV3CasestudiesDetails", {
            spaceBetween: 10,
            loop: !0,
            slidesPerView: 1,
            navigation: {
                nextEl: "#HomeV3CasestudiesNavigationPrev",
                prevEl: "#HomeV3CasestudiesNavigationNext"
            },
            pagination: {
                el: "#HomeV3CasestudiesDetails .swiper-pagination",
                clickable: !0
            },
            thumbs: {
                swiper: p
            }
        })
    }
    jQuery(".mobile-testimonialcta-testimonial-slider.swiper-container").length && new Swiper(".mobile-testimonialcta-testimonial-slider.swiper-container", {
        autoplay: {
            delay: 6e3
        },
        loop: !0,
        slidesPerView: 1,
        pagination: {
            el: ".mobile-testimonialcta-testimonial-pagination",
            clickable: !0
        }
    }),
    jQuery(".rate-user").attr("data-user-rate", jQuery(".rate-range").val()),
    jQuery(".rate-range").on("change", function() {
        jQuery(this).siblings(".rate-user").attr("data-user-rate", jQuery(this).val())
    }),
    jQuery(".uipl-drawable-svg").length && new Vivus("branding-icon", {
        type: "sync",
        start: "inViewport",
        duration: 100
    })
}), jQuery(window).ready(function(e) {
    e(".blurry-load").each(function() {
        e(this).addClass("blur-out").removeClass("blurry-load"),
        e(this).addClass("blur-out")
    })
}), $("#portfolio-filter").length) {
    var selectedClass = "";
    $(".fil-cat").click(function() {
        $(this).addClass("active").siblings().removeClass("active"),
        selectedClass = $(this).attr("data-rel"),
        $("#portfolio-filter").fadeTo(100, .1),
        $("#portfolio-filter .portfolio-list-filter").not("." + selectedClass).fadeOut().removeClass("scale-anm"),
        setTimeout(function() {
            $("." + selectedClass).fadeIn().addClass("scale-anm"),
            $("#portfolio-filter").fadeTo(300, 1)
        }, 300)
    })
}
if ($("#project-list").loadMore({
    selector: ".project-load",
    loadBtn: "#btn",
    limit: 4,
    load: 2,
    animate: !1,
    animateIn: "fadeInUp"
}), $(window).width() < 992)
    var swiper = new Swiper(".wirefram-mobileimg-wrap .swiper-container", {
        slidesPerView: 4,
        centeredSlides: !0,
        spaceBetween: 60,
        loop: !0,
        scrollbar: {
            el: ".wirefram-mobileimg-wrap .swiper-scrollbar",
            hide: !0
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 50
            }
        }
    });
if ($(window).width() < 768)
    swiper = new Swiper(".pristine-wrap-slider .swiper-container", {
        slidesPerView: 1,
        centeredSlides: !0,
        spaceBetween: 20,
        loop: !0,
        navigation: {
            nextEl: ".pristine-wrap-slider .swiper-button-next",
            prevEl: ".pristine-wrap-slider .swiper-button-prev"
        }
    });
swiper = new Swiper(".web-design-slider .swiper-container", {
    slidesPerView: 1,
    grabCursor: !0,
    loop: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    spaceBetween: 90,
    navigation: {
        nextEl: ".web-design-slider .swiper-button-next",
        prevEl: ".web-design-slider .swiper-button-prev"
    }
}),
swiper = new Swiper(".frem-slider-wrap .swiper-container", {
    loop: !0,
    grabCursor: !0,
    centeredSlides: !1,
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: {
        delay: 2500,
        disableOnInteraction: !1
    },
    navigation: {
        nextEl: ".frem-slider-wrap .swiper-button-next",
        prevEl: ".frem-slider-wrap .swiper-button-prev"
    },
    breakpoints: {
        2190: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        479: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
}),
swiper = new Swiper(".frame-slider .swiper-container", {
    effect: "slide",
    loop: !0,
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: -20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !1
    },
    breakpoints: {
        2560: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },
    navigation: {
        nextEl: ".frame-slider .swiper-button-next",
        prevEl: ".frame-slider .swiper-button-prev"
    },
    pagination: {
        el: ".frame-slider .swiper-pagination",
        type: "fraction"
    }
}),
swiper = new Swiper(".app-testomonial-slider .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: !0,
    centeredSlides: !0,
    autoplay: {
        delay: 9e3,
        disableOnInteraction: !1
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    breakpoints: {
        991: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
}),
swiper = new Swiper(".oota-slider-scroll .swiper-container", {
    grabCursor: !0,
    centeredSlides: !0,
    slidesPerView: 6,
    spaceBetween: 40,
    pagination: {
        el: ".oota-slider-scroll .swiper-pagination",
        type: "progressbar"
    },
    navigation: {
        nextEl: ".oota-slider-scroll .swiper-button-next",
        prevEl: ".oota-slider-scroll .swiper-button-prev"
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
}),
swiper = new Swiper(".mobile-frame-slider .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: !0,
    loop: !0,
    autoplay: {
        delay: 1e3,
        disableOnInteraction: !1
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    navigation: {
        nextEl: ".mobile-frame-slider .swiper-button-next",
        prevEl: ".mobile-frame-slider .swiper-button-prev"
    },
    breakpoints: {
        991: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});
var swiper2 = new Swiper(".why-it-works-mobile .swiper-container", {
    slidesPerView: 1,
    grabCursor: !0,
    loop: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
        delay: 3e3,
        disableOnInteraction: !1
    },
    navigation: {
        nextEl: ".why-it-works-mobile .swiper-button-next",
        prevEl: ".why-it-works-mobile .swiper-button-prev"
    }
});
swiper2 = new Swiper(".mobile-slider-design .swiper-container", {
    slidesPerView: 1,
    grabCursor: !0,
    loop: !0,
    centeredSlides: !0,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: {
        delay: 3e3,
        disableOnInteraction: !1
    },
    navigation: {
        nextEl: ".mobile-slider-design .swiper-button-next",
        prevEl: ".mobile-slider-design .swiper-button-prev"
    }
});
function UIPLReveal() {
    jQuery(".uipl-section-reveal-check").each(function() {
        jQuery(this).visible(!0) && jQuery(this).addClass("reveal-me")
    })
}
function UIPLGraphAnalytics() {
    jQuery(".UIPLGraphAnalytics").each(function() {
        jQuery(this).visible(!0) && jQuery(this).animate({
            height: jQuery(this).data("graph-point") + "%"
        }, {
            duration: 1e3,
            easing: "linear"
        })
    })
}
jQuery(document).ready(UIPLReveal),
jQuery(window).scroll(UIPLReveal),
jQuery(document).ready(UIPLGraphAnalytics),
jQuery(window).scroll(UIPLGraphAnalytics),
jQuery(window).on("load", function() {
    if (jQuery(".isotope").length && (jQuery(".isotope").isotope(), setTimeout(function() {
        jQuery(".isotope").isotope()
    }, 500)), jQuery(".blog-listing-main-box").length) {
        var e = jQuery(".blog-listing-main-box").isotope({
            layoutMode: "fitRows"
        });
        jQuery(".blog-listing-filter-list button").on("click", function() {
            e.isotope({
                filter: jQuery(this).attr("data-filter")
            }),
            jQuery(".blog-listing-filter-list button").removeClass("active"),
            jQuery(this).addClass("active")
        }),
        e.infiniteScroll({
            path: ".blog-listing-main-pagination-next",
            append: ".blog-listing-main-box-item",
            status: ".scroller-status",
            hideNav: ".blog-listing-main-pagination",
            outlayer: e.data("isotope")
        })
    }
});
var moveForce = 40,
    rotateForce = 30;
$(document).mousemove(function(e) {
    var i = $(document).width(),
        t = $(document).height(),
        s = (e.pageX - i / 2) / (i / 2) * -moveForce,
        o = (e.pageY - t / 2) / (t / 2) * -moveForce,
        a = e.pageX / i * rotateForce * 2 - rotateForce,
        r = -(e.pageY / t * rotateForce * 2 - rotateForce);
    $(".mouse-img-move").css("left", s + "px").css("top", o + "px").css("transform", "rotateX(" + r + "deg) rotateY(" + a + "deg)")
});

