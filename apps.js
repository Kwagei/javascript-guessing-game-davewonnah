const btn = document.querySelector('.btn');
const restart = document.querySelector('#restartGame');
const live = document.querySelector('.lives');
const live_num = 7;
const div_txt = document.querySelector('.txt-area');

let numArray = [];

restart.addEventListener("click", function(){
    
    btn.innerHTML = "";
    live.innerHTML = `Lives = ${live_num}`
    div_txt.style.display = 'none';
    
    numArray = resetNumArray(100);
    addnum();
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
  const value = event.target.textContent;
  const randomNumber = numArray[Math.floor(Math.random() * numArray.length)];

  if (value == randomNumber) {
    div_txt.style.display = 'block';
    div_txt.textContent = "Congrats you've won!";

    const buttons = document.querySelectorAll('.btn button');
    buttons.forEach(button => {
      if (button.textContent != randomNumber) {
        button.disabled = true;
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
}








  
 
