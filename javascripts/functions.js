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

  prepareMainSlide();

  ymaps.ready(prepareMap);

  $(window).resize(function(){
    prepareMainSlide();
  });

  $('.call-order input').click(function(){
    $("html, body").animate({
      scrollTop: $(".section-contacts").offset().top
    }, 800);
  });

});