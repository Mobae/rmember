const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

const Todo = require('../models/Todo.js');
const Tag  = require('../models/Tag.js');
const List = require('../models/List.js');


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
            const completed = req.body.completed;
            const list = req.body.list;

            if(tags){  
                for(let i=0; i<tags.length; i++){
                    const tag_name = tags[i].name;
                    let tag_obj = await Tag.find({name: tag_name})
                    tag_obj = tag_obj[0];
                    if(!tag_obj){
                        const new_tag = await Tag.create({user: req.user, name: tag_name});   // Creating a tag if it does not exists
                    }
                }
            }


            const list_name = list.name;
            let list_obj = await List.find({name: list_name})
            if(!list_obj) {
                const new_list = await List.create({user: req.user, name: list_name});  // Creating list if it doesn't exists...
            }

            const payload = {
                user: req.body.user,
                todo: req.body.todo,
                desc: req.body.desc,
                priority: req.body.priority,
                tags: req.body.tags,
                completed: req.body.completed,
                list: req.body.list
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
