$(function(){
  function prepareMainSlide(){
    var wHeight = $(window).height();
    $('.section-main').css({
      height: wHeight
    });
  }

  function prepareMap(){
    var map = new ymaps.Map("map-canvas", {
      center: [56.835776, 60.594703],
      zoom: 18,
      scrollZoom: false
    });

    var myPlacemark = new ymaps.Placemark([56.835776, 60.594703]);
    map.geoObjects.add(myPlacemark);
  }

  function prepareActiveScrollItem(){
    var scrollTop = $(document).scrollTop(),
      activeScrollItemOffset = 0;

    if(scrollTop >= 550){
      activeScrollItemOffset = 0;
    }else if(scrollTop <= 200 || scrollTop == 0) {
      activeScrollItemOffset = -365;
    }else if(scrollTop >= 200 && scrollTop <= 550){
      activeScrollItemOffset = parseInt($('.page-section.section-slider .slider-item.active').css('top')) + 50;
    }

    $('.page-section.section-slider .slider-item.active').css({
      top: activeScrollItemOffset
    });
  }

  function hideUrlBar() {
    if (window.pageYOffset==0) {
      window.scrollTo(0, 1);
      setTimeout(function() { hideUrlBar(); }, 3000);
    }
  }

  function prepare3DObjects(){
    $('.section-slider .slider-list .slider-item').each(function(){
      var index = $(this).index();
      $(this).find('.obj-container').attr('id', "3d-"+ index);

      obj = new object2vrPlayer("3d-"+ index);
      skin = new object2vrSkin(obj);

      obj.readConfigUrl("3d/"+ index +"/html_out.xml");

      hideUrlBar();
    });
  }

  prepareMainSlide();

  $('.section-slider .slider-content').jCarouselLite({
    listContent: $('.section-slider .slider-list'),
    listItem: $('.section-slider .slider-list .slider-item'),
    circular: false,
    btnNext: ".slider-prev",
    btnPrev: ".slider-next",
    visible: 1,
    start: 1,
    slideItemNavigation: true
  });

  prepare3DObjects();

  prepareActiveScrollItem();
  ymaps.ready(prepareMap);

  $('.page-section.section-slider .slider-item.active').css({
    top: -365
  });

  $(window).resize(function(){
    prepareMainSlide();
  });

  $('.call-order input').click(function(){
    $("html, body").animate({
      scrollTop: $(".section-contacts").offset().top
    }, 800);
  });

  $(document).scroll(function(){
    prepareActiveScrollItem();
  });

//  $('.section-slider .slider-list .slider-item.active .obj-container').hover(function(){
//    $(this).parent().find('.footer').fadeOut(300);
//  },function(){
//    $(this).parent().find('.footer').fadeIn(300);
//  });

});