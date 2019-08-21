function preloader(){
	$("#onload").fadeOut(1500);
}

window.addEventListener('load', function(){
	preloader();
});

$(function(){
	$('.filtro').click(function(){
		$(this).addClass('activo').siblings().removeClass('activo');
		var valor = $(this).attr('data-nombre');
		if (valor == 'todos') {
			$('.cont-trabajos').show('1000');
		}else{
			$('.cont-trabajos').not('.'+valor).hide('1000');
			$('.cont-trabajos').filter('.'+valor).show('1000');
		}
	});
});

var equipo = $('#equipo').offset().top, 
	servicio = $('#servicio').offset().top,
	trabajo = $('#trabajo').offset().top,
	contacto = $('#contacto').offset().top;

	$('#enlace-inicio').on('click', function(e){
		$('html, body').animate({scrollTop : 0},600);
	});

	$('#enlace-equipo').on('click', function(e){
		$('html, body').animate({scrollTop : equipo-100},600);
	});

	$('#enlace-servicio').on('click', function(e){
		$('html, body').animate({scrollTop : servicio-100},600);
	});

	$('#enlace-trabajo').on('click', function(e){
		$('html, body').animate({scrollTop : trabajo-100},600);
	});

	$('#enlace-contacto').on('click', function(e){
		$('html, body').animate({scrollTop : contacto-100},600);
	});
