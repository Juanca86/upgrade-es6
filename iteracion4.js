// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users = [  
	{id: 1, name1: 'Abel'},
	{id:2, name1: 'Julia'},
	{id:3, name1: 'Pedro'},
	{id:4, name1: 'Amanda'}
];
const user = users.map((item) => item.name1 )
console.log(user);
// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users1 = [
	{id: 1, name1: 'Abel'},
	{id:2, name1: 'Julia'},
	{id:3, name1: 'Pedro'},
	{id:4, name1: 'Amanda'}
];
const cambio = users1.map((item)=> {item.name1
    if (item.name1[0] === 'a'.toLocaleLowerCase().toLocaleUpperCase()) {
        item.name1 = 'Anacleto'
    }
    return item.name1
}) 
// console.log(cambio);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const jarto = cities.map(mujarto);
function mujarto(city) {
    let jartisimo = city.name;
    	if(city.isVisited === true) {
    	    jartisimo += ' (Visitado)';
    	}
    return jartisimo;
    }
console.log(jarto);
