let screen=document.getElementById('screen');
let buttons=document.getElementById('button');
let screenValue='';
for(item of buttons){
item.addEventListener('click',(e)=>{
    buttonText=e.target.innerText;
    console.log('Button text is',buttonText);
    if(buttonText=='x'){
        buttonText='*';
        screenValue += buttonText;
        Screen.value=screenValue;
    }
    else if(buttonText=='c'){
        screenValue='';
        screen.value=screenValue;
    }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value=screenValue;
        }
    
})
}