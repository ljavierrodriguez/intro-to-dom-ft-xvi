/* 

BOM (Browser Object Model)

window
alert('Mensaje')
confirm('titulo') // aceptar y cancelar // retorna true o false
prompt('Titilo', 'mensaje') // Capturar valores

DOM (Document Object Model) // document

getElementById('id') // retornar el elemento con el id indicado {}
getElementsByClassName('class') // retorna un conjunto de elementos segun la clase estipulada []
getElementsByName('name') // retorna un conjunto de elementos segun valor del atributo name []
getElementsByTagName('tag') // retorna un conjunto de elementos segun el nombre de la etiquita o elemento dado []


querySelector('selector') // retorna el elemento con el selector dado // Selector de css para acceder al elemento
querySelectorAll('selector') // retorna un conjunto de elementos con el selector dado // Selector de css para acceder a los elementos


createElement('tag') // crea un elemento del tipo dado
createTextNode('texto') // crea elemento de texto

*/


document.getElementById('hola').innerHTML = "Hola Mundo";

let div = document.getElementById('hola');
div.innerHTML = "Hola Mundo 2da parte";
div.classList.add('texto');
/* div.style.color = "red";
div.style.textTransform = 'uppercase';
div.style.fontSize = '20px'; */


//let list = document.getElementsByClassName('list-group-item');
/* for(let item of list){
    item.classList.add('texto');
} */

/* for(let i = 0; i < listlength; i++){
    list[i].classList.add('texto');
} */

let ulList = document.querySelector('.list-group');

let li = document.createElement('li');
li.classList.add('list-group-item', 'hola');

let texto = document.createTextNode('Hola Mundo');
li.appendChild(texto);

ulList.appendChild(li);

let list = document.querySelectorAll('.list-group-item');

list.forEach(item => {
    item.classList.remove('hola');
    item.classList.add('texto', 'texto2');
});


let inputName = document.querySelector('#name');
inputName.classList.add('form-control')
inputName.placeholder = "Prueba desde javascript"
document.body.removeChild(inputName);
console.log(inputName.value)
console.log(inputName.placeholder)


let inputName2 = document.querySelector('#name');
console.log(inputName2.value)

