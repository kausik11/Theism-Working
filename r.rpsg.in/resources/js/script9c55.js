
//scrollbar

// without this script, the slider doesn't start on it's own:
!function($){

  $(window).on("load",function(){

    $(".bulletVScroll").mCustomScrollbar({
      axis:"yx",
					theme:"inset-2-dark",
					scrollbarPosition:"inside",
          snapAmount:140,
					scrollButtons:{enable:true},
					keyboard:{scrollAmount:140},
					mouseWheel:{deltaFactor:40},
					scrollInertia:400
    });

  })
  $(window).on('scroll', function() {
    if (($(this).scrollTop() + $(this).height()) - $(".mainContainer").outerHeight(true) >= 0) {
      //  alert('Scrolled to bottom');
        $(".down-scroll").addClass("up-scroll").css("left","initial");
          $(".down-scroll").show();
    }else if ($(this).scrollTop() > 50){
      $(".down-scroll").hide().css("left","0");
    } else{
      $(".down-scroll").removeClass("up-scroll");
      $(".down-scroll").show().css("left","0");
    }
});
    $(function(){
    	// Home Slider
      var owlSlider = $('#homepage_slider');
      owlSlider.owlCarousel({
	        margin: 0,
          items:1,
          merge:true,
          loop:true,
          video:true,
          lazyLoad:true,
          center:true,
          dots: false,
          animateIn: 'fadeIn',
          slideSpeed : 10000,
          touchDrag  : false,
          mouseDrag  : false
	    });
      // Advertise Slider
      $('#advertSlider').owlCarousel({
	        loop: true,
          items: 1,
	        margin: 0,
          autoplayTimeout: 10000,
	        autoplay: true,
	        slideSpeed : 6000,
	        autoWidth: false,
	        nav: false,
	        dots: true
	    });
	    // Logo Slider
	    $('#owlSlider2').owlCarousel({
	        items: 5,
	        loop: false,
	        margin: 15,
	        autoplay: false,
			autoplayHoverPause: true,
	        slideSpeed : 6000,
	        nav: true,
	        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	        dots: false,
	        responsive:{
	            1200:{
	            	items: 5
	            },
              700:{
                  items: 4
              },
              320:{
                  items: 1
              }
	        }
	    });
	    // Media Slider
	    $('#owlSlider5').owlCarousel({
	        items: 3,
	        loop: false,
	        margin: 15,
	        autoplay: false,
	        slideSpeed : 6000,
	        nav: false,
	        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	        dots: false,
	        responsive:{
	            1200:{
	            	items: 3
	            },
	            700:{
	                items: 2
	            },
	            320:{
	                items: 1
	            }
	        }
	    });
	    // Leadership Slider
	    $('#newsFeedCaro').owlCarousel({
	        loop: false,
          items: 1,
	        margin: 30,
	        autoplay: false,
	        slideSpeed : 6000,
        	autoplayHoverPause: true,
	        autoWidth: true,
	        nav: true,
	        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	        dots: false,
	        responsive:{
	            1200:{
	            	items: 1
	            },
	            700:{
	                items: 1,
	                margin: 10
	            },
	            320:{
	                items: 2,
	                margin: 10
	            }
	        }
	    });
      // Leadership
      $('#leadership_slider').owlCarousel({
	        loop: false,
          items: 1,
	        margin: 20,
	        autoplay: false,
	        slideSpeed : 6000,
	        autoWidth: true,
        	autoplayHoverPause: true,
	        nav: true,
	        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	        dots: false,
	        responsive:{
	            1200:{
	            	items: 3,
                autoWidth: true,
                margin: 30
	            },
	            1024:{
	            	items: 3,
                autoWidth: true,
                margin: 10
	            },
	            700:{
	                items: 2,
                  autoWidth: true,
	                margin: 10
	            },
	            320:{
	                items: 2,
        	        autoWidth: false,
	                margin: 10
	            }
	        }
	    });
	    //video slider starts


	    var owl3 = $('#videoHomeThumb');
	    owl3.owlCarousel({
	        items: 1,
	        merge: true,
	        loop: true,
	        margin: 90,
	        video: true,
	        nav: true,
	        dots: false,
	        autoplay: true,
        	autoplayHoverPause: true,
	        center: true,
	        responsive:{
	            1200:{
	            	items: 2
	            },
	            768:{
	                items: 1,
	                margin: 10,
                   navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	            },
	            320:{
	                items: 1,
	                margin: 10,
                   navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
	            }
	        },
	        navText: ['<i class="fa fa-chevron-circle-left"></i>', '<i class="fa fa-chevron-circle-right"></i>']
	    });
	    // About Slider
	    $('#about_slider').owlCarousel({
	        items: 1,
	        loop: true,
	        margin: 0,
	        autoplay: true,
	        autoplaySpeed: 2000,
        	autoplayHoverPause: true,
	        nav: false,
	        dots: false,
	        autoplayTimeout: 7000
	    });
	    // Investor Slider
	    $('#investor_slider').owlCarousel({
	        items: 1,
	        loop: true,
	        margin: 0,
	        autoplay: true,
        	autoplayHoverPause: true,
	        slideSpeed : 9000,
	        nav: false,
	        dots: false
	    });
      // Contact Slider
      $('#contact_slider').owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          autoplay: true,
        	autoplayHoverPause: true,
        	autoplayTimeout: 9000,
        	autoplaySpeed: 3000,
          nav: false,
          dots: false
      });
      // Community Slider
      $('#community_slider').owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          autoplay: true,
        	autoplayHoverPause: true,
        	autoplayTimeout: 9000,
        	autoplaySpeed: 3000,
          nav: false,
          dots: false
      });
      // Community Health Slider
      $('.commonSlider_js').owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          autoplay: true,
        	autoplayHoverPause: true,
        	autoplayTimeout: 9000,
        	autoplaySpeed: 3000,
          nav: true,
          dots: false,
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
      });
      $('.threeColCarousel').owlCarousel({
          margin:20,
          center:true,
          items:1,
          touchDrag:true,
          loop:true,
          smartSpeed:750,
          stagePadding:213,
          dots:true,
          nav:false,
          autoplayHoverPause:true,
          autoplay:true,
          responsive:{
              1920:{
              	stagePadding:413,
              },
	            768:{
	                stagePadding:110,
	            },
	            640:{
	                stagePadding:80,
	            },
	            360:{
	                stagePadding:1,
	            },
	            320:{
	                stagePadding:1,
	            }
            },
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
      });
      $('.comunityCarousel_js').owlCarousel({
          margin:20,
          center:true,
          items:1,
          touchDrag:true,
          loop:true,
          smartSpeed:750,
          stagePadding:213,
          dots:true,
          nav:false,
          autoplayHoverPause:true,
          autoplay:true,
          responsive:{
              1920:{
              	stagePadding:413,
              },
              1440:{
              	stagePadding:313,
              },
              1680:{
              	stagePadding:363,
              },
              1366:{
              	stagePadding:300,
              },
              1200:{
              	stagePadding:243,
              },
	            768:{
	                stagePadding:110,
	            },
	            640:{
	                stagePadding:80,
	            },
	            360:{
	                stagePadding:1,
	            },
	            320:{
	                stagePadding:1,
	            }
            },
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
      });
      $('.twoColCarousel').owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          autoplay: true,
        	autoplayHoverPause: true,
        	autoplayTimeout: 9000,
        	autoplaySpeed: 3000,
          nav: true,
          dots: false,
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
      });
      // About Goup Info Slider
      $('#groupSlider').owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          autoplayTimeout: 10000,
          autoplay: false,
        	autoplayHoverPause: true,
          autoHeight: false,
          slideSpeed : 6000,
          autoWidth: false,
          nav: true,
          dots: false,
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
      });
      // Career  Slider
      $('.career_slider_arrow').owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          autoplayTimeout: 10000,
          autoplay: false,
        	autoplayHoverPause: true,
          autoHeight: false,
          slideSpeed : 6000,
          autoWidth: false,
          nav: true,
          dots: false,
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
      });
      $('.career_slider_dots').owlCarousel({
          loop: true,
          items: 1,
          margin: 0,
          autoplayTimeout: 10000,
          autoplay: false,
        	autoplayHoverPause: true,
          autoHeight: false,
          slideSpeed : 6000,
          autoWidth: false,
          nav: false,
          dots: true
      });
    });
    var w = window.innerWidth;
    $height = $(window).outerHeight();
    if(w > 1024){
    	$('#introSlider_js').css('height', $height);
    	$('#investor_slider .item').css('height', $height);
    	$('#about_slider .item').css('height', $height);
    }
    $("#blackScroll").mCustomScrollbar();
    /*===================================================================================*/
    /*  Scroll Top
    /*===================================================================================*/
    var btn = $('.top-of-page');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            btn.addClass('show');
            $('.navbar-wrapper').addClass('bg-black');
        }else{
            btn.removeClass('show');
            $('.navbar-wrapper').removeClass('bg-black');
        }
    });
    btn.on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    // launch popup on page load
    $(window).ready(function(){
        var wow = new WOW({
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,       // trigger animations on mobile devices (default is true)
		    live:         true,       // act on asynchronously loaded content (default is true)
		    callback:     function(box){
		      // the callback is fired every time an animation is started
		      // the argument that is passed in is the DOM node being animated
		    	},
		    	scrollContainer: null // optional scroll container selector, otherwise use window
		  	}
		);
		wow.init();
    });
  	// Logo Slider
    $('#core_values').owlCarousel({
        items: 3,
        loop: true,
        center: true,
        margin: 15,
        autoplay: true,
      	autoplayHoverPause: true,
        slideSpeed : 9000,
        nav: false,
        dots: true,
        responsive:{
            1200:{
            	items: 3
            },
            1024:{
            	items: 3,
              margin: 5
            },
            700:{
                items: 1
            },
            320:{
                items: 1
            }
        }
    });
    $coreheight = $('.core_values .item img').height();
    $('.core_values .item .overlay-value').css('height', $coreheight);
    $('#awards_slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 9000,
  		  autoplaySpeed: 2000,
      	autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        dots: false
    });
    $('#companyinfo_slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        slideSpeed : 8000,
        nav: false,
        dots: true,
        responsive:{
            1200:{
            	items: 1
            },
            700:{
                items: 1
            },
            320:{
                items: 1
            }
        }
    });
    $('#companylegacy_slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        slideSpeed : 8000,
        nav: false,
        dots: true,
        responsive:{
            1200:{
            	items: 1
            },
            700:{
                items: 1
            },
            320:{
                items: 1
            }
        }
    });
    // Media Page Gallery Image Slider
    $('#newsFeedCaro').owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        autoplay: true,
        slideSpeed : 2000,
        nav: false,
        dots: true,
        responsive:{
            1200:{
              items: 1
            },
            700:{
                items: 1,
                margin: 0
            },
            320:{
                items: 1,
                margin: 0
            }
        }
    });
    $('.gallery_slider').owlCarousel({
        items: 3,
        loop: true,
        center: true,
        margin: 0,
        autoplay: true,
      	autoplayHoverPause: true,
        slideSpeed : 6000,
        autoplayTimeout: 10000,
        animateIn: 'fadeIn',
        animateOut: 'fadeIn',
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
        dots: true,
        responsive:{
            1200:{
              items: 3
            },
            700:{
                items: 1,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
            },
            320:{
                items: 1,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
            }
        }
    });
}(window.jQuery);

