// import '../css/componets.css';
import webpacklogo from '../assets/img/webpack-logo.png';


export function saludar( nombre ){
    
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, como estas?`;

    document.body.append(h1);

    const img = document.createElement('IMG');
    img.src = webpacklogo;
    document.body.appendChild(img);
}

export function action(mascota){
    const btn = document.querySelector('#btn-action');
    const btnCerrar = document.querySelector('#btn-borrar');
    
    btn.addEventListener('click', function(){
        const h2 = document.createElement('H2');
        h2.innerText = `El nombre de mi mascota es ${mascota}`;
        h2.classList.add('pet');
        document.body.appendChild(h2);
    })

    btnCerrar.addEventListener('click', function(){
        const h2 = document.querySelector('.pet');
        h2.innerText = '';
        h2.remove();
    })


}
