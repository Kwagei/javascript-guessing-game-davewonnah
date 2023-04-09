const btn = document.querySelector('.btn');
const restart = document.querySelector('#restartGame');
const live = document.querySelector('.lives');
let live_num = 7;
const div_txt = document.querySelector('.txt-area');

let numArray = [];
let randomNumber = Math.floor(Math.random() * 100);



restart.addEventListener("click", function(){
    
    btn.innerHTML = "";
    live.innerHTML = `Lives = ${live_num}`
    div_txt.style.display = 'none';
    
    numArray = resetNumArray(100);
    addnum();
    randomNumber = Math.floor(Math.random() * numArray.length)
})
     
function addnum() {
    const num = shuffle([...numArray]);
  
    for (let i = 0; i < num.length; i++) {
      const button = document.createElement("button");
      button.textContent = num[i];
      button.addEventListener("click", handleClick);
      btn.appendChild(button);


    }
  
    console.log(numArray);
}

function resetNumArray(numCount) {
  const nums = [];
  for (let i = 1; i <= numCount; i++) {
    nums.push(i);
  }
  return nums;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random_num = Math.floor(Math.random() * (i + 1));
    [array[i], array[random_num]] = [array[random_num], array[i]];
  }
  return array;
}


function handleClick(event) {
  const value = Number(event.target.textContent);
  // const live_value = Number(live.target.textContent);

  console.log({value, randomNumber})

  if (value == randomNumber) {
    div_txt.style.display = 'block';
    div_txt.textContent = "Congrats you've won!";

    const buttons = document.querySelectorAll('.btn button');

    buttons.forEach(button => {
      if (button.textContent != randomNumber) {
        button.disabled = true;
        button.style.backgroundColor = 'red'
      }
    });

  } else if(value < randomNumber) {
    div_txt.style.display = 'block';
    div_txt.textContent = "Guess too low!";
  } else if(value > randomNumber){
    div_txt.style.display = 'block';
    div_txt.textContent = "Guess too high";
  }

  if (value != randomNumber) {
    event.target.disabled = true;
    event.target.classList.add('incorrect');
  } else if (value == randomNumber) {
    event.target.disabled = true;
    event.target.classList.add('correct');
  }

  if (value !== randomNumber) {

    live_num = live_num-1;
    live.textContent = `Lives = ${live_num}`;
  }
  // else if (live_value === 0){
  //   div_txt.textContent = "Game over!!!";
  // }
  // console.log(live_value)
  
}








  
 
