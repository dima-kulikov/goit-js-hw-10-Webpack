import * as basiclightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

// для фоток
import Siema from 'siema';

// notyf 
import {Notyf} from 'notyf';
import 'notyf/notyf.min.css';

import './sass/main.scss';
import './sass/_example.scss';
console.log("data");



class Timer{
    constructor({element, intialValue = 0, step=1}){
    this.value = intialValue;
    this.step = step;
    this.refs={
        decBtn:element.querySelector('button[data-action="decrement"]'),
        incBtn:element.querySelector('button[data-action="increment"]'),
        clockface: element.querySelector('div.value'),
    };
    console.log(this.refs);
    this.updateclockface()

    this.bintEvents();
    }

    increment() {
        this.value += this.step;
        this.updateclockface();
    };
    decrement() {
        this.value -= this.step;
        this.updateclockface();
    };

updateclockface(){
    this.refs.clockface.textContent = this.value;
}    

bintEvents() {
    this.refs.decBtn.addEventListener('click', this.decrement.bind(this));
    this.refs.incBtn.addEventListener('click', this.increment.bind(this));
}
};



new Timer({
    element: document.querySelector('#timer-1'),
    intialValue: 10,
    step: 10,

});


new Timer({
    element: document.querySelector('#timer-2'),
    step: 1,
});

new Timer({
    element: document.querySelector('#timer-3'),
    step: 10,
    intialValue: 10,
});


//галерея
// вариант подключения - 1
// const instance = basiclightbox.create(`
// 	<h1>ШАБЛОНИЗАТОР ГОТОВЫЙ</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
//     <img src="https://st2.depositphotos.com/1000647/5589/i/600/depositphotos_55895051-stock-photo-biker-girl-riding-on-a.jpg" alt="moto">
    
// `)

// вариант подключения - 2
const instance = basiclightbox.create(document.querySelector('#modal'));

// работа кнопки
let pp = document.getElementById('pp');

pp.addEventListener('click',()=>{
    instance.show()
});



const mySiema = new Siema();
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
new Siema();



// var notyf = new Notyf();

// Create an instance of Notyf
var notyf = new Notyf();

// Display an error notification
// notyf.error('НЕ ВЫШЛО');

// Display a success notification
// notyf.success('ВСЕ НОРМАС');

let net = document.getElementById('net');
net.addEventListener('click',()=>{
    notyf.error('НЕ ВЫШЛО');
});

let da = document.getElementById('da');
da.addEventListener('click',()=>{
    notyf.success('ВСЕ НОРМАС');
});