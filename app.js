

let check = true;

let bulbonoff = ()=>{
    if(check){
        check=false;
        document.getElementById('img').src = './bulb on.png'
        let bg_color = document.getElementsByTagName('body')
        let btn_color = document.getElementsByTagName('button')
        for(let i =0; i<bg_color.length; i++){
            for(let a = i; a<btn_color.length; a++){
                bg_color[i].style.backgroundColor= 'white'
                btn_color[a].className = 'btn'
            }
                }
        
    }else{
        check=true;
        document.getElementById('img').src = './bulb off.png'
        let bg_color = document.getElementsByTagName('body')
        let btn_color = document.getElementsByTagName('button')
        for(let i =0; i<bg_color.length; i++){
            for(let a = i; a<btn_color.length; a++){
             bg_color[i].style.backgroundColor='black'
             btn_color[a].className = ''
            }
        }
    }
}




















// var check = true;



// function bulbonoff(){

//     if(check){
//         check = false;
//         document.querySelector('button').innerHTML = 'ON/OFF'
//         document.getElementById('img').src = ''
//     }
//     else{
//         document.getElementById('img').src = './bulb on.png'
//         document.querySelector('button').innerHTML = 'ON/OFF'

//         check = true;
//     }

// }