/**
 * Plugin for linking multiple owl instances
 * @version 1.0.0
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined){
    var Linked = function(carousel){
        this._core = carousel;
        this._handlers = {
            'dragged.owl.carousel changed.owl.carousel': $.proxy(function(e){
                if (e.namespace && this._core.settings.linked){
                    this.update(e);
                }
            }, this),
            'linked.to.owl.carousel': $.proxy(function(e, index, speed, standard, propagate){
                if (e.namespace && this._core.settings.linked) {
                    this.toSlide(index, speed, propagate);
                }
            }, this)
        };
        // register event handlers
        this._core.$element.on(this._handlers);
        // set default options
        this._core.options = $.extend({}, Linked.Defaults, this._core.options);
    };
    /**
     * Default options.
     * @public
     */
    Linked.Defaults = {
        linked: false
    };
    /**
     * Updated linked instances
     */
    Linked.prototype.update = function(e) {
        this.toSlide( e.relatedTarget.relative(e.item.index) );
    };
    /**
     * Carry out the to.owl.carousel proxy function
     * @param {int} index
     * @param {int} speed
     * @param {bool} propagate
     */
    Linked.prototype.toSlide = function(index, speed, propagate){
        var id = this._core.$element.attr('id'),
            linked = this._core.settings.linked.split(',');

        if(typeof propagate == 'undefined'){
            propagate = true;
        }
        index = index || 0;

        if(propagate){
            $.each(linked, function(i, el){
                $(el).trigger('linked.to.owl.carousel', [index, 300, true, false]);
            });
        }else{
            this._core.$element.trigger('to.owl.carousel', [index, 300, true]);
            if(this._core.settings.current){
                this._core._plugins.current.switchTo(index);
            }
        }
    };
    /**
     * Destroys the plugin.
     * @protected
     */
    Linked.prototype.destroy = function(){
        var handler, property;
        for (handler in this._handlers){
            this.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)){
            typeof this[property] != 'function' && (this[property] = null);
        }
    };
    $.fn.owlCarousel.Constructor.Plugins.linked = Linked;

})(window.Zepto || window.jQuery, window, document);

