
const todo = [{
  nitsumor : 'ekome',
  date : '10-10-1990'
}];
renderTodo();

function addTodo () {
  const inputElement = document.querySelector('.Text-entered');

  const name = inputElement.value;

  const inputDate = document.querySelector('.js-select-date');

  const DueDate = inputDate.value;

  /*
  when an object property is the same as the variable name,
  we can declare it once using just the object property or just the variable name.
  */
  todo.push({
    //name : name, --> name
    //DueDate : DueDate --> Duedate
    nitsumor : name,
    date : DueDate
  });
  inputElement.value = '';
  renderTodo();
  
}



function renderTodo () {
let todoList = '';

for (let i = 0; i < todo.length; i++){
  const taskObject = todo[i];
  const name = taskObject.nitsumor;
  //const date = taskObject.date;

  /* below format of code is called destructuring,
  it can be used when the property inside the Object
  is the same as the variablel name being declared.
   this declaration can take multiple values iff the 
   object property is also the same as the name being declared. 
   e.g const item = {
    price : 12,
    quantity : '',
    size : ''
   }
   we can declare another variable later as 
   const { price,quantity,size } = item;*/
  const { date } = taskObject;
  const html = `
  <p>${name} ${date}
    <button onclick = "todo.splice(${i},1);
      renderTodo();
      console.log(todo);">
      Delete
    </button>
    </p>`;
  todoList += html;
  const chores = document.querySelector('.js-to-do');
  chores.innerHTML = todoList;
}
}



/*
function getLastValue () {
const myArray = [10,20,30,40,50,60];
myArray[5] = 100;
for (i=0; i < myArray.length; i++){
  const last = myArray.length -1;
  const output = myArray[last];
  return output;
}
}
*/

