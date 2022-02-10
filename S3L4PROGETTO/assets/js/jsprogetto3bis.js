const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input_button')
const taskList = document.querySelector ('#ToDoList')

inputButton.addEventListener('click', addTask)     //aggiunge task
taskList.addEventListener('click', removeTask)     //rimuove task



function addTask(e) {

   //creare nuovo li e aggiungo classe
    var li = document.createElement('li');
    li.className = 'task';

 li.appendChild(document.createTextNode(taskInput.value)); // creare nuovo textnode  e metterlo dentro il list item


  var link = document.createElement('a');      // creo il link
   link.className="delete-todo"               //aggiungo classe ad <a>
   link.innerHTML = '<h3>x</h3>'             // aggiungo x al <a>
    li.appendChild(link)                     // metto link nel li
    taskList.appendChild(li)                 //metto li dentro ul
    taskInput.value="";                      //ripulisco il campo input dopo ogni click del bottone
}

function removeTask(e){                        //risalgo all'elemento per cancellare il todo tramite la X
    if(e.target.parentElement.classList.contains('delete-todo')){
        e.target.parentElement.parentElement.remove();
    }
}




