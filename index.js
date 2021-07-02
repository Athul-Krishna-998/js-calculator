const number=document.querySelectorAll(".number");
const operand=document.querySelectorAll(".operation");
const input=document.querySelector(".previous");
const output=document.querySelector(".current");
const clear=document.querySelector(".ac");
const equals=document.querySelector(".equals");
const deletion=document.querySelector(".delete");

let currentnum="";
let oldnum="";
let currentoperation="";

number.forEach(function(numbers)
{
     numbers.addEventListener('click',function()
    {
                addNumber(numbers.innerText);
                updateDisplay();
    });
})

operand.forEach(function(operator)
{
     operator.addEventListener('click',function()
    {
                addOperation(operator.innerText);
                updateDisplay();
    });
})

equals.addEventListener('click',compute);
clear.addEventListener('click',clearscreen);
deletion.addEventListener('click',removeal);

function clearscreen()
{
    currentnum="";
    oldnum="";
    currentoperation="";
    updateDisplay();
}

function removeal()
{
    currentnum=currentnum.toString().slice(0, currentnum.length - 1);
    updateDisplay();
}

function addNumber(num)
{
   num=num.toString();
   if(currentnum.includes('.') && num==='.') return;

   currentnum+=num;
}

function addOperation(item)
{
  if(currentnum==='') return;
  if(oldnum!=='')
  {
      compute();
  }
  currentoperation=item;
  oldnum=currentnum;
  currentnum="";
}

function compute()
{
    let result;
    if(currentnum==='' && oldnum==='') return;
    let num1=parseFloat(oldnum);
    let num2=parseFloat(currentnum);
    switch(currentoperation)
    {
        case '+' :
         {
            result=num1+num2;
            break;
         }
         case '-' :
         {
            result=num1-num2;
            break;
         }
         case '÷' :
         {
            result=num1/num2;
            break;
         }
         case '*' :
         {
            result=num1*num2;
            break;
         }
         default:
         break;
    }
    currentnum=result.toString();
    oldnum="";
    currentoperation="";
    updateDisplay();
}

function updateDisplay()
{
    output.innerText=currentnum;
    input.innerText=`${oldnum} ${currentoperation}`;
}