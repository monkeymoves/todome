// client-side js
// run by the browser each time your view template is loaded

$(document).ready(function(){

  $.getJSON("/api/todos").then(addTodos)
  
  $('#todoInput').keypress(function(event){
    if(event.which ==13) {
      createTodo();
    }
  });
  
  $('.list').on('click', 'li', function(){
  // alert("CLICK");
    updateTodo($(this));
  })
  
  $('.list').on('click', 'span', function(event){
      event.stopPropagation();
      removeTodo($(this).parent());
  })
  
});

function addTodos(todos){
  todos.forEach((todo)=>{
    addTodo(todo);
  })
}

function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed)
  if(todo.completed){newTodo.addClass("done")}
  $(".list").append(newTodo);  
}

function createTodo(){
  //send request to create a new todo
  let userInput = $("#todoInput").val();
  $.post('/api/todos', {name: userInput})
  .then(function(newTodo){
    $("#todoInput").val('');
    addTodo(newTodo);
  })
  .catch((err)=> {console.log(err)})
}

function removeTodo(todo){


      let clickedId = todo.data('id');
      let deleteUrl = 'api/todos/' + clickedId;
    $.ajax({
      method: 'DELETE',
      url: deleteUrl 
    })
    .then(function(data){
    todo.remove()
    }).catch((err)=>{console.log(err)})
  
}

function updateTodo(todo){
  let updateUrl = 'api/todos/' + todo.data('id');
  let isDone = !todo.data('completed'); 
  let updateData = { completed: isDone}
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
    
  })
  .then(function(updatedTodo){
    todo.toggleClass("done")
    todo.data('completed', isDone);
  })
           
           
}