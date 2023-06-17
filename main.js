const nombre=document.querySelector('#nombre');
const enviar=document.querySelector('#enviar');
const resultados=document.querySelector('.resultados');
const fvalida=document.querySelector('.fvalida');
const check1=document.querySelector('#check1');
const check2=document.querySelector('#check2');
const check3=document.querySelector('#check3');
const check4=document.querySelector('#check4');
const check5=document.querySelector('#check5');
const correo=document.querySelector('#correo');
const edad=document.querySelector('#edad');
const telefono=document.querySelector('#telefono');
const cantidad=document.querySelector('#cantidad');
enviar.addEventListener('click',valida_envia);
function valida_envia()
{
//Validar nombres
var s = nombre.value;
var filtro = /^([a-zA-Z\s]{3,10})+$/;
if(!filtro.test(s))
{
    resultados.innerHTML='Introduzca un nombre válido';
    nombre.focus();
    return 0;
}
 //Validación de los check bos
 if(!check1.checked&& !check2.checked&& !check3.checked && !check4.checked && !check5.checked)
 {
 resultados.innerHTML="Debe seleccionar alguna talla";
 return 0;
 }
/* Validación de correo a través de expresiones regulares test valida que la cadena pertenezca al filtro
inicio y fin de una expresión regular /^ expr regular $/ El email se compone de tres partes:
 nombre usuario + @ + servidor + dominio */
 var s = correo.value;
 var filtro = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if (!filtro.test(s))
  {
  resultados.innerHTML='Introduzca un email válido';
  correo.focus();
  return 0;
  }
  var edadV = edad.value;
 edadV = validarEntero(edadV);

 if (edadV=="")
 {
 resultados.innerHTML="Tiene que introducir un número entero en su edad." ;
 edad.focus();
 return 0;
 }else{
 if (edadV<18)
 {
 resultados.innerHTML="Debe ser mayor de 18 años.";
 edad.focus()
 return 0;
 }
 }
 function validarEntero(valor)
 {
 /* Mediante parseInt intentaremos
transformar el valor a número entero.
 Si el dato fue ingresado bien y ya lo
era, no hará nada */
 valor = parseInt(valor)
 /* Se comprobará si el valor es un número
*/
 if (isNaN(valor)) {
 /* Si no lo es, se devuelve una cadena
vacía */
 return "";
 }else{
 /* De lo contrario se devuelve el
número */
 return valor;
 }
 }
 var t = telefono.value;
 var er_tlfono = /^([0-9]{10})+$/;
 //comprueba campo teléfono de formulario
 //usa el método test de expresión regular
 if(!er_tlfono.test(t))
 {
 resultados.innerHTML="Campo telefono no válido.";
 return 0; //no submit
 }
 //cantidad
 var cantidadV = cantidad.value;
 cantidadV = validarEntero(cantidadV);

 if (cantidadV=="")
 {
 resultados.innerHTML="Tiene que introducir un número entero en cantidad." ;
 cantidad.focus();
 return 0;
 }else{
 if (cantidadV<0)
 {
 resultados.innerHTML="Debe ser mayor que cero para realizar su compra.";
 cantidad.focus()
 return 0;
 }
 }
 resultados.style.backgroundColor = 'green';
 resultados.innerHTML="Muchas gracias por enviar el formulario";
 //el formulario se envia usando el método submit() activándolo desde aquí
 function greetings(){ fvalida.submit();}
 //Agregamos un tiempo de espera para simular la que se va la informacion
 setTimeout(greetings, 2000);
}