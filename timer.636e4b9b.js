parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"XCzN":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./sass/_example.scss");class e{constructor({element:e,intialValue:t=0,step:s=1}){this.value=t,this.step=s,this.refs={decBtn:e.querySelector('button[data-action="decrement"]'),incBtn:e.querySelector('button[data-action="increment"]'),clockface:e.querySelector("div.value")},console.log(this.refs),this.updateclockface(),this.bintEvents()}increment(){this.value+=this.step,this.updateclockface()}decrement(){this.value-=this.step,this.updateclockface()}updateclockface(){this.refs.clockface.textContent=this.value}bintEvents(){this.refs.decBtn.addEventListener("click",this.decrement.bind(this)),this.refs.incBtn.addEventListener("click",this.increment.bind(this))}}new e({element:document.querySelector("#timer-1"),intialValue:10,step:10}),new e({element:document.querySelector("#timer-2"),step:1}),new e({element:document.querySelector("#timer-3"),step:10,intialValue:10});const t=basicLightbox.create('\n\t<h1>ШАБЛОНИЗАТОР ГОТОВЫЙ</h1>\n\t<p>You can set the content of the lightbox with JS.</p>\n    <img src="https://st2.depositphotos.com/1000647/5589/i/600/depositphotos_55895051-stock-photo-biker-girl-riding-on-a.jpg" alt="moto">\n    \n');let s=document.getElementById("pp");s.addEventListener("click",()=>{t.show()});
},{"./sass/main.scss":"clu1","./sass/_example.scss":"clu1"}]},{},["XCzN"], null)
//# sourceMappingURL=/parcel-project-template/timer.636e4b9b.js.map