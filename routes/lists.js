const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

const List = require('../models/List.js');

//@Rourte Get / List
router.get(
    '/',
    auth,
    async (req,res) => {
        try {
            const user = req.user;
            const lists = await List.find({user : req.user._id});

            res.status(200).json({
                success: true,
                count: lists.length,
                data: lists
            });
        } catch {
            res.status(500).json({
                success: false,
                data: 'Server error'
            });
        }
    }
);

// @ Routre POST/ list
router.post (
    '/',
    auth,
    async (req, res) => {
        try {
            const user = req.user;
            req.body['user'] = user._id;
            const list = await List.create(req.body);
            res.status(200).json({
                success: true,
                data: list 
            });

        } catch {
            res.status(500).json({
                success: false,
                data: 'Server error'
            });
        }
    }
);

// @route DELETE /:id
router.delete(
    '/:id',
    auth,
    async (req, res) => {
        try {
            const list = await List.findById(req.params.id);
            if(!list) {
                res.status(404).json ( {
                    success: false,
                    data: 'No data Found !!' 
                });

            }
            await list.remove();

            return res.status(200).json({
                success: true,
                data: {}
            });
        } catch {
            res.status(500).json({
                success: false,
                data: 'Server Error !!'
            });
        }
    }
);

module.exports = router;