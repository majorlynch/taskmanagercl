import {Request, Response, Router} from "express";

const taskHeader_router: Router = Router();

var sql = require("../config/db.js");
 
taskHeader_router.get("/detail/", function (req: Request, res: Response) {
  sql.query(
    "select th_unique_seq, th_task_id, th_task_descr, th_due_date, th_complete_date, th_insert_user, th_insert_date, th_update_user, th_update_date from task_header order by th_task_id ",
    (err: any, result: any ) => {
      if (err) {
        res.status(500).json(err);

      } else {
          res.status(200).json(result);
      }
    }
  );
});

taskHeader_router.get("/detail/:id", function (req: Request, res: Response) {
  sql.query(
    "select th_unique_seq, th_task_id, th_task_descr, th_due_date, th_complete_date, th_insert_user, th_insert_date, th_update_user, th_update_date from task_header  where th_task_id = ?;",
    req.params.id,
    (err: any, result: any ) => {
      if (err) {
        res.status(500).json(err);
      } else {
          res.status(200).json(result);
      }
    }
  );
});

taskHeader_router.post("/", function (req, res) {
  var taskHdrBody = req.body;

  sql.query(
    "insert into task_header (th_task_id, th_task_descr, th_due_date, th_complete_date, th_insert_user, th_insert_date) values(?, ?, ?, ?, ?, ?);",
    [
      taskHdrBody.taskId,
      taskHdrBody.taskDescr,
      taskHdrBody.taskDueDate,
      taskHdrBody.taskCompleteDate,
      taskHdrBody.taskInsertUser,
      taskHdrBody.taskInsertDate
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

taskHeader_router.put("/", function (req, res) {
  var taskHdrBody = req.body;
  sql.query(
    "update task_header set th_task_descr = ?, th_due_date = ?, th_complete_date = ?, th_update_user = ?, th_update_date = ? where th_task_id = ?;",
    [
      taskHdrBody.taskDescr,
      taskHdrBody.taskDueDate,
      taskHdrBody.taskCompleteDate,
      taskHdrBody.taskInsertUser,
      taskHdrBody.taskInsertDate,
      taskHdrBody.taskId
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

taskHeader_router.delete("/", function (req, res) {
  var taskHdrBody = req.body;

  sql.query(
    "delete from task_header where th_task_id = ?;",
    [
      taskHdrBody.taskId
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

module.exports = taskHeader_router;
