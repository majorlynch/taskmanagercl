import {Request, Response, Router} from "express";

const taskItem_router: Router = Router();

var sql = require("../config/db.js");
 
taskItem_router.get("/detail/", function (req: Request, res: Response) {
  sql.query(
    "select ti_unique_seq, ti_task_id, ti_task_item_id, ti_task_item_descr, ti_due_date, ti_complete_date, ti_insert_user, ti_insert_date, ti_update_user, ti_update_date from task_item order by ti_task_id ",
    (err: any, result: any ) => {
      if (err) {
        res.status(500).json(err);

      } else {
        console.log("Success");
          res.status(200).json(result);
      }
    }
  );
});

taskItem_router.get("/detail/:id", function (req: Request, res: Response) {
    sql.query(
      "select ti_task_id, ti_task_item_id, ti_task_item_descr, ti_due_date, ti_complete_date, ti_insert_user, ti_insert_date, ti_update_user, ti_update_date from task_item where ti_task_id = ?;",
      req.params.id,
      (err: any, result: any ) => {
        if (err) {
          res.status(500).json(err);
  
        } else {
          console.log("Success");
            res.status(200).json(result);
        }
      }
    );
  });

taskItem_router.post("/", function (req, res) {
    var taskItemBody = req.body;
  
    sql.query(
      "insert into task_item (ti_task_id, ti_task_item_id, ti_task_item_descr, ti_due_date, ti_complete_date, ti_insert_user, ti_insert_date) values(?, ?, ?, ?, ?, ?, ?);",
      [taskItemBody.taskId, taskItemBody.taskItemId, taskItemBody.taskItemDescr, taskItemBody.taskItemDueDate, taskItemBody.taskItemCompleteDate, taskItemBody.taskInsertUser, taskItemBody.taskInsertDate],
      (err: any, result: any ) => {
        if (err) {
          res.status(500).json(err);
        } else {
          console.log("Success");
            res.status(200).json(result);
        }
      }
    );
  });

  taskItem_router.put("/", function (req, res) {
    var taskItemBody = req.body;
    console.log(taskItemBody);

    sql.query(
      "update task_item set ti_task_item_descr = ?, ti_due_date = ?, ti_complete_date = ?, ti_update_user = ?, ti_update_date = ? where ti_task_id = ? and ti_task_item_id = ?;",
      [
        taskItemBody.taskItemDescr,
        taskItemBody.taskItemDueDate,
        taskItemBody.taskItemCompleteDate,
        taskItemBody.taskUpdateUser,
        taskItemBody.taskUpdateDate,
        taskItemBody.taskId,
        taskItemBody.taskItemId
      ],
      (err: any, result: any ) => {
        if (err) {
          res.status(500).json(err);
        } else {
          console.log("Success");
            res.status(200).json(result);
        }
      }
    );
  });

  
taskItem_router.delete("/", function (req, res) {
    var taskItemBody = req.body;
  
    sql.query(
      "delete from task_item where ti_task_id = ? and ti_task_item_id = ?;",
      [
        taskItemBody.taskId,
        taskItemBody.taskItemId
      ],
      (err: any, result: any ) => {
        if (err) {
          res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
      }
    );
  });

  
module.exports = taskItem_router;
