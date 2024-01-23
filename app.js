const countvalue = document.querySelector('#counter');

function increment()
{
// get value from ui since it is in string format we can use parseInt to convert it into int
 let value = parseInt(countvalue.innerText);
//   increment the value
 value=value+1;
 // vapis se value set kr di
 countvalue.innerText=value;
}
const decrement = () =>
{
    let value = parseInt(countvalue.innerText);
    //   increment the value
     value=value-1;
     // vapis se value set kr di
     countvalue.innerText=value;
}
const reset =() =>
{
    let value = parseInt(countvalue.innerText);
    value=0;
    countvalue.innerText=value;

}























