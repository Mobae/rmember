const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

const Todo = require('../models/Todo.js');
const Tag = require('../models/Tag.js');
const List = require('../models/List.js');

// @ROUTE GET /sort/tag/:tag_name
router.get(
    '/tag/:tag_name',
    auth,
    async (req, res) => {
        const user = req.user;
        const tag_name = req.params.tag_name;
        const tags = await Tag.find({name: tag_name, user: req.user._id});
        const tag = tags[0];
        console.log(tag);
        const todo = await Todo.find({tags: { $elemMatch: { name: req.params.tag_name } } });
        console.log(todo);
        if(tag){
            const todo = await Todo.find({user: req.user._id, tags : { $elemMatch : { name : req.params.tag_name } }});
            console.log(todo);
            res.status(200).json({
                success: true,
                count: todo.length,
                data: todo
            });
        } else {
            res.status(404).json({
                success: false,
                data: {"error": "No tag found !"}
            });
        }
        // try {

        // } catch {
        //     res.status(500).json({
        //         success: false,
        //         data: 'Server error'
        //     });
        // }
    }
)


// @Route GET /sort/list/:list_name

router.get(
    '/list/:list_name',
    auth,
    async (req, res) => {
        const user = req.user;
        const list_name = req.params.list_name;
        const list = await List.find({name: list_name, user: req.user});


        if(list) {
            const todo = await Todo.find({user: req.user._id, list : req.params.list_name });
            console.log(todo);
            res.status(200).json({
                success: true,
                count: todo.length,
                data: todo
            });

        } else {
            res.status(404).json({
                success: false,
                data: {"error" : "No List Found !!" }
            });
        }
    }
)

module.exports = router;
