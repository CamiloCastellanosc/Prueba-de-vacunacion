//console.log("hola");

/*sintaxix de un if

const question = prompt('tienes hambre?')
const isYes = question.toUpperCase() === 'SI';

if (isYes) {
    document.write('pide un domicilio');
} else {
    document.write('ponte a trabajar!');
}*/


const age = parseInt( prompt('escribe tu edad'));
const getTown = prompt('vive en un municipio al norte?');

const isAdult = age >= 18;
const isFrontierTown = getTown.toLowerCase()=== 'si';

const gender = prompt('es mujer?');
const pregnancy = prompt('esta embarazada?');
const pregnancyTime = parseFloat( prompt('cuantas semanas ?'));

const isGender = gender.toLowerCase() === 'si';
const isPregnancy = pregnancy.toLowerCase() === 'si'
const isPregnancyTime = pregnancy >= 9;

const thirty = prompt('tiene 30 anios')
const olderThirty = prompt('eres mayor de 30 anios');
const birdayThisYear = prompt('los cumples este anio ?')

let isBirdayThisYear = false;
const isThirty = age === 30;
const isOlderThirty = age > 30;


if (isAdult && isFrontierTown) {
    console.log('te puedes vacunar'); 
}else{
    console.log('no te puedes vacunar');
}





if (isGender && isPregnancy) {
    console.log('te puedes vacunar');   
    
}else if(isPregnancyTime) {
     console.log('te puedes vacunar'); 
     
}else if (isThirty && isBirdayThisYear || isOlderThirty){
    console.log('te puedes vacunar');
}

else{
    console.log('no te puedes vacunar');  
}




