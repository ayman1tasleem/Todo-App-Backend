const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

// GET API
router.get('/', async (req, res) => {
    try{
        const getTodo = await Todo.find()
        res.json(getTodo)
    } catch (error) {
         res.status(500).json({msg: "Failed to fetch todos"})
    }
});

// POST API
router.post('/', async (req, res) => {
    try{
        const newTodo = new Todo ({
            text: req.body.text
        })
        await newTodo.save()
       res.status(201).json(newTodo)
    } catch (error) {
        res.status(500).json({msg: "Failed to create todo"})
    }    
});

// PUT API
router.put('/:id', async (req, res) => {
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
            new: true
            }
        )
        
        if(updatedTodo === null){
            res.status(404).json({msg: "Not Found"})
            return
        }

        res.json(updatedTodo)
    } catch (error) {
        res.status(500).json({msg: "Failed to update todo"})
    }
});

// DELETE API
router.delete('/:id', async (req, res) => {
    try{
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id)

        if(deleteTodo === null){
            res.status(404).json({msg: "Not Found"})
            return
        }

        res.json({msg: "Todo Deleted Successfully"})
    } catch (error) {
        res.status(500).json({msg: "Failed to delete todo"})
    }
});

module.exports = router