$('.milestone-carousel').owlCarousel({
  	items: 1,
        nav: true,
  	loop: false,
  	center: true,
  	margin: 20,
  	dots: false,
  	autoplay: false,
    stagePadding:213,
  	URLhashListener: false,
    slideSpeed : 13000,
  	autoplayHoverPause: true,
  	autoplayTimeout: 13000,
  	autoplaySpeed: 13000,
  	//startPosition: 'URLHash',
  	responsiveClass: true,
    responsive:{
        1280:{
            stagePadding:213,
        },
        768:{
            stagePadding:113,
        },
        400:{
              items: 1,
              stagePadding:0,
            },
      360:{
            items: 1,
            stagePadding:0,
          }
    },
    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  	linked: ".years-carousel"
});

$(".years-carousel").on("initialize.owl.carousel link.to.owl.carousel", function(){
	$(this.$element).find(".owl-item.current").removeClass("current");
	var current = $(this.$element).find(".owl-item.active.center").length
        ? $(this.$element).find(".owl-item.active.center")
        : $(this.$element).find(".owl-item.active").eq(0);
  		current.addClass("current");
}).owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    responsiveClass: true,
    items: 6,
    autoplayHoverPause: true,
    slideSpeed : 13000,
    autoplayTimeout: 13000,
  	autoplaySpeed: 13000,
    margin: 0,
    center: true,
    URLhashListener: false,
    responsive:{
        1280:{
            items: 6,
        },
      360:{
            items: 3,
            stagePadding:0,
          }
    },
    linked: ".milestone-carousel"
});

