import html from "./css";


const demo=document.querySelector('#demo')
const demo1=document.querySelector('#demo1')


const player={
    id:undefined,
    n:0,
    time:50,
    string:``,
    map:{

        pause:'.btn_pause',
        play:'.btn_play',
        slow:'.btn_slow',
        normal:'.btn_normal',
        fast:'.btn_fast'
    },


    init:()=>{
       player. id=setInterval(player.run,player.time)
        player.bindEvent()
    },
    bindEvent:()=>{
        for(let key in player.map){
            if(player.map.hasOwnProperty(key)){
                console.log('hi')
                console.log(key)
                document.querySelector(player.map[key]).onclick=player[key]

            }
        }


    },
    run:()=>{
        if(player.n>=html.length){
            player.clear()
            return
        }
        player.string=html.substring(0,player.n)
        demo.innerText=player.string
        demo1.innerHTML=player.string;
        demo.scrollTop=demo.scrollHeight

        player.n+=1;
    },
    clear:()=>{
        window.clearInterval(player.id)
    },
    reset:()=>{
        player.id=setInterval(player.run,player.time)
    },
    play:()=>{

            player.reset()


    }
    ,
    slow:()=>{
        player.clear()
        player.time=100
        player.reset()
    }
    ,normal:()=>{
        player.clear()
        player.time = 50
        player.reset()

    }
    ,fast:()=>{
        player.clear()
        player.time = 0
        player.reset()
    }
    ,pause:()=>{
        player.clear()
        console.log(player.id)
    }



}
player.init()



//
// pause.onclick=()=>{
//    clear()
// }
// play.onclick=()=>{
//     reset()
//
// }
// const reset=()=>{
//
//    id=setInterval(run,time)
// }
// const clear=()=>{
//     window.clearInterval(id)
// }
// slow.onclick=()=>{
//     clear()
//     time=100
//     reset()
// }
// normal.onclick=()=> {
//     clear()
//     time = 50
//     reset()
// }
// fast.onclick=()=> {
//     clear()
//     time = 0
//     reset()
// }




