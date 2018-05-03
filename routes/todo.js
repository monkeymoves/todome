var express = require('express')

var router = express.Router();
//if requiring a folder , this will then find automatically index.js within
var db = require("../models")
var helpers = require ("../helpers/todos")

// router.get('/' ) appends to /api/todos/ set in server.js 
router.route('/')
.get(helpers.getTodo)
.post(helpers.createTodo)

router.route('/:todoId')
.get(helpers.getTodoId)
.put(helpers.putTodoId)
.delete(helpers.deleteTodoId)



module.exports = router;