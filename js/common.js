$('.slider').slick({
	infinite: true,
  dots: true,
	slidesToShow: 5,
  centerMode: true,
	initialSlide: 1,
  centerPadding: '10px',
  focusOnSelect: true,
  arrows: true,
  prevArrow: '<i class="slick-left ion-arrow-left-c"></i>',
  nextArrow: '<i class="slick-right ion-arrow-right-c"></i>',
  
});

//Paralax
$('.parallax-window').parallax({imageSrc: 'img/delivery/delivery-2.png'});



// Google Map

$(function() {
	var myCenter = new google.maps.LatLng(41.878114, -87.629798);
	function initialize() {
		var mapProp = {
		center:myCenter,
		zoom:12,
		scrollwheel:false,
		draggable:false,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map"),mapProp);

	var marker = new google.maps.Marker({
	position:myCenter,
	});
	marker.setMap(map);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
});



/*
	//бесконечность
	infinite: true,
	//кол-во слайдов к показу
	slidesToShow: 5,
	//кол-во слайдов прокрутки за раз
	slidesToScroll: 1,
	//точки прокрутки снизу слайдера
	dots: true,
	//скорость прокрутки
	speed: 300,
	//адаптивная высота, при значении true меняет высоту слайдера по дефолту на высоту самого большого элемента, при false меняет ее при прокрутке
	adaptiveHeight: false,
	//показывает края следующих боковых элементов при значении true
	centerMode: false,
	//показывает слайды с разной шириной при значении true
	variableWidth: false,
	//автопроигрывание слайдера
	autoplay: false,
	//скорость проигрывания
	autoplaySpeed: 1000,
	//fade эффект
	fade: false,
	arrows: true,
	// default ease CSS3 Animation Easing
	//cssEase: ease,
	vertical: false,
  //номер слайда с которого начинается показ
 // initialSlide: 1,
  //Сопротивление при попытки прокрутить карусель, когда дальше нет слайдов и она не зацилена
  edgeFriction: 0.15,
  //Устанавливает фокус на выбранный элемент карусели при клике
  focusOnSelect: true,
  //Включает/выключает способность перелистывания слайдера перетаскиванием мышью
  draggable: true,*/