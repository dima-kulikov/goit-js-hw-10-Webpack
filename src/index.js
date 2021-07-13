import './sass/main.scss';
import './sass/_example.scss';


class Timer{
    constructor({element, intialValue = 0,step=1}){
    this.value = intialValue;
    this.step = step;
    }

}

new Timer({
    element: document.querySelector('#timer-1'),
    intialValue: 0,
    step: 1,
})
