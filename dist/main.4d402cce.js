parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n*{padding: 0;margin: 0;box-sizing: border-box;}\nbody{\n    background-color: #fee433;\n}\n.skin{\n    position: relative;\n    height: 50vh;\n    background-color: #fee433;\n}\n\n.triangle{\n    position: relative;\n    width: 15px;\n    height: 15px;\n    border: 15px solid #000;\n    border-color: #000 transparent yellow transparent;\n    border-bottom: none;\n    top: 100px;\n    left: 50%;\n    margin-left: -12px;\n}\n.round{\n    position: absolute;\n    width: 28px;\n    height: 10px;\n    background-color: #000;\n    \n    left: -14px;\n    top: -24px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    \n}\n@keyframes ware {\n    0%{transform: rotate(0deg)}\n    33%{transform: rotate(10deg)}\n    66%{transform: rotate(-10deg)}\n    100%{transform: rotate(0deg)}\n}\n.triangle:hover{\n    transform-origin: bottom center;\n    animation: ware 300ms infinite linear;\n}\n.eyes .left,.eyes .right{\n    position: relative;\n   background-color: #2e2e2e;\n    width: 80px;\n    height: 80px;\n    border: 5px solid #000;\n    left: 50%;\n    margin-left: -25px;\n    border-radius: 40px;\n    top: 40px;\n}\n.eyes .left{\n    \n    \n   transform: translateX(-180px);\n}\n.eyes .right{\n    \n   \n   transform: translateX(160px) translateY(-80px);\n   \n}\n.eyes .left::before,.eyes .right::before{\n    top: 1px;\n    left: 4px;\n    position: absolute;\n    content: '';\n    display: block;\n    width: 40px;\n    height: 40px;\n    background-color: #fff;\n    border: 1px solid #2e2e2e;\n    border-radius: 20px;\n}\n.mouth{\n    position: relative;\n    top:-40px;\n    width:200px;\n    height: 200px;\n    left: 50%;\n    margin-left: -98px;\n\n}\n.mouth .upperlip{\n    position: relative;\n    top: 8px;\n    z-index: 1;\n}\n.mouth .upperlip .left,.mouth .upperlip .right{\n    position: absolute;\n    top:0px;\n    width: 100px;\n    height: 30px;\n    border: 5px solid black;\n    border-top-color: transparent;\n    background-color: #fee433;\n    border-top: none;\n}\n.mouth .upperlip .left{\n    left: 5px;\n    border-radius: 0 0 0 30px;\n    transform: rotateZ(-25deg);\n}\n\n.mouth .upperlip .right{\n    z-index: 2;\n    right: 1px;\n    border-radius: 0 0 30px 0;\n    transform: rotateZ(25deg);\n}\n.mouth .upperlip .left::before,.mouth .upperlip .right::before{\n    content: '';\n    position: absolute;\n    width: 9px;\n    height: 32px;\n    background-color: #fee433;\n}\n.mouth .upperlip .left::before{\n    right: -7px;\n    bottom: -5px;\n}\n\n.mouth .upperlip .right::before{\n    left: -7px;\n    bottom: -1px;\n\n}\n.mouth .downlip {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    top: 9px;\n    overflow: hidden;\n}\n.mouth .downlip .round1 {\n\n    position: absolute;\n    width: 100px;\n    height: 400px;\n    border: 3px solid black;\n    bottom: 50px;\n    border-radius: 100px/300px;\n    left: 50%;\n    /*background-color: #990513;*/\n    margin-left: -50px;\n    z-index: 0;\n    overflow: hidden;\n    background-color: #990513;\n}\n.mouth .downlip .round1 .round2{\n    z-index: 3;\n    position: absolute;\n    bottom:-40px;\n    width: 100px;\n    height: 150px;\n    left: -3px;\n    border-radius: 140px/200px;\n    background-color: #fc4a62;\n}\n.face .left,.face .right{\n    top:180px;\n    position: absolute;\n    border: 3px solid #000;\n    width: 88px;\n    height: 88px;\n    left: 50%;\n    margin-left: -44px;\n    border-radius: 50%;\n    background-color: #fc0d1c;\n}\n.face .right{\n    transform: translateX(200px);\n}\n.face .left{\n    transform: translateX(-200px);\n}\n",o=n;exports.default=o;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=n(require("./css"));function n(e){return e&&e.__esModule?e:{default:e}}var t=document.querySelector("#demo"),r=document.querySelector("#demo1"),o={id:void 0,n:1,time:50,string:"",map:{pause:".btn_pause",play:".btn_play",slow:".btn_slow",normal:".btn_normal",fast:".btn_fast"},init:function(){o.id=setInterval(o.run,o.time),o.bindEvent()},bindEvent:function(){for(var e in o.map)o.map.hasOwnProperty(e)&&(console.log("hi"),console.log(e),document.querySelector(o.map[e]).onclick=o[e])},run:function(){o.n>=e.default.length?o.clear():(o.string=e.default.substring(0,o.n),t.innerText=o.string,document.getElementById("demo1")&&(r.innerHTML=o.string),t.scrollTop=t.scrollHeight,o.n+=1)},clear:function(){window.clearInterval(o.id)},reset:function(){o.id=setInterval(o.run,o.time)},play:function(){o.reset()},slow:function(){o.clear(),o.time=100,o.reset()},normal:function(){o.clear(),o.time=50,o.reset()},fast:function(){o.clear(),o.time=0,o.reset()},pause:function(){o.clear(),console.log(o.id)}};o.init();
},{"./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.4d402cce.js.map