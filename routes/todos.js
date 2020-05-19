const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

const Todo = require('../models/Todo.js');



// @ROUTE POST /todo
router.post(
    '/',
    auth,
    async (req, res) => {
        try {
            const user = req.user;
            req.body['user'] = user._id;
            const todo = req.body.todo;
            const desc = req.body.desc;
            const priority = req.body.priority;
            const tags = req.body.tags;

            const payload = {
                user: req.body.user,
                todo: req.body.todo,
                desc: req.body.desc,
                priority: req.body.priority,
                tags: req.body.tags
            };
            const newTodo = await Todo.create(payload);

            res.status(200).json({
                success: true,
                data: newTodo
            });
        } catch {
            res.status(500).json({
                success: false,
                data: 'Server error'
            });
        }
    }
);

// @ROUTE GET /todo/
router.get(
    '/',
    auth,
    async (req, res) => {
        try {
            const user = req.user;
            const todos = await Todo.find({user: user._id});

            res.status(200).json({
                success: true,
                count: todos.length,
                data: todos
            });
        } catch {
            res.status(500).json({
                success: false,
                data: 'Server error'
            });
        }
    }
)

// @ROUTE  DELETE /todo/:id
router.delete(
    '/:id',
    auth,
    async (req, res) => {
        try{
            const todo = await Todo.findById(req.params.id);
            if(!todo) {
                res.status(404).json({
                    success: false,
                    data: 'No todo found !'
                });
            }
            await todo.remove();

            return res.status(200).json({
                success: true,
                data: {}
            });
        } catch {
            res.status(500).json({
                success: false,
                data: 'Server error'
            });
        }
    }
)

module.exports = router;








// const express = require('express');
// const router = express.Router();

// const { getTodos, addTodo, deleteTodo } = require('../controllers/todos.js');


// router.route('/')
//     .get(getTodos)
//     .post(addTodo);

// router.route('/:id')
//     .delete(deleteTodo);

// module.exports = router;
