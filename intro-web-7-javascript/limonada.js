//funciones

function exprimirLimon(cantidad){
	console.log("extraer el nectar  de "+cantidad+ " limones")
	
	let zumo=cantidad*10 //10ml por cada limon aprox
	console.log("se obtuvo "+zumo+" ml de jugo de limon")
	return zumo
}
//function para mezclar el jugo  de limon con agua y azucar

function mezclarZumo(zumo,agua,azucar){
	console.log("mezclando "+zumo+" ml de jugo de limon con "+ agua +" ml de agua y"+azucar +" gramos de azucar")
}

function servirBebida(){
	console.log("surviendo la limonada")
	let vasoLimonada=true	
}


//Funcion principal que prepare mi limonada

function prepararLimonadas(cantidadDeLimon){
	let zumo=exprimirLimon(cantidadDeLimon)
	mezclarZumo(zumo,200,10)//cantidades ficticias de jugo de limon agua y azucar
	
	servirBebida()
}

///llamamos a la funcion principla para preparar limonadas

prepararLimonadas(5)


