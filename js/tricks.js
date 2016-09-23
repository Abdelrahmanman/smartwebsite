$(function () {
    'use strict';
    // add active class to links
    $("ul li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		})

    // nice scroll with navbr links
    $('.nav li a').click(function () {
    $('html, body').animate({
    scrollTop : $('#' + $(this).data('value')).offset().top}, 1000);
    });

    // btn to back to top
    $(window).scroll(function(){
			if($(this).scrollTop()>=400)
				{$(".btntop").slideDown(1000);}
			else
				{$(".btntop").slideUp(1000);}
		})

    $('.btntop').click(function(){
    $('html,body').animate({scrollTop : 0},1000);
    })

    $('.xspan').click(function(){
      $('#about').slideUp(500, function(){
        $('.fade').hide(500,function(){
          $('body').removeClass('modal-open')
        })
      });
    })

    $('.xspann').click(function(){
      $('#contact').slideUp(500, function(){
        $('.fade').hide(500,function(){
          $('body').removeClass('modal-open')
        })
      });
    })

    $(window).scroll(function(){
			if($(this).scrollTop() == $('.skills').offset())
				{
          $('.skills').addClass('bounceInUp');
        }
			})


    $(window).load(function(){
		    $(".spinner").fadeOut(3000);

		    })

        $('.btn-show').click(function(){
            $('.show-more').fadeToggle(2000);
            $(this).hide();
        })

    })
