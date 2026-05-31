
const {createTodo,editTodo,getTodo,getTodoById,deleteTodo} = require("../controllers/createTodo");
const express = require("express");
const router = express.Router();

// Routes 
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/editTodo/:id",editTodo);
router.delete("/deleteTodo/:id",deleteTodo)

module.exports = router;
