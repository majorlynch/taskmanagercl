const request = require('supertest');
const app = require('../app');

//test task header
test('Should retrieve task header list', async () => {
    await request(app).get('/taskHeader/detail').send().expect(200);
});


test('Should insert a task header', async () => {
    await request(app).post('/taskHeader').send({
        "taskId": 4,
        "taskDescr": "Fourth task header insert",
        "taskDueDate": "2022-04-01",
        "taskCompleteDate": "2022-04-01",
        "taskInsertUser": "CLYNCH",
        "taskInsertDate": "2022-04-01"
        }).expect(200);
});

test('Should update a task header', async () => {
    await request(app).put('/taskHeader').send({
        "taskId": 4,
        "taskDescr": "Fourth task header update",
        "taskDueDate": "2022-05-01",
        "taskCompleteDate": "2022-05-02",
        "taskInsertUser": "CLYNCH",
        "taskInsertDate": "2022-05-03"
    }).expect(200);
});

test('Should delete a task header', async () => {
    await request(app).delete('/taskHeader').send({
        "taskId": 4
        }).expect(200);
});


test('Should retrieve a task header', async () => {
    await request(app).get('/taskHeader/detail/4').send().expect(200);
});



//test task item
test('Should retrieve a task item', async () => {
    await request(app).get('/taskItem/detail').send().expect(200);
});

test('Should insert a task item', async () => {
    await request(app).post('/taskItem').send({
        "taskId": 4,
        "taskItemId": 4,
        "taskItemDescr": "Fourth task item insert",
        "taskItemDueDate": "2022-04-01",
        "taskItemCompleteDate": "2022-04-02",
        "taskItemInsertUser": "CLYNCH",
        "taskItemInsertDate": "2022-04-03"
        }).expect(200);
});

test('Should update a task item', async () => {
    await request(app).put('/taskItem').send({
        "taskId": 4,
        "taskItemId": 4,
        "taskItemDescr": "Fourth task item update",
        "taskItemDueDate": "2022-05-01",
        "taskItemCompleteDate": "2022-05-02",
        "taskItemInsertUser": "CLYNCH",
        "taskItemInsertDate": "2022-05-03"
    }).expect(200);
});

test('Should retrieve a task item', async () => {
    await request(app).get('/taskItem/detail/4').send().expect(200);
});


test('Should delete a task header item', async () => {
    await request(app).delete('/taskItem').send({
        "taskId": 4
        }).expect(200);
});
