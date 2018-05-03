
var db = require('../models') 

exports.getTodo = function(request, response){
  // response.send('this is a test')
  db.Todo.find()
  .then(function(todos){
      response.json(todos)
  }).catch(function(err) {response.send(err)})
}

exports.createTodo = function(request, response){
  // response.send("yoyo post")
 // response.send(request.body);
  db.Todo.create(request.body)
  .then(function(newTodo){
    response.status(201).json(newTodo)
  })
  .catch(function(err){
    response.send(err)
  })
}

exports.getTodoId = function(request, response){
  db.Todo.findById(request.params.todoId)
  .then(function(foundTodo){
    response.json(foundTodo)
  })
  .catch(function(err){
    response.send(err);
  })
}

exports.putTodoId = function(request, response){
  db.Todo.findOneAndUpdate({_id: request.params.todoId}, request.body, {new: true} )
  .then(function(todo){
    response.json(todo)
  })
  .catch(function(err){
    response.send(err);
  })
}

exports.deleteTodoId = function(request, response){
  // response.send("deleted"); 
  db.Todo.remove({_id: request.params.todoId})
  .then(function(){
    response.json({message : " We Deleted"})
  })
.catch(function(err){
  response.send(err)
  })
  
  
}

module.exports = exports;