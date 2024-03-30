import express from "express";
const router = express.Router();
import {
  todoController,
  todoAddController,
  todoUpdateController,
  todoDeleteController,
  todoDeleteManyController,
  singleTodoController,
} from "../Controller/todo.js";
router.get("/todo", todoController);
router.get("/singletodo/:id", singleTodoController);
router.post("/todoadd", todoAddController);
router.put("/todoupdate/:id", todoUpdateController);
router.delete("/tododelete/:id", todoDeleteController);
router.delete("/tododeleteMany", todoDeleteManyController);

export default router;
