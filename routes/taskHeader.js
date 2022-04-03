"use strict";
exports.__esModule = true;
var express_1 = require("express");
var taskHeader_router = (0, express_1.Router)();
var sql = require("../config/db.js");
taskHeader_router.get("/detail/", function (req, res) {
    sql.query("select th_unique_seq, th_task_id, th_task_descr, th_due_date, th_complete_date, th_insert_user, th_insert_date, th_update_user, th_update_date from task_header order by th_task_id ", function (err, result) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json(result);
        }
    });
});
taskHeader_router.get("/detail/:id", function (req, res) {
    sql.query("select th_unique_seq, th_task_id, th_task_descr, th_due_date, th_complete_date, th_insert_user, th_insert_date, th_update_user, th_update_date from task_header  where th_task_id = ?;", req.params.id, function (err, result) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json(result);
        }
    });
});
taskHeader_router.post("/", function (req, res) {
    var taskHdrBody = req.body;
    sql.query("insert into task_header (th_task_id, th_task_descr, th_due_date, th_complete_date, th_insert_user, th_insert_date) values(?, ?, ?, ?, ?, ?);", [
        taskHdrBody.taskId,
        taskHdrBody.taskDescr,
        taskHdrBody.taskDueDate,
        taskHdrBody.taskCompleteDate,
        taskHdrBody.taskInsertUser,
        taskHdrBody.taskInsertDate
    ], function (err, result) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json(result);
        }
    });
});
taskHeader_router.put("/", function (req, res) {
    var taskHdrBody = req.body;
    sql.query("update task_header set th_task_descr = ?, th_due_date = ?, th_complete_date = ?, th_update_user = ?, th_update_date = ? where th_task_id = ?;", [
        taskHdrBody.taskDescr,
        taskHdrBody.taskDueDate,
        taskHdrBody.taskCompleteDate,
        taskHdrBody.taskInsertUser,
        taskHdrBody.taskInsertDate,
        taskHdrBody.taskId
    ], function (err, result) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json(result);
        }
    });
});
taskHeader_router["delete"]("/", function (req, res) {
    var taskHdrBody = req.body;
    sql.query("delete from task_header where th_task_id = ?;", [
        taskHdrBody.taskId
    ], function (err, result) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json(result);
        }
    });
});
/*
taskHeader_router.delete("/", function (req, res) {
  //console.log(req.body);
  var mybody = req.body;
  console.log("deptNo=" + mybody.deptNo);

  sql.query(
    "delete from departments where dept_no = ?;",
    mybody.deptNo,
    function (err, sqlres) {
      if (err) {
        console.log("error: ", err);
        res.send({ error: "message" });
      } else {
        console.log("Success");
        res.send({ success: "success" });
      }
    }
  );
});
*/
module.exports = taskHeader_router;
