CREATE SCHEMA taskmanager;

CREATE TABLE task_header (
  th_unique_seq int NOT NULL AUTO_INCREMENT,
  th_task_id int NOT NULL,
  th_task_descr varchar(100) NOT NULL,
  th_due_date date DEFAULT NULL,
  th_complete_date date DEFAULT NULL,
  th_insert_user varchar(32) DEFAULT NULL,
  th_insert_date date DEFAULT NULL,
  th_update_user varchar(32) DEFAULT NULL,
  th_update_date date DEFAULT NULL,
  PRIMARY KEY (th_unique_seq),
  KEY idx_task_header1 (th_task_id)
);

CREATE TABLE task_item (
  ti_unique_seq int NOT NULL AUTO_INCREMENT,
  ti_task_id int NOT NULL,
  ti_task_item_id int NOT NULL,
  ti_task_item_descr varchar(100) NOT NULL,
  ti_due_date date DEFAULT NULL,
  ti_complete_date date DEFAULT NULL,
  ti_insert_user varchar(32) DEFAULT NULL,
  ti_insert_date date DEFAULT NULL,
  ti_update_user varchar(32) DEFAULT NULL,
  ti_update_date date DEFAULT NULL,
  PRIMARY KEY (ti_unique_seq),
  KEY idx_task_item1 (ti_task_id,ti_task_item_id)
);