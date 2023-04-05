const btn = document.querySelector('.btn')
const restart = document.querySelector('#restartGame')
const live = document.querySelector('.lives')
let live_num = document.querySelector('.live_num')


restart.addEventListener("click", function(event){
    
    live.innerHTML = 7;
    btn.innerHTML = ""

    for (let i = 1; i <= 250; i++) {
        const button = document.createElement("button");
        btn.appendChild(button);
    }

    const div_txt = document.querySelector('.txt-area');
    div_txt.style.display = 'none';

    




    
})



          

 