$(".content-carousel").on("initialize.owl.carousel link.to.owl.carousel", function(){
	$(this.$element).find(".owl-item.current").removeClass("current");
	var current = $(this.$element).find(".owl-item.active.center").length
        ? $(this.$element).find(".owl-item.active.center")
        : $(this.$element).find(".owl-item.active").eq(0);
  		current.addClass("current");
}).owlCarousel({
    nav: false,
    loop: false,
    dots: false,
    responsiveClass: true,
    items: 1,
    autoplayHoverPause: true,
    slideSpeed : 13000,
    autoplayTimeout: 13000,
  	autoplaySpeed: 13000,
    margin: 0,
    center: true,
    URLhashListener: false,
    linked: ".milestone-carousel"
});
$('#backBtn').click(function() {
  	$('.mobile_menu').removeClass('top-open bottom-open right-open left-open pushleft-open pushright-open');
  	$('body').removeClass('push-toleft push-toright');
});

$('body').addClass('push');
$('#showRightPush').click(function () {
  	$('body').toggleClass('push-toright');
  	$('.mobile_menu').toggleClass('pushright-open');
});

// $("#showRightPush").click(function(){
//     $('#mobile_menu').show('slide', {direction: 'right'}, 500);
// });
// $('.backBtn').click(function(){
//     $('#mobile_menu').hide('slide', {direction: 'right'}, 500);
// });
// function businessPage() {
//   location.href("business.html");
//   alert("a");
// }
$(function() {
  if ($(window).width() < 1024) {
      //alert("a")
     $("#businessMenu").appendTo("#openInMob");
     $("#aboutMenu").appendTo("#openInMob2");
     $("#mobile_menu").removeClass("collapse navbar-collapse navbar-wrapper-collapse customMenuWrapper ").addClass("mobile_menu");

  }else{
    //alert("b")
    $("#mobile_menu").removeClass("mobile_menu").addClass("collapse navbar-collapse navbar-wrapper-collapse customMenuWrapper ");
    $("#businessMenu").detach("#openInMob");
    $("#aboutMenu").detach("#openInMob2");
    $(".nav-link").on('mouseenter', function(e) {
      $('.aboutMenu').collapse("hide");
        $('.businessMenu').collapse("hide");
       $('.customSubMenuBarBusiness_js').collapse("hide");
       $('.customSubMenuBarabout_js').collapse("hide");
    });
    $('.customSubMenuBar_js').mouseleave(function(){
      // $('.customSubMenuBarBusiness_js').collapse("hide");
    });

    $(".businessHover").on('mouseenter', function(e){
      $('.aboutMenu').collapse("hide");
        $(this).parent().parent().parent().find('.businessMenu').collapse("show");
         $('.navbar-wrapper').addClass('bg-black');
         // $('.customSubMenuBarBusiness_js').collapse("hide");
    });
    $(".aboutHover").on('mouseenter', function(e){
      $('.businessMenu').collapse("hide");
        $(this).parent().parent().parent().find('.aboutMenu').collapse("show");
         $('.navbar-wrapper').addClass('bg-black');
         // $('.customSubMenuBarBusiness_js').collapse("hide");
    });
    // $(".customMenuWrapper").on('mouseenter.collapse', '[data-toggle=collapse]', function(e) {
    //   var $this = $(this),
    //   href,
    //   target = $this.attr('data-target')
    //   || e.preventDefault()
    //   || (href = $this.attr('href'))
    //   && href.replace(/.*(?=#[^\s]+$)/, ''), //strip for ie7
    //   option = $(target).hasClass('in') ? 'hide' : "show"
    //   $('.customSubMenuBar_js').not(target).collapse("hide");
    //   $(target).collapse(option);
    //   $('.navbar-wrapper').addClass('bg-black');
    // })
    $('.customMenuWrapper').mouseleave(function(){
      $(".customSubMenuBar_js").collapse('hide');
    });

    var calMenuWidth = $(".customMenu_nav").width();
    $(".customMenuWrapper .customSubMenuBar ul").css("width",calMenuWidth);
  }

});
$('.mainContainer').not('#mobile_menu').on('click', function(e){
    //    e.stopPropagation()
    $('#backBtn').trigger('click');
});
$('.down-scroll a[href*=#]').on('click', function(e) {
	 e.preventDefault();
	 $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 60}, 500, 'linear');
});
/*$(document).ready(function(){
    setInterval(function () {
	  $(".instalink-header-pic").css("width","auto");
   }, 3000);
});*/
 $(document).ready(function(){
   var deviceAgent = navigator.userAgent.toLowerCase();

   if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
     //alert('iphone')
     $('a').on('touchend', function() {
          $(this).click();
      });
     $('.iparaxify').addClass('paraxify');
   }


  
 
});

