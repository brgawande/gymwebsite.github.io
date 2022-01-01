const router = require("express").Router();
const { db } = require("../models/taskModel");
const taskModel = require("../models/taskModel");
const tasks = require("../models/taskModel");

router.get('/', (req, res) => {
    res.render("index");
});

router.post("/register", (req, res) => {
    const task = req.body.task;
    const email = req.body.email;
    const number = req.body.number;
    const age = req.body.age;
    const gender = req.body.gender;

    const data = {
        "task": task,
        "email": email,
        "number": number,
        "age": age,
        "gender": gender
    }

    db.collection('tasks').insertOne(data, (err, collection) => {
        if(err){
            throw RegExp;
        }
        console.log("Record inserted successfully");
    });
    return res.redirect('/');


})

// router.post("/register", (req, res) => {
//     const task = req.body.task; 
    
//     tasks( {task : task }).save(function(err, data) {
//         if(err){
//             console.log(err);
//         }
//         res.redirect('/');
//     });
    
    
// });




module.exports = router;
