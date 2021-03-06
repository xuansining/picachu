const html = `
*{padding: 0;margin: 0;box-sizing: border-box;}
       
body{
    background-color: #fee433;
}
.skin{
    position: relative;
    height: 50vh;
    background-color: #fee433;
}

.triangle{
    position: relative;
    width: 15px;
    height: 15px;
    border: 15px solid #000;
    border-color: #000 transparent yellow transparent;
    border-bottom: none;
    top: 100px;
    left: 50%;
    margin-left: -12px;
}
.round{
    position: absolute;
    width: 28px;
    height: 10px;
    background-color: #000;
    
    left: -14px;
    top: -24px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    
}
@keyframes ware {
    0%{transform: rotate(0deg)}
    33%{transform: rotate(10deg)}
    66%{transform: rotate(-10deg)}
    100%{transform: rotate(0deg)}
}
.triangle:hover{
    transform-origin: bottom center;
    animation: ware 300ms infinite linear;
}
.eyes .left,.eyes .right{
    position: relative;
   background-color: #2e2e2e;
    width: 80px;
    height: 80px;
    border: 5px solid #000;
    left: 50%;
    margin-left: -25px;
    border-radius: 40px;
    top: 40px;
}
.eyes .left{
    
    
   transform: translateX(-180px);
}
.eyes .right{
    
   
   transform: translateX(160px) translateY(-80px);
   
}
.eyes .left::before,.eyes .right::before{
    top: 1px;
    left: 4px;
    position: absolute;
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #2e2e2e;
    border-radius: 20px;
}
.mouth{
    position: relative;
    top:-40px;
    width:200px;
    height: 200px;
    left: 50%;
    margin-left: -98px;

}
.mouth .upperlip{
    position: relative;
    top: 8px;
    z-index: 1;
}
.mouth .upperlip .left,.mouth .upperlip .right{
    position: absolute;
    top:0px;
    width: 100px;
    height: 30px;
    border: 5px solid black;
    border-top-color: transparent;
    background-color: #fee433;
    border-top: none;
}
.mouth .upperlip .left{
    left: 5px;
    border-radius: 0 0 0 30px;
    transform: rotateZ(-25deg);
}

.mouth .upperlip .right{
    z-index: 2;
    right: 1px;
    border-radius: 0 0 30px 0;
    transform: rotateZ(25deg);
}
.mouth .upperlip .left::before,.mouth .upperlip .right::before{
    content: '';
    position: absolute;
    width: 9px;
    height: 32px;
    background-color: #fee433;
}
.mouth .upperlip .left::before{
    right: -7px;
    bottom: -5px;
}

.mouth .upperlip .right::before{
    left: -7px;
    bottom: -1px;

}
.mouth .downlip {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 9px;
    overflow: hidden;
}
.mouth .downlip .round1 {

    position: absolute;
    width: 100px;
    height: 400px;
    border: 3px solid black;
    bottom: 50px;
    border-radius: 100px/300px;
    left: 50%;
    /*background-color: #990513;*/
    margin-left: -50px;
    z-index: 0;
    overflow: hidden;
    background-color: #990513;
}
.mouth .downlip .round1 .round2{
    z-index: 3;
    position: absolute;
    bottom:-40px;
    width: 100px;
    height: 150px;
    left: -3px;
    border-radius: 140px/200px;
    background-color: #fc4a62;
}
.face .left,.face .right{
    top:180px;
    position: absolute;
    border: 3px solid #000;
    width: 88px;
    height: 88px;
    left: 50%;
    margin-left: -44px;
    border-radius: 50%;
    background-color: #fc0d1c;
}
.face .right{
    transform: translateX(200px);
}
.face .left{
    transform: translateX(-200px);
}
`
export default html