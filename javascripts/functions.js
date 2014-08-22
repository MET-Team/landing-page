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

    console.log(scrollTop)

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

});