// timeline
// (function($){
//     $.fn.timeline = function(){
//       var selectors = {
//         id: $(this),
//         item:$(this).find(".timeline-item"),
//         activeClass: "timeline-item-active",
//         img: "timeline_img"
//       };
//       selectors.item.eq(0).addClass(selectors.activeClass);
//       selectors.id.css(
//         "background-img",
//         "url("+selectors.item
//               .first()
//               .find(selectors.img)
//               .attr("src")+
//               ")"
//       );
//       var itemLength = selectors.item.length;
//       $(window).scroll(function(){
//         var max,min;
//         var pos = $(this).scrollTop();
//         selectors.item.each(function(i){
//           min = $(this).offset().top;
//           var that = $(this);
//           if(i == itemLength -2 && pos > min + $(this).height()/2){
//             selectors.item.removeClass(selectors.activeClass);
//             selectors.id.css(
//               "background-image",
//               "url("+
//               selectors.item
//               .last()
//               .find(selectors.img)
//               .attr("src")+
//               ")"
//             );
//             selectors.item.last().addClass(selectors.activeClass);
//           }else if(pos <= max -40 && pos >= min){
//             selectors.id.css(
//               "background-image",
//               "url("+
//               $(this)
//               .find(selectors.img)
//               .attr("src")+
//               ")"
//             );
//             selectors.item.removeClass(selectors.activeClass);
//             $(this).addClass(selectors.activeClass);

//           } 
          
//         });
//       });

//     };

//   }) (jQuery);
//   $("#timeline-l").timeline();
(function ($) {
    $.fn.timeline = function () {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
      );
      var itemLength = selectors.item.length;
      $(window).scroll(function () {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function (i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" + selectors.item.last().find(selectors.img).attr("src") + ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" + $(this).find(selectors.img).attr("src") + ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);
  
  $("#timeline-1").timeline();
  
  // counter
  $(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


  const scriptURL = 'https://script.google.com/macros/s/AKfycby21G8--oONrQnLJS0DkTEWJaB783lUlY7UN1Edbp6yQYwAwxnTLlU_-oAHDGDkMnbzWw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = "Thank you for Subcribing!"
         setTimeout(function(){
          msg.innerHTML = ""
         },5000)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


