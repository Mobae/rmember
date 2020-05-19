const Todo = require('../models/Todo.js');

const jwt = require('jsonwebtoken');
const secretKey = 'secretKey';

exports.getTodos = async (req, res, next) => {
    // try{
    //     const todos = await Todo.find();

    //     return res.status(200).json({
    //         success: true,
    //         count: todos.length,
    //         todos: todos
    //     });
    // } catch {
    //     return res.status(500).json({
    //         success: false,
    //         error: 'Server error'
    //     });
    // }
    res.send("GET Todos");
}

exports.addTodo = [extractToken], async (req, res, next) => {
    // res.send("Add Todo");
    try {
        res.send(req.token);
        // const token = extractToken(req.headers['authorization']);
        // if (typeof token !== null){
        //     jwt.verify(token, secretKey, (err, decoded) => {
        //         if(err) {
        //             console.log(err);
        //             return null;
        //         } else {
        //             user_id = decoded.user._id;

        //         };
        //     });
        // }
    } catch {

    }
}

exports.deleteTodo = async (req, res, next) => {
    res.send(`Delete todo ${req.params.id}`);
}


// function extractUser(token) {
//     jwt.verify(token, secretKey, (err, decoded) => {
//         if(err) {
//             console.log(err);
//             return null;
//         } else {
//             user = decoded.user;
//             userj = JSON.strigify(user);
//             console.log("weeeeee");
//             console.log(userj);
//         };
//     });
// };

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
