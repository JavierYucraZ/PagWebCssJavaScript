var menu = document.getElementById('nav');
var altura = menu.offsetTop;
//console.log(altura);

function pegajoso(){
	if (window.scrollY > altura) {
		menu.classList.add('fijarMenu');
	}else{
		menu.classList.remove('fijarMenu');
	}
}


window.addEventListener('load', function(){
	pegajoso();
});

window.addEventListener('scroll', pegajoso);