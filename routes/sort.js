const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

const Todo = require('../models/Todo.js');
const Tag = require('../models/Tag.js');

// @ROUTE GET /sort/:tag_name
router.get(
    '/:tag',
    auth,
    async (req, res) => {

        try {
            const user = req.user;
            const tag_name = req.params.tag;
            const tags = await Tag.find({name: tag_name});
            const tag_id = tags[0]._id;

            const todo = await Todo.find({user: req.user._id, tags : { $elemMatch : { name : tag_id } }});

            res.status(200).json({
                success: true,
                count: todo.length,
                data: todo
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
